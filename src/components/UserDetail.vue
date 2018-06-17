<template>
  <div class="UserDetail">
    <div class="user-detail-item">
      <span class="item-name">用户名:</span>
      <span class="item-value"> {{userName}} </span>
    </div>

    <div class="user-detail-item">
      <span class="item-name">邮箱:</span>
      <span class="item-value"> {{email}} </span>
    </div>

    <div class="user-detail-item">
      <span class="item-name"> 你的头像: </span>
      <img class="avartar-img" :src="avatarURL" alt="头像缩略图"/>
    </div>

    <div class="user-detail-item">
      <span class="item-name">昵称:</span>
      <span class="item-value"> {{nickname}} </span>
    </div>

  </div>
</template>

<style scoped>
  #ss {

  }

  span {

  }

  .UserDetail {
    font-size: 15px;
  }

  .user-detail-item {
    margin-top: 50px;
  }

  .item-name {
    font-size: 15px;
    margin-left: 100px;
  }

  .item-value {
    font-size: 15px;
    margin-right: 50px;
  }

  .avartar-img {
    width: 100px;
    margin-right: 0px;
  }

</style>


<script>
  import $ from 'jquery'

  export default {
    name: "UserDetail",
    data: function () {
      return {
        userName: "",
        email: "",
        avatarURL: "",
        nickname: ""
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
          if (resonse.code == 0) {
            var data = resonse.data
            _this.userName = data.userName
            _this.email = data.email
            _this.avatarURL = data.avatarURL
            _this.nickname = data.nickname
          }
        })
      }
    }
  }
</script>
