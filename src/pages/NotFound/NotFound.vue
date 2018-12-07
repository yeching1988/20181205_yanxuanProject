<template>
  <div>
    <div class="container">
      <div class="text">您找的页面不存在,点击下面按钮返回首页</div>
      <button @click="$router.replace('/home')" >返回</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NotFound"
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/stylus/mixins";
  .container{
    width:100%;
    height: 100%;
    text-align: center;
    .text{
      padding-top: 200px;
      font-size: 0.5rem;
      color:red;
    }
    button{
      margin-top: 100px;
      width: 6.4rem;
      height: 1.22667rem;
      font-size: .4rem;
      line-height: 1.22667rem;
      color: #fff;
      background-color: #b4282d;
      border-radius: .04rem;
    }
  }
</style>
