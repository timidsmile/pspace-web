<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>

    <h2> 进入需要邀请码 </h2>
    <h3>如果你已注册，直接进行登录 >> </h3>

    <h3>如果你未注册，需要进行注册: </h3>

    <h5>注册需要邀请码 </h5>
    如果有邀请码请直接进行注册,<br>
    如果没有可以找人邀请获得

    <h5>邀请码是什么</h5>
    <ul>
      <li><a href="/page/help" target="_blank">help</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
