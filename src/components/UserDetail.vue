<template>
    <div class="UserDetail">
        <h1> 用户名: {{ resUsername }} </h1>
        <h1> 邮箱: {{email}} </h1>
        <h1> 你的头像: {{avatarURL}} </h1>
        <h1> 昵称: {{nickname}} </h1>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "UserDetail",
        data: function () {
            return {
                resUsername:"",
                email:"",
                avatarURL:"",
                nickname:""
            }
        },
        created(){
            this.getUserDetail();
        },
        methods: {
            getUserDetail: function () {
                var _this = this;
                $.get('/api/passport/getUserInfo', {
                }, function (res) {
                    console.log(res)
                    var resonse = JSON.parse(JSON.stringify(res))
                    var data = resonse.data
                    _this.resUsername = data.userName
                    _this.email = data.email
                    _this.avatarURL = data.avatarURL
                    _this.nickname = data.nickname
                })
            }
        }
    }
</script>

<style scoped>

</style>
