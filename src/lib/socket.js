import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import store from '../store'

const socket = new VueSocketIO({
  connection: 'http://localhost:3000/',
  debug: true,
  vuex: {
    store,
    actionPrefix: 'SOCKET_'
  }
})
Vue.use(socket)
