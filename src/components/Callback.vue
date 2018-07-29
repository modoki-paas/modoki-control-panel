<template>
  <v-layout align-center justify-center fill-height>
      <v-progress-circular
      :size="70"
      :width="7"
      color="red lighten-2"
      indeterminate
      ></v-progress-circular>
  </v-layout>
</template>

<script>
import AuthService from './Auth/Auth0/AuthService'

export default {
  name: 'Callback',
  created: async function () {
    console.log('aaa')
    try {
      const res = await fetch('../authconfig.json')
      const json = await res.json()

      if (this.$route.params.type === 'auth0') {
        var authService = new AuthService(json.auth0.webAuthOptions)

        var prom = authService.handleAuthentication()
        const res = await prom
        if (res == null) {
          this.$router.push('/')
        }
      } else {
        console.log('Unknown auth type:', this.$route.params.type)
      }
    } catch (err) {
      console.log(err)
      this.$store.commit('setError', err.toString())
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
