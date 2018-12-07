<template>
  <!--识物-->
  <div class="wrap">
    <ShiwuHeader></ShiwuHeader>
    <div class="swiper">
      <div class="swiper-container" v-if="detail.banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in detail.banner" :key="index">
            <img :src="item.picUrl">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--细节滚动-->
    <DetailScroll :scroll="detail.column"></DetailScroll>
    <!--严选推荐-->
    <DetailItem :detail="detail"></DetailItem>
    <!--十点一刻-->
    <QuarterPastTen :detail="detail"></QuarterPastTen>
    <!--严选LOOK-->
    <DetailLook :detail="detail"></DetailLook>
    <!--更多精彩-->
    <DetailFindMore :detail="detail"></DetailFindMore>
    <!--回顶部-->
    <goTop></goTop>
  </div>
</template>

<script>
   import Swiper from 'swiper'
   import {mapState} from 'vuex'
   import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader.vue'
   import DetailScroll from '../../components/DetailScroll/DetailScroll.vue'
   import DetailItem from '../../components/DetailItem/DetailItem.vue'
   import QuarterPastTen from '../../components/QuarterPastTen/QuarterPastTen.vue'
   import DetailLook from '../../components/DetailLook/DetailLook.vue'
   import DetailFindMore from '../../components/DetailFindMore/DetailFindMore.vue'
   import goTop from '../../components/goTop/goTop.vue'
  export default {
    data(){
      return{

      }
    },
    computed:{
      ...mapState(['detail'])
    },
    mounted(){
      this.$store.dispatch('getDetail')
      new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 30, //间距是30秒
        slidesPerView: 1.15, //滑动预览时间是1.15秒
        centeredSlides: true, //中心滑动
        onInit: function(swiper){
          swiper.slides[1].className = 'swiper-slide swiper-slide-active'
        },
        autoplay:{
          autoplay:true,
          delay: 3000
        }
      })
    },
    //watch监视识物数据的变化
    watch:{
      detail(val){
        //当数据更新时调用nextTick()方法让.swiper-container内容滑动
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            loop: true,
            spaceBetween: 30, //间距是30秒
            slidesPerView: 1.15, //滑动预览时间是1.15秒
            centeredSlides: true, //中心滑动
            onInit: function(swiper){
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            autoplay:{
              autoplay:true,
              delay: 3000
            }
          })
        })
      }
    },
    components: {
      ShiwuHeader,
      DetailScroll,
      DetailItem,
      QuarterPastTen,
      DetailLook,
      DetailFindMore,
      goTop,
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/stylus/mixins';
  .wrap{
    background:#f4f4f4;
    padding-bottom: 90/@rem;
    .right{
      width:20%;

    }
  }
  .swiper-container{
    .swiper-wrapper{
      margin-top: 1.4*75/@rem;
      .swiper-slide{
        img{
          width:100%;
          position: relative;
        }
        .content{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          display: -ms-flexbox;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 6.21333*75/@rem;
          height: 2.64*75/@rem;
          background-color: rgba(255,255,255,.9);
          .subTitle{
            position: relative;
            font-size: .26667*75/@rem;
            color: #7f7f7f;
            line-height: .4*75/@rem;
            padding: 0 .10667*75/@rem;
          }
          .title{
            font-size: .42667*75/@rem;
            line-height: .64*75/@rem;
            color: #333;
            margin-top: .21333*75/@rem;
            font-weight: 700;
          }
        }
        .desc{
          font-size: .32*75/@rem;
          color: #333;
          line-height: .48*75/@rem;
          margin-top: .05333*75/@rem;
        }
      }
    }
  }
</style>
