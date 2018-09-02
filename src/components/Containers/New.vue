<template>
  <v-container fluid>
    <v-layout>
      <v-btn icon class="ml-0" @click="cancel">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <h1>New Container</h1>
    </v-layout>

    <v-form>
    <v-text-field
      v-model="name"
      :counter="64"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="image"
      label="Image"
      required
    ></v-text-field>
    <v-text-field
      v-model="command"
      label="Command(optional, split with ',')"
    ></v-text-field>
    <v-text-field
      v-model="entrypoint"
      label="Entrypoint(optional, split with ',')"
    ></v-text-field>
    <v-text-field
      v-model="workingDir"
      label="Working Directory(optional)"
    ></v-text-field>
    <v-text-field
      v-model="env"
      label="Environment Variables(optional, split with ',')"
    ></v-text-field>
    <v-text-field
      v-model="volumes"
      label="Volumes(optional, split with ',')"
    ></v-text-field>
    <v-checkbox
      v-model="sslRedirect"
      label="Always SSL"
      required
    ></v-checkbox>
    <v-btn @click="submit()">create</v-btn>
  </v-form>
  </v-container>
</template>

<script>
import API from '@/API'
import Util from '@/Util'

export default {
  name: 'NewContainer',
  data () {
    return {
      name: '',
      image: '',
      command: '',
      entrypoint: '',
      workingDir: '',
      env: '',
      volumes: '',
      sslRedirect: true
    }
  },
  methods: {
    cancel: function () {
      this.$router.push('.')
    },
    submit: async function () {
      var client = await API.apiClient()

      var options = Object.assign({}, this.$data)

      const validateArray = function (val) {
        if (options[val] !== '') {
          options[val] = options[val].split(',')
        } else {
          delete options[val]
        }
      }
      const validate = function (val) {
        if (options[val] === '') {
          delete options[val]
        }
      }

      validateArray('command')
      validateArray('entrypoint')
      validateArray('env')
      validateArray('volumes')

      validate('workingDir')

      client
        .apis
        .container
        .container_create(options)
        .then(res => this.$router.push('/containers'))
        .catch(err => {
          return Util.asJSON(err.response)
        }).then(resp => {
          this.$store.commit('setError', resp.detail)
        }).catch(err => this.$store.commit('setError', err))
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
