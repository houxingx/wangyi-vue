<template>
  <footer class="footer ">
    <span class="guide_item " :class="{on:isCurrent('/home')}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item " :class="{on:isCurrent('/meet')}" @click="goto('/meet')">
      <span class="item_icon">
        <i class="iconfont icon-iconset0489"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item " :class="{on:isCurrent('/classify')}" @click="goto('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-iconyihuifu-"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item " :class="{on:isCurrent('/shopcar')}" @click="goto('/shopcar')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item " :class="{on:isCurrent('/person')}" @click="goto('/person')">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxin"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>

<script>
  export default {
    methods:{
      isCurrent(path){
        return this.$route.meta.footer === path
      },
      goto(path){
        this.$router.replace(path)
      }

    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer
    top-border-1px(#e4e4e4,1px)
    position fixed
    bottom 0
    left 0
    right 0
    width 100%
    height 50px
    z-index 20
    display flex
    background-color #fff
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #111111
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 19px
</style>
