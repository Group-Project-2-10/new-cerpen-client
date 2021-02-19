<template>
  <div v-if="showPlay" class="col-8 bg-dark rounded shadow overflow-scroll" style="height: 500px;">
    <form action="" class="d-flex justify-content-center" @submit.prevent="addSentences();hapusSentences()">
        <input type="text" class="form-control m-4" v-model="sentences">
        <button type="submit" class="form-control m-4" style="width: 200px">Submit</button>
    </form>
    <div class="m-3 rounded shadow overflow-scroll" style="height: auto;background:rgba(0, 0, 0, 0.15)">
      <!-- <p class="p-3 m-2" v-for="(sentence, index) in sentencesArr" :key="index">{{ sentence }}</p> -->
      <p class="p-3 m-2 text-white">{{ tempSentences.join('. ') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayGame',
  data () {
    return {
      sentences: '',
      sentencesArr: [],
      contohSocket: '',
      userId: localStorage.getItem('userId'),
      username: localStorage.getItem('username')
    }
  },
  methods: {
    addSentences () {
      this.$store.dispatch('addSentences', this.sentences)
      const tmp = this.tempSentences
      const tmp2 = tmp[tmp.length - 1]
      this.$socket.emit('newMessage', tmp2)
      if (tmp.length > 4) {
        this.$store.dispatch('addStory', {
          title: 'Story',
          sentences: tmp
        })
        this.$store.dispatch('doResetSentences')
        this.$store.dispatch('isActive', false)
        this.$socket.emit('gameFinished', true)
        this.sentencesArr = []
      }
      // this.$socket.emit('newMessage', tmp2)
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
      return this.$store.state.tempSentences
    },
    sentencesSocket () {
      return this.$store.state.sentencesSocket
    }

  },
  sockets: {
    connect () {
      console.log('------connected')
    },
    serverMessage (data) {
      this.sentencesArr.push(data)
    }
  }
}
</script>

<style>

</style>
