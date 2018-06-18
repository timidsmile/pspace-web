<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(message, index) in messageList" :key="message.id" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="message.img" class="image">
          <div style="padding: 14px;">
            <span>{{message.desc}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

<script>
  export default {
    name: "myCircle",
    data() {
      return {
        currentDate: new Date(),
        userText: "这是我的第一个朋友圈",
        userImg: "/static/images/5.jpeg",
        messageList: [
          {
            "id":1,
            "memberInfo" : {
              "userID":"123",
              "avatarUrl" : "",
            },
            "img": "/static/images/system/5.jpeg",
            "desc": "今天真开心!",
            "createTime": "2017-09-01"
          },
          {
            "id":2,
            "memberInfo" : {
              userID:"123",
              "avatarUrl" : "",
            },
            "img": "/static/images/system/4.jpeg",
            "desc": "今天真开心!",
            "createTime": "2017-09-01"
          },
          {
            "id":3,
            "memberInfo" : {
              userID:"123",
              "avatarUrl" : "",
            },
            "img": "/static/images/system/3.jpeg",
            "desc": "天气真好!",
            "createTime": "2017-09-01"
          }
        ]
      }
    }
  }
</script>
