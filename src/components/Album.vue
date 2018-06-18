<template>
  <div class="album" @click="getAlbumDetail">
    <div class="album-imgs">
      <img class="img-item-0 img-item" :src="data.wonderImages[0]"/>
      <img class="img-item-1 img-item" :src="data.wonderImages[1]"/>
      <img class="img-item-2 img-item" :src="data.wonderImages[2]"/>
      <div class="album-name">{{data.albumName}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Album",
    props: ['data'],
    methods: {
      getAlbumDetail: function() {
        console.log("open a new page for show album detail");
      }
    }
  }
</script>

<style scoped>
  .album-imgs {
    position: relative;
  }

  .img-item {
    position: absolute;
    width: 300px;
    height: 200px;
    z-index: 1000;
  }

  .img-item-0 {
    left: 20px;
    top: 20px;
  }

  .img-item-1 {
    left: 60px;
    top: 40px;
  }

  .img-item-2 {
    left: 120px;
    top: 60px;
  }

  .album-name {
    left: 10px;
    top: 100px;
  }
</style>
