<template>
<v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue-grey lighten-2">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-flex xs12>
                  Choose a login method.
                </v-flex>
                <v-flex xs12>
                  <v-btn depressed large color="orange darken-2">Login with Auth0</v-btn>
                </v-flex>
                <v-flex xs12>
                  <v-btn depressed large color="amber lighten-1">Login with Firebase</v-btn>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script scoped>
export default {
  data () {
    this.$store.commit('setName', '')
    return {
      name: ''
    }
  },
  methods: {
    login: function () {
      this.$store.commit('setName', this.name)
      console.log(this.$store.state.name)
      this.$router.push('/chat')
    }
  }
}
</script>
