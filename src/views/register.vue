<template>
  <div class="background">
    <div class="title">
        <h1>Cerpen DIY</h1>
        <h3>Tulis ceritamu !</h3>
    </div>

    <div class="register-form-container d-flex flex-row justify-content-center">
        <div class="img-thumbnail me-3">
          <img style="width:auto;height:400px;" src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
        </div>
        <div class="d-flex justify-content-center">
          <form v-on:submit.prevent="register" class="" style="margin-top:80px; margin-left: 30px">
              <div class="form-group">
                  <label for="input-username">Username</label><br><br>
                  <input type="text" class="form-control" id="input-username" placeholder="Enter username" v-model="usernameForm">
              </div><br>
              <button type="submit" class="btn-lg btn-primary">Submit</button>
          </form>
        </div>
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
    text-align: center;
}
.register-form-container {
    padding: 20px 0px 20px 0px;
    background:rgba(0, 0, 0, 0.15);
}

.register-form-container label {
    font-size: xx-large;
}
</style>
