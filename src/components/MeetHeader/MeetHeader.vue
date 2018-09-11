<template>
  <header class="header">
    <div class="item_container">
      <a class="to_home item_icon">
        <i class="iconfont icon-shouye" @click="tohome"></i>
      </a>
      <a class="header_title item_icon">
        <img src="../../common/images/wangyi.png"/>
      </a>
      <div class="right item_icon">
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods:{
      tohome(){
        this.$router.push('/home')
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    position fixed
    top 0
    left 0
    background #fafafa
    width 100%
    height 44px
    z-index 200
    border-bottom  1px solid #D5D5D5
    .item_container
      position relative
      width 100%
      height 100%
      box-sizing border-box
      padding 0 8px 0 12px
      vertical-align center
      .to_home
        width auto
        height 100%
        text-align center
        line-height 44px
      .header_title
        img
          position absolute
          top 0
          left 0
          right 0
          bottom  0
          margin auto
          height 25px
          transform scale(0.9)
      i
        font-size 26px
      .right
        display inline-block
        position absolute
        right 12px
        line-height 44px
        i
          margin-left 10px

</style>
