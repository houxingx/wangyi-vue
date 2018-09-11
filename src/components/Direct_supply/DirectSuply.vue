<template>
  <div class="direct_supply">
    <div class="title">
        <span class="item_icon">{{content}}
          <i class="iconfont icon-iconset0424"></i>
        </span>
    </div>
    <div class="direct_supply_good">
      <div v-for="(item,index) in tagList" v-if="index<4">
      <section>
        <h4>{{item.name}}</h4>
        <span>{{item.floorPrice}}元起</span>
        <img src="../../common/images/new.png" v-show="item.newOnShelf" />
      </section>
      <img :src="item.picUrl"/>
    </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props:{
      content:String
    },
    data() {
      return {}
    },
    computed:{
      ...mapState(['tagList'])
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .direct_supply
    width 100%
    background whitesmoke
    .title
      float left
      width 100%
      height 50px
      font-size 20px
      line-height 50px
      text-align center
      i
        font-size 22px
    .direct_supply_good
      float left
      width 100%
      height 238px
      padding 0 10px
      div
        width 172px
        height 112px
        float left
        position relative
        background #f4f4f4
        margin 4px 4px
        section
          box-sizing border-box
          padding-top 5px
          padding-left 5px
          width 100%
          display inline-block
          img
            margin-top 3px
            height 16px
            display block
        >img
          position absolute
          top 0
          left 0
          height 110px




</style>
