<template>
  <div v-if="showPlay" class="col-8 bg-warning rounded shadow overflow-scroll" style="height: 500px;">
    <form action="" class="d-flex justify-content-center" @submit.prevent="addSentences();hapusSentences()">
        <input type="text" class="form-control col-7 m-4" v-model="sentences">
        <input type="submit" class="form-control col-7 m-4" @click.prevent="addSentences()">
    </form>
    <div class="m-3 bg-success rounded shadow overflow-scroll" style="height: auto">
      <p class="p-3 m-2">{{ tempSentences }}</p>
    </div>
    <div>
      <!-- <input type="text" class="form-control col-7 m-4" v-model="sentences">
      <input type="submit" class="form-control col-7 m-4" @click.prevent="sendMessage"> -->
      <ul>
        <li v-for="(sentence, i) in sentencesSocket" :key="i">
          <div>
            <span>{{ sentence }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import swal from 'sweetalert'

export default {
  name: 'PlayGame',
  data () {
    return {
      sentences: '',
      sentencesArr: [],
      contohSocket: ''
    }
  },
  methods: {
    addSentences () {
      this.$store.dispatch('addSentences', this.sentences)
      const tmp = this.tempSentences
      if (tmp.length > 10) {
        this.$store.dispatch('addStory', {
          title: 'Story',
          sentences: tmp
        })
        this.$store.dispatch('isActive', false)
        this.$socket.emit('newMessage', tmp)
      }
    },
    hapusSentences () {
      this.sentences = ''
    },
    sendMessage () {
      // const tmp = this.tempSentences
      // const data = {
      //   // id: new Date(),
      //   sentences: tmp
      // }
      // this.$socket.emit('newMessage', data)
    }
  },
  computed: {
    showPlay () {
      return this.$store.state.isPlay
    },
    tempSentences () {
      return this.$store.state.tempSentences.join('. ')
    },
    sentencesSocket () {
      return this.$store.state.sentencesSocket
    }

  },
  socket: {
    connect () {
      console.log('------connected')
    },
    serverMessage (data) {
      console.log(data, 'alfkajsfsf')
    }
  }
}
</script>

<style>

</style>
