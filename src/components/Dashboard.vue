<template>
  <div>
    <div class="display-1">Welcome to modoki control panel</div>

    <v-layout justify-start class="pt-2">
      <h1>Status</h1>
    </v-layout>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
       <v-flex xs12 sm3>
          <v-card color="blue lighten-1" class="white--text" height="100%">
            <v-card-title class="pa-2">
                <v-flex md12 justify-center>
                  <div class="headline" >Created</div>
                </v-flex>
            </v-card-title>
            <v-card-text class="pa-0">
                <v-flex md12>
                  <div class="subheading">{{createdCount}} containers</div>
                </v-flex>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm3>
          <v-card color="blue lighten-1" class="white--text" height="100%">
            <v-card-title class="pa-2">
                <v-flex md12 justify-center>
                  <div class="headline" >Running</div>
                </v-flex>
            </v-card-title>
            <v-card-text class="pa-0">
                <v-flex md12>
                  <div class="subheading">{{runningCount}} containers</div>
                </v-flex>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm3>
          <v-card class="white--text" height="100%" v-bind:color="(errorCount==0?'grey':'red') +  ' lighten-1'">
            <v-card-title class="pa-2">
                <v-flex md12 justify-center>
                  <div class="headline" >Error</div>
                </v-flex>
            </v-card-title>
            <v-card-text class="pa-0">
                <v-flex md12>
                  <div class="subheading">{{errorCount}} containers</div>
                </v-flex>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout justify-start class="pt-2">
      <h1>Notice</h1>
    </v-layout>
    <v-container fluid>
      <v-layout d-block justify-start>
        <div class="subheading">
          <p>Thank you for using <a href="https://github.com/modoki-paas/modoki">modoki</a>!</p>
          <p>This project is still in development.</p>
          <p>We welcome your contribution to this project.</p>
          <p>The reference is <a href="https://github.com/modoki-paas/modoki">here</a></p>
        </div>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import API from '@/API'

export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  created () {
    API.fetchContainers()
  },
  methods: {

  },
  computed: {
    createdCount: function () {
      return this.$store.state.containers.length
    },
    runningCount: function () {
      return this.$store.state.containers.filter(x => x.status === 'Running').length
    },
    errorCount: function () {
      return this.$store.state.containers.filter(x => x.status === 'Error').length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
