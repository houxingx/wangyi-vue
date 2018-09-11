<template>
  <div class="allScroll">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in focusList" :key="index">
          <img :src="item.picUrl" />
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="span_container">
      <span><i class="iconfont icon-right-1"></i>
        网易自营品牌</span>
      <span><i class="iconfont icon-right-1"></i>
        30天无忧退货</span>
      <span><i class="iconfont icon-right-1"></i>
        48小时快速退货</span>
    </div>
    <div class="gray"></div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    mounted (){
      new Swiper('.swiper-container', {
        centeredSlides: true,  //居中
        autoplay: {     //自动轮播
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {   //小圆点
          el: '.swiper-pagination'
        },
        loop: true   //无线循环
      });
    },
    computed:{
      ...mapState(['focusList'])
    },
    wathc:{
      focusList(){

      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .allScroll
    float left
    width 100%
    .swiper-container
      width: 100%;
      height: 200px;
      .swiper-slide
        width 100%
        img
          width 100%
          height 100%
    .span_container
      text-align center
      height 24px
      line-height 24px
      span
        font-size 12px
        margin 0 8px
        i
          color red
    .gray
      width 100%
      height 15px
      background #F4F4F4

</style>
