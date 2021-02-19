<template>
  <div>
    <NavbarHome/>
    <div class="container-fluid" style="margin-top: 50px">
      <div class="container pt-5 d-flex justify-content-around">
        <div class="col-3 d-flex rounded">
          <div class="p-2">
            <div class="bg-dark rounded">
              <h4 class="p-2 text-white">PLAYERS</h4>
            </div>
            <div class="mb-2">
              <button v-if="showPlay === false" @click.prevent="isActive(true)" class="btn btn-warning" style="margin-left: 70px;">Start Game</button>
            </div>
            <!-- Player Card -->
            <Player/>
          </div>
        </div>
        <ContentHome/>
        <PlayGame/>
      </div>
    </div>
  </div>
</template>
<script>
import Player from '../components/Player'
import ContentHome from '../components/ContentHome'
import PlayGame from '../components/PlayGame'
import NavbarHome from '../components/NavbarHome'
export default {
  components: {
    Player,
    ContentHome,
    PlayGame,
    NavbarHome
  },
  methods: {
    isActive (payload) {
      this.$store.dispatch('isActive', payload)
      if (payload) {
        this.$socket.emit('gameStart', true)
      }
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  sockets: {
    gameStart (flag) {
      this.$store.dispatch('isActive', flag)
    }
  },
  computed: {
    showPlay () {
      return this.$store.state.isPlay
    }
  }
}
</script>
<style>
</style>
