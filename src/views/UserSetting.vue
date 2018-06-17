<template>

  <el-form ref="form" :model="formModel" label-width="160px">
    <div class="uploader">
      <AvatarUploader v-on:url-changed="onUrlChanged"/>
    </div>

    <div class="userSetting">
      <el-form-item label="用户名">
        <el-input :placeholder="userName" v-model="formModel.userName"></el-input>
      </el-form-item>

      <el-form-item label="昵称">
        <el-input :placeholder="nickname" v-model="formModel.nickname"></el-input>
      </el-form-item>

      <el-form-item label="手机号">
        <el-input :placeholder="mobile" v-model="formModel.mobile"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmitClick">确定</el-button>
      </el-form-item>
    </div>

  </el-form>


</template>

<script>
  import AvatarUploader from '@/components/AvatarUploader.vue'
  import $ from 'jquery'

  export default {
    name: "UserSetting",
    components: {
      AvatarUploader
    },
    data: function () {
      return {
        formModel: {},
        userName: "请输入新的用户名",
        mobile: "135xxxxxxxx",
        avatarURL: "",
        nickname: "请输入新的昵称"
      }
    },
    created() {
      this.getUserDetail();
    },
    methods: {
      onUrlChanged: function (url) {
        console.log("on", url)
        this.avatarURL = url;
      },
      getUserDetail: function () {
        var _this = this;
        $.get('/api/passport/getUserInfo', {}, function (res) {
          console.log(res)
          var resonse = JSON.parse(JSON.stringify(res))

          if (resonse.code == 53001) {
            alert("请先登录")
          }
          if (resonse.code == 0) {
            var data = resonse.data
            _this.userName = data.userName
            _this.mobile = data.mobile
            _this.avatarURL = data.avatarURL
            _this.nickname = data.nickname
          }

        })
      },
      onSubmitClick: function () {
        var _this = this;
        $.post('/api/passport/setting', {
          userName: _this.formModel.userName,
          nickName: _this.formModel.nickname,
          mobile: _this.formModel.mobile,
          avatarUrl: _this.avatarURL,

        }, function (res) {
          console.log(res)
          var resonse = JSON.parse(JSON.stringify(res))
          if (resonse.code != 0) {
            // Alert.
            alert("恭喜，信息更新成功!")
          }

        })
      }
    }
  }
</script>

<style scoped>
  .userSetting {
    width: 40%;
    margin: auto;
  }
</style>
