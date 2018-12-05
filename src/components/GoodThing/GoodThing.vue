<template>
  <!--首页好物-->
  <div>
    <div class="m-indexFloor" v-for="(item, index) in cateList" :key="index"></div>
    <div class="m-titleGoodGrid">
      <h3 class="title">{{itme.name}}好物</h3>
      <div class="m-goodGrid">
        <div class="wraper" v-for="(itemGoodGrid, index) in item.itemList" :key="index">
          <img :src="itemGoodGrid.listPicUrl" alt="">
          <div class="desc">{{itemGoodGrid.simpleDesc}}</div>
          <div class="name">{{itemGoodGrid.name}}</div>
          <span class="price">{{itemGoodGrid.couponPrice}}</span> //coupon:赠券
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      cateList: Array
    },
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/stylus/mixins";
  .m-indexFloor{
    margin-bottom: .26667*75/@rem;
    background-color: #fff;
    .m-titleGoodGrid{
      background-color: #fff;
      .title{
        .top-border-1px;
        line-height: 1.6*75/@rem;
        text-align:center;
        font-size: .37333*75/@rem;
        color: #333;
        background-color: #fff;
      }
      .m-goodGrid{
        width: 100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .wraper{
          background: #fff;
          width: 46%;
          margin-bottom: .2*75/@rem;
          padding-bottom: .2*75/@rem;
          &:nth-of-type(odd){ //odd是奇数
            margin-right: .3*75/@rem;
            margin-left: .2*75/@rem;
          }
          &:nth-of-type(even){
            margin-right: .2*75/@rem;
          }
          img{
            display: block;
            width: 100%;
            height: 4.6*75/@rem;
            border-radius: .05333*75/@rem .05333*75/@rem 0 0;
            background-color:#f4f4f4;
          }
          .desc{
            bottom:0;
            width: 95%;
            background: #F1ECE2;
            border-radius: 0 0 .05333*75/@rem .05333*75/@rem;
            font-size: .32*75/@rem;
            color: #9F8A60;
            letter-spacing: 0;
            line-height: .38667*75/@rem;
            padding: .26667*75/@rem .13333*75/@rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .name{
            margin-top: .13333*75/@rem;
            padding: 0 .13333*75/@rem;
            line-height: .64*75/@rem;
            text-align:left;
            font-size: .37333*75/@rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color:#333;
          }
          .price{
            line-height: 1;
            font-size: .42667*75/@rem;
            text-align: left;
            color:#b4282d;
            padding: 0 .13333*75/@rem;
          }
        }
      }
    }
  }
</style>
