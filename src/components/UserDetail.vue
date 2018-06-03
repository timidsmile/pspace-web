<template>
    <div class="UserDetail">
        <h1> 用户名: {{ resUsername }} </h1>
        <h1> 邮箱: ...</h1>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "UserDetail",
        data: function () {
            return {
                resUsername:""
            }
        },
        created(){
            cv = this.getUserDetail();
        },
        methods: {
            getUserDetail: function (evt) {
                var _this = this;
                $.get('http://localhost:8080/test/welcome', {
                    key: "mmm"
                }, function (res) {
                    console.info(res)
                    _this.resUsername = res
                })
            }
        }
    }
</script>

<style scoped>

</style>