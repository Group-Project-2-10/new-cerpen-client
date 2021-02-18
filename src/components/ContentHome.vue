<template>
  <div v-show="showContent === false" class="col-8 bg-warning rounded shadow overflow-scroll" style="height: 500px;">
    <div class="container-fluid align-items-center d-flex justify-content-center bg-dark text-white">
      <h3>History Story</h3>
    </div>
    <div class="m-2 bg-success rounded shadow" v-for="story in dataStory" :key="story.id">
      <h6>{{ story.title }}</h6>
      <p class="p-3 m-2">
        {{ story.sentences }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentHome',
  computed: {
    showContent () {
      return this.$store.state.isPlay
    },
    dataStory () {
      return this.$store.state.stories
    }
  },
  created () {
    this.$store.dispatch('fetchStory')
  }
}
</script>

<style>

</style>
