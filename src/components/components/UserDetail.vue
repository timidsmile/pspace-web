<template>
    <div class="UserDetail">
        <h1> 用户名: {{ username }} </h1>
        <h1> 邮箱: ...{{ userEmail }} </h1>
        <h1> 昵称: ...{{ nickname }} </h1>
        <h1> 头像: ...{{ avatarURL }} </h1>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "UserDetail",
        data: function () {
            return {
                username:"",
                userEmail:"",
                nickname:"",
                avatarURL:"",
            }
        },
        created(){
            cv = this.getUserDetail();
        },
        methods: {
            getUserDetail: function (evt) {
                var _this = this;
                $.get('http://localhost:8080/passport/getUserInfo', {
                    userID: "123"
                }, function (response) {
                    var data = JSON.parse(response.data)
                    console.log(response)
                    if (data.code === 0) {
                        _this.resUsername = data.userName
                        _this.userEmail = data.userEmail
                        _this.nickname = data.nickname
                        _this.avatarURL = data.avatarURL
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>