<template>
  <v-container fluid fill-height>
    <v-flex xs12>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="blue-grey lighten-2">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text v-if="loading">
              <v-progress-circular
              :size="70"
              :width="7"
              color="red lighten-2"
              indeterminate
              ></v-progress-circular>
            </v-card-text>
            <v-card-text v-else>
              <v-flex xs12>
                Choose a login method.
              </v-flex>
              <v-flex xs12 v-if="'auth0' in this.authOptions" @click.stop="loginWithAuth0()">
                <v-btn depressed large color="orange darken-2">Login with Auth0</v-btn>
              </v-flex>
              <v-flex xs12 v-if="'firebase' in this.authOptions" @click.stop="loginWithFirebase()">
                <v-btn depressed large color="amber lighten-1">Login with Firebase</v-btn>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-dialog
      v-model="firebaseDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Login with Firebase
        </v-card-title>

        <v-card-text>
          <div id="firebase-popup"></div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script scoped>
import Auth0 from './Auth/Auth0/AuthService.js'
import Firebase from './Auth/Firebase/AuthService.js'
import 'firebaseui/dist/firebaseui.css'

export default {
  data () {
    return {
      name: '',
      authOptions: {},
      loading: true,
      firebaseDialog: false,
      firebaseService: null
    }
  },
  created () {
    fetch('./authconfig.json').then(function (res) {
      return res.json()
    }).then((res) => {
      this.authOptions = res
      this.loading = false

      if ('firebase' in this.authOptions && this.$route.query['firebase-mode'] === 'select') {
        this.loginWithFirebase()
      }
    }).catch(err => {
      this.$store.commit('setError', err.toString())
    })
  },
  methods: {
    login: function () {
      this.$store.commit('setName', this.name)
      this.$router.push('/chat')
    },
    loginWithAuth0 () {
      var authService = new Auth0(this.authOptions.auth0.webAuthOptions, this.authOptions.auth0.metaDataBinding)

      authService.login()
    },
    loginWithFirebase () {
      this.firebaseService = new Firebase(this.authOptions.firebase.config, this.authOptions.firebase.metaDataBinding)
      this.firebaseService.login('#firebase-popup')
      this.firebaseDialog = true
    }
  }
}
</script>
