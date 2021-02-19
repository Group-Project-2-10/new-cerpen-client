<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <div class="navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <div class="d-flex">
          <button class="btn btn-outline-danger" type="submit" @click.prevent="logout">Logout</button>
        </div>
     </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
