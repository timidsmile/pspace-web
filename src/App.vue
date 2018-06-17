<template>
  <div>
    <div class="topMenue">
      <TopMenu/>
    </div>
    <div id="app">
      <router-view/>
      <Bottom></Bottom>
    </div>
  </div>

</template>

<script>
  import TopMenu from '@/components/TopMenu.vue'
  import Bottom from '@/components/Bottom.vue'

  export default {
    name: 'app',
    components: {
      TopMenu,
      Bottom
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

</style>
