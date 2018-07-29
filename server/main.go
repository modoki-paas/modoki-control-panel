package main

import (
	"context"
	"encoding/json"
	"flag"
	"io/ioutil"
	"log"
	"net/http"
	"net/http/httputil"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/modoki-paas/modoki/consul_traefik"
)

const (
	traefikFrontendName = "modoki_web"
	traefikBackendName  = "modoki_web_backend"
	serverName          = "modoki_server"

	traefikTopFrontendName = "modoki_top"
	traefikTopBackendName  = "modoki_top_backend"
)

var (
	consulHost  = flag.String("consul", "localhost:8500", "Consul(KV)")
	publicAddr  = flag.String("addr", "modoki.example.com", "API ep: modoki.example.com Service ep: *.modoki.example.com")
	traefikAddr = flag.String("traefikAddr", "http://modoki", "Address to register on traefik")
	https       = flag.Bool("https", true, "Enable HTTPS")
	dir         = flag.String("dir", "./", "Path to serve files")
	debug       = flag.String("debug", "", "Redirection for debug(XXX.XXX.XXX.XXX:8080)")
	authConfig  = flag.String("auth", "/auth/authconfig.json", "path to authconfig.json")
	help        = flag.Bool("help", false, "Show this")
)

func debugHandler() http.Handler {
	director := func(request *http.Request) {
		url := *request.URL
		url.Scheme = "http"
		url.Host = *debug

		req, err := http.NewRequest(request.Method, url.String(), request.Body)
		if err != nil {
			log.Fatal(err.Error())
		}
		req.Header = request.Header
		*request = *req
	}
	rp := &httputil.ReverseProxy{Director: director}

	return rp
}

func main() {
	flag.Parse()

	if *help {
		flag.Usage()
		return
	}

	var config map[string]interface{}
	var jsonRawBytes []byte

	if fp, err := os.Open(*authConfig); err != nil {
		log.Fatal("Opening auth config error: ", err)
	} else {
		jsonRawBytes, err = ioutil.ReadAll(fp)

		if err != nil {
			log.Fatal("Reading auth config error: ", err)
		}

		if err := json.Unmarshal(jsonRawBytes, &config); err != nil {
			log.Fatal("Invalid auth config format: ", err)
		}
	}

	consul := consulInit()
	defer finalize(consul)

	mux := http.NewServeMux()

	mux.HandleFunc("/web/authconfig.json", func(rw http.ResponseWriter, req *http.Request) {
		if req.Method != "GET" {
			rw.WriteHeader(http.StatusNotFound)
			rw.Write([]byte("Not Found"))

			return
		}

		rw.Header().Set("Content-Type", "application/json")
		rw.Write(jsonRawBytes)
		return
	})

	mux.HandleFunc("/", func(rw http.ResponseWriter, req *http.Request) {
		rw.Header().Add("Location", "/web/")
		rw.WriteHeader(http.StatusMovedPermanently)
	})

	var fileHandler http.Handler

	fileHandler = http.StripPrefix("/web/", http.FileServer(http.Dir(*dir)))

	if *debug != "" {
		fileHandler = debugHandler()
	}

	mux.Handle("/web/", fileHandler)

	server := http.Server{
		Addr:    ":80",
		Handler: mux,
	}

	go func() {
		ch := make(chan os.Signal, 1)
		signal.Notify(ch,
			syscall.SIGTERM,
			syscall.SIGINT,
			syscall.SIGHUP,
		)

		<-ch

		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)

		defer cancel()

		server.Shutdown(ctx)
	}()

	if err := server.ListenAndServe(); err != nil {
		log.Fatal("ListenAndServer error: ", err)
	}

}

func consulInit() *consulTraefik.Client {
	consul, err := consulTraefik.NewClient("traefik", *consulHost)

	if err != nil {
		log.Fatal("error: Connecting to consul server error", err)
	}

	if ok, err := consul.HasFrontend(traefikTopFrontendName); err != nil {
		log.Fatal("error: consul.HasFrontend error", err)
	} else if !ok {
		if err := consul.AddValueForFrontend(traefikTopFrontendName, "routes", "prefix", "rule", "Host:"+*publicAddr+";Path:/"); err != nil {
			log.Fatal("error: consul.AddValueForFrontend error", err)
		}

		if err := consul.AddValueForFrontend(traefikTopFrontendName, "backend", traefikTopBackendName); err != nil {
			log.Fatal("error: consul.AddValueForFrontend error", err)
		}
	}

	if err := consul.NewBackend(traefikTopBackendName, serverName, *traefikAddr); err != nil {
		log.Fatal("error: consul.NewBackend error", err)
	}

	if ok, err := consul.HasFrontend(traefikFrontendName); err != nil {
		log.Fatal("error: consul.HasFrontend error", err)

	} else if !ok {
		if err := consul.AddValueForFrontend(traefikFrontendName, "routes", "prefix", "rule", "Host:"+*publicAddr+";PathPrefix:/web"); err != nil {
			log.Fatal("error: consul.AddValueForFrontend error", err)
		}
		if err := consul.NewFrontend(traefikFrontendName, "Host:"+*publicAddr); err != nil {
			log.Fatal("error: consul.NewFrontend error", err)
		}

		if err := consul.AddValueForFrontend(traefikFrontendName, "passHostHeader", true); err != nil {
			log.Fatal("error: consul.AddValueForFrontend error", err)
		}

		if *https {
			if err := consul.AddValueForFrontend(traefikFrontendName, "headers", "sslredirect", true); err != nil {
				log.Fatal("error: consul.AddValueForFrontend error", err)
			}
		}

		if err := consul.AddValueForFrontend(traefikFrontendName, "backend", traefikBackendName); err != nil {
			log.Fatal("error: consul.AddValueForFrontend error", err)
		}
	}

	if err := consul.NewBackend(traefikBackendName, serverName, *traefikAddr); err != nil {
		log.Fatal("error: consul.NewBackend error", err)
	}

	return consul
}

func finalize(consul *consulTraefik.Client) {
	consul.DeleteBackend(traefikBackendName)
}
