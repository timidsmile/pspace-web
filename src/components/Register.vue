<template>
  <el-form ref="form" :model="formModel" label-width="160px">
    <el-form-item label="用户名">
      <el-input v-model="formModel.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formModel.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="formModel.rePassword"></el-input>
    </el-form-item>
    <el-form-item label="绑定邮箱">
      <el-input v-model="formModel.email"></el-input>
    </el-form-item>
    <el-form-item label="输入邀请码">
      <el-input v-model="formModel.code"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="register">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "Register",
    data: function () {
      return {
        formModel: {}
      }
    },
    methods: {
      register: function (evt) {
        var _this = this;
        console.log(this.name, this.password)
        $.post('http://localhost:8080/session/register', {
          userName: _this.formModel.name,
          passwd: _this.formModel.password,
          rePassword: _this.formModel.rePassword,
          email: _this.formModel.email,
          code: _this.formModel.code,
        }, function (res) {
          console.log(res)
          window.location.href = '/#/userDetail'
        })
      }
    }
  }
</script>

<style scoped>

</style>
