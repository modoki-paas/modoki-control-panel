import Swagger from 'swagger-client'
import Auth from '@/components/Auth'
import router from '@/router'
import Util from '@/Util'
import Store from '@/store'

export default new class API {
  apiClient_ = null

  async apiClient () {
    if (this.apiClient_ != null) {
      return this.apiClient_
    }

    const origin = location.origin

    const swaggerPath = origin + '/api/v2/swagger/swagger.json'

    Swagger.http.withCredentials = true

    var token = Auth.AccessToken

    if (token == null) {
      router.replace('/login')

      return
    }

    var client = await Swagger(
      swaggerPath,
      {
        responseInterceptor: (res) => {
          if (res.status * 1 === 401) { // Unauthorized
            console.log('Unauthorized')
            try {
              router.replace('/login')
            } catch (e) {
              console.log(e)
            }
          }

          return res
        },
        authorizations: {
          jwt: 'Bearer ' + token
        }
      }
    )

    client.spec.schemes = [location.protocol.split(':')[0]]
    client.spec.host = location.hostname
    console.log('generated')

    this.apiClient_ = client

    return client
  }

  async fetchContainers () {
    try {
      var client = await this.apiClient()

      const res = await Util.asJSON(await client.apis.container.container_list())

      Store.commit('setContainers', res)
    } catch (e) {
      console.log(e)
    }
  }
}()
