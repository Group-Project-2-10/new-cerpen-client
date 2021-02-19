import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import store from '../store'

const socket = new VueSocketIO({
  connection: 'https://cerpen-diy.herokuapp.com/',
  debug: true,
  vuex: {
    store,
    actionPrefix: 'SOCKET_'
  }
})
Vue.use(socket)
