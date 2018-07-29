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
import Auth0 from './Auth/Auth0/AuthService'
import Firebase from './Auth/Firebase/AuthService.js'

export default {
  name: 'Callback',
  created: async function () {
    console.log('aaa')
    try {
      const res = await fetch('../authconfig.json')
      const json = await res.json()

      if (this.$route.params.type === 'auth0') {
        var authService = new Auth0(json.auth0.webAuthOptions, json.auth0.metaDataBinding)

        const res = await authService.handleAuthentication()
        if (res == null) {
          this.$router.push('/')
        }
      } else if (this.$route.params.type === 'firebase') {
        var firebase = new Firebase(json.firebase.config, json.firebase.metaDataBinding)

        try {
          const accessToken = await firebase.handleResponse()

          firebase.setSession(accessToken)

          this.$router.push('/')
        } catch (err) {
          this.$store.commit('setError', err.toString())
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
