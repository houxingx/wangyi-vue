<template>
  <div class="container">

    <div class="header">
      <div class="item item_icon">
        <i class="iconfont icon-icon-test"></i>
        <span>搜索商品，共12342件好物</span>
      </div>
    </div>

    <div class="goodCart">
      <div class="ulList">
        <ul>
          <li :class="{on:ShowIndex===index}" v-for="(item,index) in categorys" :key="index"
              @click="chooseGood(index)">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>

    <classify-detail :showIndex="ShowIndex" v-if="categorys.length"></classify-detail>


  </div>
</template>

<script >
  import BScroll from "better-scroll"
  import  {mapState} from 'vuex'
  import ClassifyDetail from './ClassifyDetail/ClassifyDetail.vue'

  export default {
    beforeMount(){
      /*读取缓存中的ShowIndex*/
      this.$store.dispatch('getcategorys')
      this.ShowIndex=parseInt(localStorage.getItem('classifyIndex'))
    },
    updated(){
      localStorage.setItem('classifyIndex',this.ShowIndex)
    },
    beforeDestroy(){
      localStorage.setItem('classifyIndex',0)
      this.ShowIndex=0
    },
    watch:{
      /*监视数据*/
      categorys(){
        this.$nextTick(() =>{
          new BScroll('.ulList',{
            click:true,
            probeTypeL:0
          })
        })
      }
    },
    computed:{
      /*计算属性*/
      ...mapState(['categorys'])
    },
    data() {
      return {
        ShowIndex:0
      }
    },
    methods:{
      /*选择显示的下标*/
      chooseGood(index){
        this.ShowIndex=index
        this.$router.replace('/classify/'+this.ShowIndex)
      }
    },
    components:{
      /*声明组件*/
      ClassifyDetail
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .container
    width 100%
    height 667px
    .header
      position fixed
      top 0
      left 0
      box-sizing border-box
      height 44px
      width 100%
      background #fff
      padding 8px 15px 0 15px
      z-index 200
      overflow hidden
      border-bottom 1px solid #d9d9d9
      .item
        box-sizing border-box
        line-height 28px
        width 100%
        height 28px
        background #ededed
        text-align center
        color #333
        border-radius 3px
        span
          margin-left 2px
          font-size 13px
          color #666
          letter-spacing 0.5px
    .goodCart
      position fixed
      top 44px
      left 0
      width 81px
      height 100%
      border-right  1px solid #d9d9d9
      .ulList
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        ul
          width 100%
          padding-bottom 50px
          display flex
          flex-direction column
          li
            width 100%
            height 25px
            margin-top 20px
            text-align center
            line-height 25px
            a
              color #333
              font-size 14px
            &.on
              left-border-1px(red,3px)
              a
                color red


</style>
