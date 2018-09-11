<template>
  <div class="container">
    <MeetHeader/>

    <div class="main-all">

      <div class="m-banner">
        <div class="swiper-container swiper1">
          <div class="swiper-wrapper">
            <a class="swiper-slide" v-for="(item,index) in banners" :key="index">
              <img :src="item.picUrl">
              <div class="content">
                <div class="sub-title">——{{item.subTitle}}——</div>
                <div class="title">{{item.title}}</div>
                <div class="dec">{{item.desc}}</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="explore-swiper">
        <div class="swiper-container swiper2">
          <div class="swiper-wrapper">
            <a class="swiper-slide" v-for="(item,index) in columns" :key="index">
              <img :src="item.picUrl">
              <div class="content">
                <div class="sub-title">{{item.articleCount}}</div>
                <div class="title">{{item.title}}</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <RecommendYou title="为您推荐" :num="2" attrName="recommends" />

      <div class="explore-ten-hour">
        <div class="inner">
          <div class="title">
            十点一刻
          </div>
          <div class="swiper-container swiper3">
            <div class="swiper-wrapper">
              <a class="swiper-slide" v-for="(item,index) in tenfifteen">
                <div>——今日话题——</div>
                <div>{{item.title}}</div>
                <div>{{item.desc}}</div>
                <div>
                  <img :src="src" v-for="(src,num) in item.participantAvatar" :key="num">
                  {{item.participantNum}}参与话题</div>
              </a>
              <a class="swiper-slide item_icon">
                查看全部话题
                <i class="iconfont icon-iconset0424"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <RecommendYou title="严选珍品" :num="1" attrName="recommendBanner" />

      <div class="explore-look">
        <div class="title">
          严选look
        </div>
        <a class="content">
          <div class="img-wrap">
            <img src="../../common/images/meetbook.jpg"/>
          </div>
          <div class="topic-info">
            <div><img src="../../common/images/meetFood.jpg">&nbsp;&nbsp;&nbsp;s****u</div>
            <div class="speak">加了冰块一个小金橘，还是觉得比较甜。照评论员说的，下次用苏打水稀释。因为只优惠了10块钱，我有囤了一瓶～</div>
          </div>
        </a>
      </div>



      <div class="explore-more" v-if="findMores.length">
        <div class="title">
          更多精彩
        </div>
        <a class="more-wrap" v-for="(item,index) in findMores" :key="index">
          <div class="img-wrap">
            <img :src="item.scenePicUrl">
          </div>
          <div class="dec">
            <span>{{item.subTitle}}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import MeetHeader from '../../components/MeetHeader/MeetHeader.vue'
  import RecommendYou from '../../components/Recommend-you/Recommend-you.vue'
  export default {
    data() {
      return {}
    },
    computed:{
              /*识物banner - banner下面的channel- 为你推荐 - 十点一刻 - 更多精彩*/
      ...mapState(['banners','columns','recommend', 'tenfifteen','findMores'])
    },
    mounted(){
      /*识物action*/
      this.$store.dispatch('getbanners')
      /*识物下action*/
      this.$store.dispatch('getcolumn')
      /*识物推荐action*/
      this.$store.dispatch('getrecommend')
      /*十点一刻*/
      this.$store.dispatch('gettenfifteen')
      /*更多精彩*/
      this.$store.dispatch('getfindMore')

    },
    watch:{
      banners(){
        this.$nextTick(() =>{
          /*首个轮播图*/
          new Swiper('.swiper1', {
            centeredSlides: true,  //居中
            loop: true ,  //无线循环
            spaceBetween: 10,
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
            },
          })

        })
      },
      columns(){
        this.$nextTick(() =>{
          /*文章轮播图*/
          new Swiper('.swiper2',{
            spaceBetween: 6,
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      },
      tenfifteen(){
        this.$nextTick(() =>{
          /*十点一刻*/
          new Swiper('.swiper3',{
            spaceBetween: 10,
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    components:{
      MeetHeader,
      RecommendYou
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    height 100%
    padding-top 44px
    padding-bottom 50px
    background #f4f4f4
    .main-all
      width 100%
      height 100%
      .m-banner
        width 100%
        height 216px
        box-sizing border-box
        padding 4% 0
        .swiper1
          width 100%
          height 193px
          .swiper-wrapper
            width 100%
            height 100%
            text-align center
            .swiper-slide
              position relative
              display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              -webkit-align-items: center;
              align-items: center;
              width: 90%;
              height 100%
              img
                width 100%
                height 100%
                border-radius 5px
              .content
                position absolute
                top 0
                left 0
                right 0
                bottom 0
                margin auto
                width 238px
                height 100px
                text-align center
                background rgba(255,255,255,.9)
                display flex
                flex-direction column
                flex 1
                .sub-title
                  margin-top 20px
                  font-size 12px
                .title
                  margin-top 10px
                  font-size 17px
                  font-weight bold
                  color black
                .dec
                  margin-top 10px
                  font-size 15px
                  color #333
      .explore-swiper
        width 100%
        height 153px
        padding-top 16px
        margin-bottom 10px
        box-sizing border-box
        border-bottom 10px solid #EEEEEE
        .swiper2
          width 100%
          height 143px
          .swiper-wrapper
            width 100%
            height 118px
            background #fff
            display flex
            .swiper-slide
              position relative
              display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              -webkit-align-items: center;
              align-items: center;
              height 105px
              width 82px
              margin-right 12px
              img
                width 82px
                height 82px
                margin-bottom 9px
              .sub-title
                position absolute
                top 0
                right 0
                font-size 12px
                text-align center
                color #E6E6E6
                background rgba(#2B2B2B,0.9)
              .title
                position absolute
                left 0
                top 92px
                text-align center
                width 100%
                font-size 12px
                color black

      .explore-ten-hour
        width 100%
        height 285px
        padding 0 15px 20px 15px
        margin-bottom 10px
        box-sizing border-box
        border-bottom 10px solid #D5D5D5
        .inner
          width 100%
          height 100%
          .title
            width 100%
            height 60px
            line-height 60px
            text-align center
          .swiper-container
            width 100%
            height 265px
            .swiper-wrapper
              height 100%
              width 100%
              .swiper-slide
                background-image url("../../common/images/meetChart.png")
                background-size 100% 100%
                position relative
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                flex-direction column
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                width: 80%;
                height 80%
                box-sizing border-box
                padding 19px 20px 40px 20px
                img
                  width 23px
                  height 23px
                  border-radius 50%
                  margin-right 3px
                  display inline-block


      .explore-look
        width 100%
        .title
          width 100%
          height 60px
          line-height 60px
          text-align center
        .content
          width 100%
          .img-wrap
            width 100%
            height 100%
            img
              width 100%
              height 100%
          .topic-info
            width 100%
            box-sizing border-box
            padding 12px 15px 23px 15px
            img
              border-radius 50%
              width 23px
              height 23px
            .speak
              line-height 20px
              margin-top 20px
              font-size 14px



      .explore-more
        width 100%
        height auto
        box-sizing border-box
        padding 0 15px 15px 15px
        .title
          width 100%
          height 70px
          text-align center
          line-height 70px
          border-bottom 1px solid #EEEEEE
        .more-wrap
          width 100%
          height 224px
          padding 12px
          margin-bottom 15px
          display block
          box-sizing border-box
          .img-wrap
            width 100%
            height 180px
            img
              width 100%
              height 100%
          .dec
            width 100%
            height 16px
            padding 14px 0
            span
              text-align center
              font-size 14px
              margin-left 5px
              color #333
</style>
