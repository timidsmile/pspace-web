<template>
    <div class="bottom">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
    .bottom {
        padding: 310px;
    }
</style>
