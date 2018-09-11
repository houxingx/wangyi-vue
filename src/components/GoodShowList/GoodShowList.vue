<template>
  <div class="container" >
      <header class="title" v-if="!activeIndex">{{showList.name}}</header>

      <header v-else>
        <p class="bed">床品套件</p>
        <p class="manufacturer">mujj等厂商出品</p>
      </header>

      <div class="my-goodGuide">
        <ul class="list">
          <li class="item" v-for="(item,index) in showList.itemList" v-if="activeIndex===1 ? 1: index <7" :key="index">
            <a class="good" >
              <div class="hd">
                <div class="wrap">
                  <img v-lazy="item.listPicUrl" />
                </div>
                <div class="decs">{{item.simpleDesc}}</div>
              </div>
              <div class="tagWrap" :class="`length${item.itemTagList[0].type}`" v-if="item.itemTagList.length">{{item.itemTagList[0].name}}</div>
              <div class="name">{{item.name}}</div>
              <div class="price">￥ {{item.retailPrice}}</div>
            </a>
          </li>

          <li class="item item-more" v-if="!activeIndex">
            <a class="item_icon">
              <p>更多居家好物</p>
              <i class="iconfont icon-iconset0424"></i>
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  import { Lazyload } from 'mint-ui';
  export default {
    props:{
      showList:Object
    },
    beforeMount(){
      this.activeIndex=parseInt(localStorage.getItem('activeIndex'))
    },
    data() {
      return {
        activeIndex:0
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    .title
      line-height 60px
    header
      box-sizing border-box
      width 100%
      height 60px
      text-align center
      display flex
      flex-direction column
      align-items center
      justify-content center
      background #fff
      color: #333
      .bed
        line-height 1
        font-size 16px
        margin-bottom 8px
      .manufacturer
        line-height  1
        font-size 12px
        color #999
    .my-goodGuide
      width 100%
      background #fff
      .list
        width 100%
      .item
        box-sizing border-box
        padding 0 5px 20px 10px
        float left
        width 185px
        height 268.5px
        background #fff
        a
          .hd
            width 172px
            height 207px
            .wrap
              width 100%
              height 172.5px
              background #f4f4f4
              img
                width 172.5px
                height 172.5px
            .decs
              color #9F8A60
              background #F1ECE2
              font-size 13px
              text-align center
              width 100%
              height 30px
              line-height 30px
              border-radius 3px
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
          .tagWrap
            font-size 12px
            color white
            padding 2px 5px 4px 5px
            text-align center
            vertical-align center
            border-radius 1px
            width auto
            display inline-block
            letter-spacing 1px
            &.length0
              background #f48f18
            &.length1
              background palevioletred
            &.length2
              background greenyellow
          .name
            margin 6px 2px
            font-size 13px
            color #333
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            letter-spacing 1px
          .price
            color red
            font-size 14px


        .item_icon
          background #f4f4f4
          display block
          width 100%
          height 80px
          padding 64px 0px
          text-align center
          font-size 15px
          color #333
          i
            font-size 30px
            position relative
            top 20px




</style>
