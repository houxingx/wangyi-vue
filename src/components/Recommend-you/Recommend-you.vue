<template>
  <div class="container"  v-if="recommend.recommendBanner">
    <div class="title">{{recommend.recommendBanner.nickname}}</div>

    <div v-for="index in num" :key="index">

      <a class="main-post-item">
        <div class="img-container">
          <div class="post-item">{{bigObj.typeName}}</div>
          <img :src="bigObj.picUrl"/>
        </div>
        <div class="dec">
          <div class="title">{{bigObj.title}}</div>
          <span class="num">{{bigObj.priceInfo}}</span>
          <span class="unit">元起</span>
          <div class="subtitle">{{bigObj.subtitle}}</div>
        </div>
      </a>

      <a class="minor-post-item" v-for="(item,index) in smallArray">
        <div class="topic-info">
          <div class="author">
            <img :src="item.avatar">
            <div class="nickname">{{item.nickname}}</div>
          </div>
          <div class="line1">{{item.title}}</div>
          <div class="line2">{{item.subtitle}}</div>
        </div>
        <div class="img-container">
          <img :src="item.picUrl"/>
        </div>
      </a>

    </div>


  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props:{
      num:Number,
      attrName:String
    },
    data() {
      return {
        bigObj:{},
        smallArray:[]
      }
    },
    computed:{
      ...mapState(['recommend'])
    },
    watch:{
      recommend(){
        this.$nextTick( () =>{
          this.bigObj =this.recommend.recommendBanner
        this.smallArray=this.recommend.recommends
        })
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    height auto
    padding 0 15px
    background #fff
    box-sizing border-box
    border-bottom 10px solid #D5D5D5
    .title
      width 100%
      height 60px
      text-align center
      line-height 60px
      font-size 16px
    .main-post-item
      width 100%
      .img-container
        width 100%
        position relative
        img
          width 100%
        .post-item
          position absolute
          left 0
          top 0
          font-size 12px
          padding 3px 3px
          border 1px solid black
          background rgba(255,255,255,.9)
          border-radius 40% 40%
          color #333
      .dec
        box-sizing border-box
        width 100%
        height 94px
        padding 12px 10px 34px 10px
        position relative
        .title
          position relative
          top -20px
          display inline
          font-size 18px
          color #333
          margin-right 65px
        span
          position relative
          top -20px
          font-size 18px
          color #333
        .subtitle
          position relative
          top -30px

    .minor-post-item
      width 100%
      height 136px
      border 1px solid #d9d9d9
      border-radius 4px
      margin-bottom 15px
      display flex
      .topic-info
        width 204px
        padding 0 15px 0 10px
        .author
          position relative
          top 10px
          height 24px
          line-height 24px
          vertical-align center
          img
            width 23px
            height 23px
            border-radius 50%
          .nickname
            display inline-block
            text-align center
            font-size 12px
        .line1
          width 165px
          font-size 17px
          color black
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin 40px 0 15px 0
        .line2
          width 165px
          font-size 15px
          color #333
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      .img-container
        height 100%
        img
          height 100%
</style>
