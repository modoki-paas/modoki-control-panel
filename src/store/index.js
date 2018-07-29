import Vue from 'vue'
import Vuex from 'vuex'
import Swagger from 'swagger-client'
import Util from '../Util'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiClient: null,
    containers: []
  },
  mutations: {
    setContainers (state, payload) {
      state.containers = payload
    }
  },
  actions: {
    async fetchContainers ({dispatch, commit, getters}) {
      try {
        var client = await getters.apiClient

        const res = await Util.asJSON(await client.apis.container.container_list())

        commit('setContainers', res)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    apiClient: async function (state) {
      if (state.apiClient != null) {
        return state.apiClient
      }

      const origin = location.origin

      const swaggerPath = origin + '/api/v2/swagger/swagger.json'

      console.log(Swagger.SwaggerClient)
      Swagger.http.withCredentials = true

      Swagger.http({
        responseInterceptor: (res) => {
          if (res.status === 401) { // Unauthorized
            this.state.route.push('/login')
          }

          return res
        }
      })

      var client = await Swagger(
        swaggerPath,
        {
          authorizations: {
            jwt: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtb2Rva2kiLCJleHAiOjE1MzQ5MjYwMTcsImlhdCI6MTUzMjI0NzYxNywiaXNzIjoibW9kb2tpIiwianRpIjoiZTAwMGZjM2ItZTZkNC00MDdiLWFlMDYtMDk3MDA3YmEyN2U0IiwibmJmIjoyLCJzY29wZXMiOiJhcGk6YWNjZXNzIiwic3ViIjoic3ViamVjdCIsInVpZCI6IjEifQ.ok-YOX6pTr5NLgH22GsQVkaqU2mgl6b9GBkPMRAoekQcL_sW5gOfwiSRWioZ395zG5nj_Aq21Dm_YbWMEElCLGoRMBSNJk4aRQY2i45Y31XCiR3cut2RCStiLAXN-HwLdQSIdvB9OYzsBF0ZHYOyC01vjjrtAU6NOHVFUvimPbX6rsdTpbtO3jTLt9NplxOgpjCKgcW2lDDOvm6ENrlEjORH6C75J5gX4EqP0_qMVjMwlqCZlDLB8cV3IkzciImNUxf5uxRGZdd1wvrwaYQkFLPt4RSLh59eUwAp5oKnH2xbd-KHEaDuazQy3HzxJ6ZvLMEo2_D8TySCNzZXukQKY-wTxviOKv49PddGDUKmUwwJW94XAbHQRvgejuYI3rEqP1h3SuKZ8zER_208e8IHboT1hi9uyiFrgb-Z3rz1qMw2UEjDZsqU1_igG2rQKgsUTAbDL2nScupwKgu6rVqJQr57jzlxqhzBTNtFgcFssKql6-Mu3RYnE04hDWvtJmAwpRDD3vvIxZbxCdM7AYK85oQCvLRX-mnSLQyzAr39UZwpU5em1EPhVs1NyhbisPGINBUw63-ZRa-WRYJSXkTzMIVefzuTe6trL3ogQ0wIyofcXPgvMPDioUAHZJT74dG262OAntbkxRQntA5_MYb0JBoESM4XLi8Q3eCMI4yg7CM'
          }
        }
      )

      client.spec.schemes = [location.protocol.split(':')[0]]
      // client.schemes = ['https']
      client.spec.host = location.hostname
      // client.spec.host = 'modoki.tsuzu.xyz'

      // client.spec.authorizations.jwt
      console.log('generated')

      state.apiClient = client

      return client
    }
  }
})
