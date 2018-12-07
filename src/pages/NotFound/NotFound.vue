<template>
 <div clsss="container">
   <div class="text">您找的页面不存在,点击下面按钮返回首页</div>
   <button @click="$router.replace('/home')">返回</button>
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
    .text{
      font-size: 0.25rem;
      color:red;
    }
    button{
      margin-top: 10px;
      width: 3.4rem;
      height: 1rem;
      border-radius:0.4rem;
      color:lightcoral;
      font-size: 0.4rem;
    }
  }
    /*width: 6.4rem;*/
    /*height: 1.22667rem;*/
    /*font-size: .4rem;*/
    /*line-height: 1.22667rem;*/
    /*color: #fff;*/
    /*background-color: #b4282d;*/
    /*border-radius: .04rem;*/
</style>
