<template>
  <el-form ref="form" :model="formModel" label-width="160px">
    <el-form-item label="用户名">
      <el-input v-model="formModel.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formModel.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "Login",
    data: function () {
      return {
        formModel: {
        }
      }
    },
    methods: {
      login: function (evt) {
        var _this = this;
        console.log(this.name, this.password)
        $.post('/api/session/login', {
          userName: _this.formModel.name,
          passwd: _this.formModel.password,
        }, function (res) {
          console.log(res)
          window.location.href = '/page/userDetail'
        })
      }
    }
  }
</script>

<style scoped>

</style>
