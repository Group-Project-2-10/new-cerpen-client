<template>
  <div class="container-fluid" style="margin-top: 150px">
    <div class="container pt-5 d-flex justify-content-around">
      <div class="col-3 d-flex rounded">
        <div class="p-2">
          <div class="bg-dark rounded">
            <h4 class="p-2 text-white">PLAYERS</h4>
          </div>
          <div class="mb-2">
            <button @click.prevent="isActive(true)" class="btn btn-warning" style="margin-left: 70px;">Start Game</button>
          </div>
          <!-- Player Card -->
          <Player/>
        </div>
      </div>
      <ContentHome/>
      <PlayGame/>
    </div>
  </div>
</template>
<script>
import Player from '../components/Player'
import ContentHome from '../components/ContentHome'
import PlayGame from '../components/PlayGame'
export default {
  components: {
    Player,
    ContentHome,
    PlayGame
  },
  methods: {
    isActive (payload) {
      this.$store.dispatch('isActive', payload)
    }
  }
}
</script>
<style>
</style>
