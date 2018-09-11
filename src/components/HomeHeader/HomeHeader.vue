<template>
  <div class="container">
    <header class="header">
      <img class="wangYiYx" src="../../common/images/wangyi.png"/>
      <img class="search" src="../../common/images/search.png"/>
      <input placeholder="搜索商品，共13111款好污"/>
    </header>
    <TitleNav />
  </div>
</template>

<script>
  import TitleNav from '../../components/TitleNav/TitleNav.vue'
  export default {
    data() {
      return {}
    },
    components:{
      TitleNav,
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    .header
      position fixed
      top 0
      left 0
      width 100%
      height 45px
      padding 3px 5px
      background #fff
      z-index 20
      .wangYiYx
        display inline-block
        width 20%
        height 25px
        margin-left 10px
        margin-top 9px
        transform scale(0.8)
      .search
        position absolute
        top 12px
        left 30%
        transform scale(0.6)
        z-index 30
      input
        position absolute
        top 8px
        right 20px
        display inline-block
        box-sizing border-box
        padding 0 20px 0 47px
        line-height 35px
        background #ededed
        width 70%
        height 35px
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        border-radius:5px
        outline none
        textarea
            outline none


</style>
