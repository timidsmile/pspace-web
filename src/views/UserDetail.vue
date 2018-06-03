<template>
    <div class="userDetail">
        <UserDetail/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import UserDetail from '@/components/UserDetail.vue'

    export default {
        name: 'userDetail',
        components: {
            UserDetail
        }
    }

</script>

<style>
    .register {
        width: 40%;
        margin:auto;
    }
</style>