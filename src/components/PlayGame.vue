<template>
  <div v-if="showPlay" class="col-8 bg-warning rounded shadow overflow-scroll" style="height: 500px;">
    <form action="" class="d-flex justify-content-center" @submit.prevent="addSentences();hapusSentences();">
        <input type="text" class="form-control col-7 m-4" v-model="sentences">
        <button type="submit" class="btn btn-primary mt-4" style="height: 35px; width: 150px;">Submit</button>
    </form>
    <div class="m-3 bg-success rounded shadow overflow-scroll" style="height: auto">
      <p class="p-3 m-2">{{ tempSentences }}</p>
    </div>
  </div>
</template>

<script>
// import swal from 'sweetalert'

export default {
  name: 'PlayGame',
  data () {
    return {
      sentences: ''
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
      }
    },
    hapusSentences () {
      this.sentences = ''
    }
  },
  computed: {
    showPlay () {
      return this.$store.state.isPlay
    },
    tempSentences () {
      return this.$store.state.tempSentences.join('. ')
    }
  }
}
</script>

<style>

</style>
