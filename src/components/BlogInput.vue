<template>

  <el-form ref="form" :model="formModel" label-width="160px">
    <div class="blog-input">
      <el-input
        type="textarea"
        v-on:change="hasBlogChange"
        :rows="50"
        placeholder="请输入内容"
        v-model="formModel.textarea">
      </el-input>

      <el-row>
        <el-button :plain="true" @click="onSubmitClick">发布</el-button>
      </el-row>
    </div>
  </el-form>

</template>

<script>
  import $ from 'jquery'

  export default {
    name: "BlogInput",
    data() {
      return {
        textchange: false,
        formModel: {},
        textarea: ""
      }
    },
    mounted() {
      console.log("mounted.....");
      var that = this;
      var oTimer = null;
      oTimer = setInterval(function() {
        that.saveDrafts();
      }, 120000);
    },

    methods: {
      saveDrafts: function () {
        console.log("before:");
        console.log(this.textchange);

        if (this.textchange === true) {
          // 调用saveDrafts接口保存草稿内容
          console.log("正在保存草稿内容中。。。 Uploading");

          this.textchange = false;
          console.log("textchange, set textchange = 0");
        }
      },

      hasBlogChange: function () {
        // 如果blog内容有更新，设置该值为1
        console.log("内容有变化，set textChange true!");
        console.log(this.textchange);
        this.textchange = true;
      },

      onSubmitClick: function () {
        var _this = this;

        $.post('/api/blog/save', {
          blogDetail: _this.formModel.textarea,
        }, function (res) {


          var resonse = JSON.parse(JSON.stringify(res))
          if (resonse.code == 0) {

            this.$message({
              message: '发布成功!',
              type: 'success'
            });


          } else {

            this.$message.error('系统开小差了，请稍后重试!');

          }


        })

      }
    }
  }

</script>

<style scoped>
  .blog-input {
    width: 700px;
    margin: 0 auto;
  }
</style>
