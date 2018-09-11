<template>
  <div class="shopCar-wrap">
    <header>
      <div>
        <span class="title">购物车</span>
      </div>
      <span class="right-title">领劵</span>
    </header>
    <div class="container">
      <div class="text">
        <p class="item_icon">
          <i class="iconfont icon-yuanquan"></i><span>30天无忧退货</span>
        </p>
        <p class="item_icon">
          <i class="iconfont icon-yuanquan"></i><span>48小时快速退款</span>
        </p>
        <p class="item_icon">
          <i class="iconfont icon-yuanquan"></i><span>满88元免邮费</span>
        </p>
      </div>
      <div class="item_icon car">
        <i class="iconfont icon-gouwuche"></i>
      </div>
      <div class="content ">
        <span>去添加点什么吧</span>
      </div>
      <div class="loginIn">
        <mt-button type="danger" @click.native="toLogin" class="but">登录</mt-button>
      </div>
    </div>

  </div>
</template>

<script>

  import MtButton from "../../../node_modules/mint-ui/packages/button/src/button.vue";

  export default {
    data() {
      return {}
    },
    components:{
      MtButton
    },
    methods:{
      toLogin(){
        this.$router.push('/person')
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .shopCar-wrap
    height 100%
    width 100%
    header
      width 100%
      height 44px
      background #fff
      position fixed
      top 0
      left 0
      z-index 200
      div
        width 100%
        height 100%
        text-align center
        line-height 44px
        .title
          font-size 20px
          color #333
      .right-title
        position absolute
        top 50%
        right 3%
        transform translate(-50%,-50%)
        color red
        float right

    .container
      width 100%
      height 100%
      padding-top 50px
      box-sizing border-box
      background #f4f4f4
      position relative
      .text
        display flex
        width 100%
        p
          flex 1
          font-size 12px
          color #666
          padding-left 10px
          .iconfont
            transform scale(0.5)



      .car
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        .iconfont
          font-size 120px
          color #bbb
      .content
        position absolute
        top 60%
        left 50%
        transform translate(-50%,-50%)
      .loginIn
        position absolute
        top 70%
        left 50%
        transform translate(-50%,-50%)
        width 100%
        text-align center
        .but
          background #b4282d
          width 80%
</style>
