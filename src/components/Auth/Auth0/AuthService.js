import auth0 from 'auth0-js'
import router from '@/router'
import store from '@/store'
import Auth from '../'

export default class AuthService {
  constructor (webAuthOptions, metaDataBinding) {
    this.WebAuthOptions = JSON.parse(JSON.stringify(webAuthOptions))
    this.MetaDataBinding = metaDataBinding

    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.auth0 = new auth0.WebAuth({
      domain: this.WebAuthOptions.domain,
      clientID: this.WebAuthOptions.clientID,
      redirectUri: this.WebAuthOptions.redirectUri,
      responseType: 'id_token',
      scope: 'openid profile'
    })
  }

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult != null && authResult.idToken != null) {
          console.log(authResult)
          this.setSession(authResult)

          resolve()
        } else if (err) {
          store.commit('setError', err)

          setTimeout(() => router.push('/login'), 3000)
          console.log(err)

          reject(err)
          return
        } else if (!authResult.idToken) {
          err = 'responseType must include id_token.'

          store.commit('setError', err)

          setTimeout(() => router.push('/login'), 3000)

          reject(err)
          return
        }
        reject(new Error('format error'))
      })
    })
  }

  setSession (authResult) {
    Auth.AuthType = 'auth0'
    Auth.AccessToken = authResult.idToken

    const payload = Auth.Payload

    var metadata = {}
    for (const key in this.MetaDataBinding) {
      var t = Object.assign({}, payload)

      for (var v of this.MetaDataBinding.split('.')) {
        t = t[v]
      }

      metadata[key] = t
    }
    Auth.MetaData = metadata
  }
}
