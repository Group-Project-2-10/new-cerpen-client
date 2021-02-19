import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import Swal from 'sweetalert2'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stories: [],
    isPlay: false,
    tempSentences: [],
    sentencesSocket: [],
    currentUserId: 0
  },
  mutations: {
    setStories (state, payload) {
      state.stories = payload
    },
    setIsPlay (state, payload) {
      state.isPlay = payload
    },
    setSentences (state, payload) {
      state.tempSentences.push(payload)
    },
    resetSentences (state) {
      state.tempSentences = []
    },
    setCurrentUserId (state, payload) {
      state.currentUserId = payload
    }
  },
  actions: {
    register (context, payload) {
      const { username } = payload
      axios({
        method: 'POST',
        url: 'register',
        data: {
          username
        }
      })
        .then(({ data }) => {
          localStorage.setItem('userId', data.id)
          localStorage.setItem('username', data.username)
          if (data.errors) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'please insert username'
            })
            context.commit('setCurrentUserId', data.id)
          } else {
            console.log(data, '<<<<<<<<<<<<<<<<<')
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Register Successfully with name ' + data.username,
              showConfirmButton: false,
              timer: 1500
            })
            router.push('/home')
          }
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.error
          })
        })
    },
    fetchStory (context, payload) {
      axios({
        method: 'GET',
        url: 'story'
      })
        .then(dataStory => {
          if (!dataStory) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              html: 'Error not found'
            })
          }
          context.commit('setStories', dataStory.data)
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: error.response.data.error
          })
        })
    },
    addStory (context, payload) {
      const { title, sentences } = payload
      axios({
        method: 'POST',
        url: 'story',
        data: {
          title,
          sentences: sentences.join('. '),
          UserId: localStorage.getItem('userId')
        }
      })
        .then(({ data }) => {
          console.log(data, ' check sotry user')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Game Finished',
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('fetchStory')
          // router.push('PlayGame') --> di push ke dalam game yg dimunculkan pas setelah input
        })
        .catch(error => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: error.response.data.message || error.response.data.error.join('<br/>')
          })
        })
    },
    isActive (context, payload) {
      context.commit('setIsPlay', payload)
      // bingung isactive ketika button playgame dijalankan
      // jika button dijalankan v-model="play" == true
      // maka:
      // component PlayGame show
      // component Content Home hide
      // else jika telah selesai v-model="play" === false
      // balik ke component Content home dengan fetch Data yg telah diupdate
    },
    addSentences (context, payload) {
      context.commit('setSentences', payload)
    },
    doResetSentences (context) {
      context.commit('resetSentences')
    },
    SOCKET_init (context, messages) {
      context.commit('setSentencesApa', messages)
    },
    SOCKET_serverMessage (context, newMessage) {
      context.commit('setSentences', newMessage)
    }
  },
  modules: {
  }
})
