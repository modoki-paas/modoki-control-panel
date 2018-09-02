<template>
    <v-container fluid>
    <v-layout
      justify-start
      row
      wrap
    >

      <h1>Containers</h1>
      <v-btn
        icon
        @click.stop="fetchContainers()"
        >
        <v-icon>cached</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn slot="activator" color="primary" dark class="mb-2" to="/containers/new">New Container</v-btn>

    </v-layout>
    <v-layout
      d-inline-box
    >
      <v-flex md12>
        <v-data-table
          :headers="headers"
          :items="containers"
          :loading="loading"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.image }}</td>
            <td>{{ props.item.command }}</td>
            <td>{{ props.item.status }}</td>
            <td class="px-0">
              <v-icon
                small
                class="mr-2"
                v-if="props.item.status==='Stopped' || props.item.status==='Created'"
                @click="start(props.item.id)"
              >
                play_arrow
              </v-icon>
              <v-icon
                small
                class="mr-2"
                v-if="props.item.status==='Running'"
                @click="stop(props.item.id)"
              >
                pause
              </v-icon>
              <container-config :cid="props.item.id"></container-config>
              <v-icon
                small
                class="mr-2"
                @click="deleteItem(props.item)"
              >
                tv
              </v-icon>
              <container-remove :cid="props.item.id" :name="props.item.name"></container-remove>
            </td>
          </template>
          <template slot="no-data"></template>
        </v-data-table>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import ContainerConfig from '@/components/Containers/Config'
import ContainerRemove from '@/components/Containers/Remove'
import API from '@/API'

export default {
  name: 'Containers',
  components: {
    'container-config': ContainerConfig,
    'container-remove': ContainerRemove
  },
  created: function () {
    API.fetchContainers()
  },
  data () {
    return {
      loading: false,
      pagination: {},
      headers: [
        { text: 'ID', sortable: false, align: 'center' },
        { text: 'Name', sortable: false, align: 'center' },
        { text: 'Image', sortable: false, align: 'center' },
        { text: 'Command', sortable: false, align: 'center' },
        { text: 'Status', sortable: false, align: 'center' },
        { text: '#', sortable: false }
      ]
    }
  },
  computed: {
    containers: function () {
      return this.$store.state.containers
    }
  },
  methods: {
    fetchContainers: () => API.fetchContainers(),
    async start (id) {
      var client = await API.apiClient()

      client.apis
        .container
        .container_start({id})
        .then(res => API.fetchContainers())
        .catch(err => this.$store.commit('setError', err.toString()))
    },
    async stop (id) {
      var client = await API.apiClient()

      client.apis
        .container
        .container_stop({id})
        .then(res => API.fetchContainers())
        .catch(err => this.$store.commit('setError', err.toString()))
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
