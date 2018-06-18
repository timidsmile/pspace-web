<template>
  <div class="personal_albums">
    <div class="personal-album" v-for="oneAlbum in albums">
      <album :data="oneAlbum"></album>
    </div>
  </div>
</template>

<style scoped>
  .personal-album {
    margin-top: 100px;
    margin-bottom: 400px;
  }

</style>

<script>
  import Album from "./Album";

  export default {
    name: "PersonalAlbum",
    components: {Album},
    data: function () {
      return {
        albums: [{
          id: 1,
          albumName: "海贼图集锦1",
          wonderImages: {
            0: "/static/images/system/3.jpeg",
            1: "/static/images/system/1.jpeg",
            2: "/static/images/system/2.jpeg",
          }
        }, {
          id: 2,
          albumName: "海贼图集锦2",
          wonderImages: {
            0: "/static/images/system/4.jpeg",
            1: "/static/images/system/5.jpeg",
            2: "/static/images/system/6.jpeg"
          }
        }]
      }
    }
  }
</script>
