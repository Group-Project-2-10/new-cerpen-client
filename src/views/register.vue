<template>
  <div class="background">
    <div class="title">
        <h1>Cerpen DIY</h1>
    </div>
    <div class="register-form-container d-flex justify-content-center">
        <form v-on:submit.prevent="register">
            <div class="form-group">
                <label for="input-username">Username</label><br><br>
                <input type="text" class="form-control" id="input-username" placeholder="Enter username" v-model="usernameForm">
            </div><br>
            <button type="submit" class="btn-lg btn-primary">Submit</button>
        </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      usernameForm: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        username: this.usernameForm
      })
    }
  }
}
</script>
<style scoped>
.title {
    padding-top: 5rem;
}
.register-form-container {
    padding-top: 10rem;
}

.register-form-container label {
    font-size: xx-large;
}
</style>
