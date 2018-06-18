<template>
  <div class="album">
    <blog-input/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BlogInput from '@/components/BlogInput.vue'

  export default {
    name: 'viewCircle',
    components: {
      BlogInput
    }
  }

</script>

<style>

</style>
