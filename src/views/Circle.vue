<template>
  <div class="album">
    <my-circle></my-circle>
  </div>
</template>

<script>
  // @ is an alias to /src
  import myCircle from '@/components/Circle.vue'

  export default {
    name: 'viewCircle',
    components: {
      myCircle
    }
  }

</script>

<style>

</style>
