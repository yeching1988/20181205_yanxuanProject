<template>
  <!--分类头部搜索框-->
  <div class="m-list" v-if="nav.categoryL1List">
    <div class="banner">
      <img v-lazy="nav.categoryL1List[index].bannerUrl">
    </div>
    <div class="cateList">
      <div class="hd">
        <div class="text">
          <span>{{nav.categoryL1List[index].name}}</span>
          <span>分类</span>
        </div>
      </div>
      <div class="list">
        <div class="cateItem" v-for="(item, indexCate) in nav.categoryL1List[index].subCateList"
              :key="indexCate">
          <div class="cateImg">
            <img v-lazy="item.wapBannerUrl" alt="">
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props:{
      index: Number
    },
    computed:{
      ...mapState(['nav'])
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
 @import "../../common/stylus/mixins";
  .m-list{
    height: 89%;
    background: #ffffff;
    position: absolute;
    top: 88px;
    right: 0;
    margin-left: 2.16*75/@rem;
    padding: .4*75/@rem .4*75/@rem .28*75/@rem;
    .banner{
      position: relative;
      width: 100%;
      height: 2.56*75/@rem;
      display: table;
      img{
        width: 100%;
        border-radius: 4px;
      }
    }
    .cateList{
      .hd{
        height: 1.44*75/@rem;
        line-height: 1.44*75/@rem;
        text-align: center;
        font-size: .32*75/@rem;
        color: #333;
        .text{
          height: 1.44*75/@rem;
          line-height: 1.44*75/@rem;
          text-align: center;
          font-size: .32*75/@rem;
          color: #333;
          span{
            height: 1.44*75/@rem;
            line-height: 1.44*75/@rem;
            text-align: center;
            font-size: .32*75/@rem;
            color: #333;
          }
        }
      }
      .list{
        .cateItem{
          float: left;
          margin-bottom: 50px;
          width: 1.92*75/@rem;
          height: 1.92*75/@rem;
          margin-right: .42*75/@rem;
          .cateImg{
            img{
              display: block;
              width: 100%;
              background: #fff;
            }
          }
          .name{
            height: 75/@rem;
            font-size: .32*75/@rem;
            color: #333;
            text-align: center;
            line-height: -.54667*75/@rem;
          }
        }
      }
    }
  }
</style>
