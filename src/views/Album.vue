<template>
  <div class="album">
    <Carousel></Carousel>
    <personal-album></personal-album>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from '@/components/Carousel.vue'
  import PersonalAlbum from '@/components/PersonalAlbum.vue'

  export default {
    name: 'userDetail',
    components: {
      Carousel,
      PersonalAlbum
    }
  }

</script>

<style>

</style>
