<template>
<v-app>
  <v-navigation-drawer v-model="drawer" app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Control Panel
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile to="/">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile to="/containers/">
        <v-list-tile-action>
          <v-icon>computer</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Containers</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile to="/setting">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Setting</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>
      modoki
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="name.length != 0">
      <v-menu offset-y>
            <v-btn slot="activator" flat>
              {{name}}
            </v-btn>

            <v-list>
              <v-list-tile to="/setting">
                <v-list-tile-title>Setting</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click.stop="logoutDialog=true">
                <v-list-tile-title>Logout</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
    </v-toolbar-items>
  </v-toolbar>
  <v-content class="pt-0">
    <v-layout column fill-height>
      <v-flex>
        <v-alert
          :value="true"
          type="error"
          dismissible
          v-model="errorAlertShown"
        >
          {{$store.state.error}}
        </v-alert>
      </v-flex>

      <v-flex fill-height>
        <v-container fluid fill-height>
          <v-layout>
            <v-flex>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
        </v-flex>
      </v-layout>
    <logout-dialog :logoutDialog=logoutDialog @close="closeEvent"></logout-dialog>
  </v-content>
  <v-footer app>
    <v-layout
      justify-center
      row
      wrap
    >
      Copyright (c) 2018 Tsuzu
    </v-layout>
  </v-footer>
</v-app>
</template>

<script type="text/babel">
import Auth from '@/components/Auth'
import LogoutDialog from '@/components/utils/LogoutDialog'

export default {
  name: 'App',
  components: {
    'logout-dialog': LogoutDialog
  },
  data () {
    return {
      drawer: false,
      logoutDialog: false,
      name: ''
    }
  },
  created () {
    this.name = this.getName()
  },
  updated () {
    this.name = this.getName()
  },
  methods: {
    closeEvent: function (event) {
      this.logoutDialog = false
    },
    getName () {
      const authType = Auth.AuthType
      const token = Auth.AccessToken
      console.log('app', authType, token)

      if (authType == null || token == null) {
        return ''
      }

      switch (authType) {
        case null:
          return ''
        case 'auth0':
          return Auth.Payload.nickname || 'user'
        case 'firebase':
          return Auth.Payload.name || 'user'
        default:
          return ''
      }
    }
  },
  computed: {
    errorAlertShown: {
      get: function () {
        return this.$store.state.error.length !== 0
      },
      set: function (val) {
        if (!val) {
          this.$store.commit('clearError')
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
