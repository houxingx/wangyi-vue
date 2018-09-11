<template>
  <div>
    <HomeHeader/>

    <div class="homeContainer">
        <router-view/>
      <span class="item_icon" @click="toTop">
        <i class="iconfont icon-xiangshang"></i>
      </span>
    </div>

    <div class="cover" v-if="showCover">

    </div>

    <div class="cover-img" v-if="showCover">
      <span class="item_icon" @click="killCover">
        <i class="iconfont icon-shanchuguanbicha"></i>
      </span>
      <img src="../../common/images/one.png">
    </div>

  </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        showCover:false
      }
    },
    mounted(){
      /*头部导航*/
      this.$store.dispatch('getHeaderNav')
      /*轮播图*/
      this.$store.dispatch('getFocusList')
      /*商家直销*/
      this.$store.dispatch('getTagList')
      /*新品发布 1  2*/
      this.$store.dispatch('getnewitemlists')
      this.$store.dispatch('getnewitemlists2')
      /*倒计时*/
      this.$store.dispatch('getflashSaleIndexVO')
      /*获取专题信息*/
      this.$store.dispatch('gettopicLists')
      /*居家及下面*/
      this.$store.dispatch('getcateList')
      setTimeout(()=>{
        if (this.user._id){
          this.showCover=false
          return
        }
        this.showCover=true
      },1000)
    },
    methods:{
      /*重新置顶*/
      toTop(){
        let timeId = setInterval(()=>{
          document.documentElement.scrollTop-=40
          if(document.documentElement.scrollTop<=0){
            document.documentElement.scrollTop=0
            clearInterval(timeId)
          }
        },10)
      },
      killCover(){
        this.showCover=false
      },
    },
    computed:{
      ...mapState(['user'])
    },
    components:{
      HomeHeader
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.homeContainer
  width 100%
  height 100%
  padding-top 75px
  padding-bottom  50px
  .item_icon
    position fixed
    bottom 60px
    right  25px
    .icon-xiangshang
      font-size 30px
      color green
.cover
  width 100%
  height 100%
  background rgba(0,0,0,.5)
  z-index 300
  position fixed
  top 0
  left 0
.cover-img
  z-index 400
  position fixed
  top 0
  left 0
  .item_icon
    position absolute
    top 40px
    right 30px
    color wheat
    .iconfont
      font-size 30px
  img
    margin-top 40%
    margin-left 10%
    width 80%
    height 300px
</style>
