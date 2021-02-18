<template>
  <div class="col-8 bg-warning rounded shadow" style="height: 500px;">
    <div class="m-2 bg-success rounded shadow">
      <p class="p-3 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque pariatur cupiditate quasi praesentium accusantium incidunt, eos cumque fuga, excepturi alias, veniam ab aut quam sapiente quia animi consectetur ipsa nisi aperiam reprehenderit. Quidem impedit, temporibus modi, odit nisi veritatis doloremque praesentium, quod esse enim vel quo consectetur repellendus optio provident distinctio eaque neque laudantium totam sapiente accusantium suscipit soluta? Ad quam mollitia magni, dolorem labore repellendus nemo ipsa, beatae rerum ut vero provident pariatur, alias autem vitae facere earum! Laudantium ipsum voluptatem animi ipsa saepe. Ab, facilis architecto, incidunt eveniet officiis et error dolore saepe deserunt adipisci consequatur voluptatum!</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showPlay () {
      return this.$store.state.isPlay
    }
  }
}
</script>

<style>

</style>
