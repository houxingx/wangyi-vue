<template>
  <div ref="new_release" class="new_release_container">
    <header>
       <a>
          <span>人气推荐.好物精选</span>
          <div class="item_icon">查看全部
          <i class="iconfont icon-xiangyou-copy"></i>
          </div>
       </a>
    </header>
    <div class="new_release_good2">
      <ul>
        <li v-for="(item,index) in newitemlists2">
          <img :src="item.listPicUrl" alt="">
          <span class="name">{{item.name}}</span>
          <div>{{item.simpleDesc}}</div>
          <span class="much"> ￥</span>
          <span class="much">{{item.retailPrice}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    computed:{
      ...mapState(['newitemlists2'])
    },
    mounted(){
      new BScroll('.new_release_good2',{
        click:true,
        probeType:0,
        scrollX:true
      })

    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .new_release_container
    float left
    width 100%
    bottom-border-1px(white,4px)
    padding-top 8px
    header
      box-sizing border-box
      position relative
      width 100%
      height 130px
      background #FEF2EF
      margin-bottom 15px
      a
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        width 140px
        height 65px
        text-align center
        padding 15px
        div
          margin-top 15px
          width 120px
          height 30px
          line-height 30px
          background #FDE5DF
          border 1px solid #FACBC0
          border-radius 4px
    .new_release_good2
      width 100%
      height 230px
      position relative
      margin-bottom 5px
      ul
        position absolute
        top 0
        left 0
        display flex
        width 840px
        height 100%
        li
          width 160px
          height 230px
          margin 0 8px
          background #E7E7E4
          img
            width 160px
            height 160px
          span
            margin-left 5px
            font-size 18px
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            &.much
              color red
              font-size 16px
            &.name
              display inline-block
              width 140px
          div
            width 140px
            font-size 15px
            padding 5px 5px
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;






</style>
