<template>
  <div class="bg-secondary container-card" style="max-height: 430px;">
    <div class="card m-2" style="width: 15rem;">
      <div class="card-body d-flex justify-content-between">
        <div class="col-3">
          <img src="../assets/logo.png" alt="userpicture" class="img-fluid"  style="max-width: 50px;">
        </div>
        <div class="">
          <h5 class="align-middle" style="margin-top: 14px;">{{ player }}</h5>
        </div>
        <div class="d-flex flex-column align-items-end">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      player: localStorage.getItem('username')
    }
  },
  computed: {
    players () {
      return this.$store.state.players
    }
  }
}
</script>

<style>

</style>
