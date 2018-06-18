<template>
  <div class="home">

    <div v-if= "hasLogin">
      <img :src= "avatarURL" width="120px">
      <h3> 欢迎回来 {{nickname}} !! </h3>

    </div>
    <div v-else>


      <img src="/static/images/system/logo.png" width="120px">
      <HelloWorld msg="Welcome to personal space!"/>

      <div class="login">
        <Login/>
      </div>

    </div>

  </div>

</template>

<script>

  // 如果用户未登录就加载该模块
  import HelloWorld from '@/components/HelloWorld.vue'
  import Login from '@/components/Login.vue'
  import $ from 'jquery'

  export default {
    name: "home",
    components: {
      HelloWorld,
      Login

    },
    data: function () {
      return {
        hasLogin:false,
        nickname:"",
        avatarURL:"",
        userName:"",
      }
    },
    created() {
      this.getUserDetail();
    },

    methods: {
      getUserDetail: function () {
        var _this = this;
        $.get('/api/passport/getUserInfo', {}, function (res) {
          var resonse = JSON.parse(JSON.stringify(res))

          if (resonse.code == 53001) {
            _this.hasLogin = false;
            console.log("not login");

          } else if (resonse.code == 0) {
            console.log(" login");

            _this.hasLogin = true;

            var data = resonse.data
            _this.userName = data.userName
            _this.avatarURL = data.avatarURL
            _this.nickname = data.nickname
          }

        })
      }
    }
  }

</script>

<style>
  .login {
    width: 40%;
    margin: auto;
  }
</style>
