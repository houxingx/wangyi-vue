<!--顶部横向滑动-->
<template>
  <div class="title_wrapper"  v-if="headerList.length">
    <ul class="title_content" ref="title_content">
      <li v-for="(item,index) in headerList" :class="{on:index === thisIndex}"
          @click='chooseIndex(index)' :key="index">{{item.name}}</li>
    </ul>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    beforeMount(){
      /*读取缓存中的index*/
      this.thisIndex=parseInt(localStorage.getItem('activeIndex'))
    },
    updated(){
      localStorage.setItem('activeIndex',this.thisIndex)
      PubSub.publish('changeIndex',this.thisIndex)
    },
    beforeDestroy(){
      localStorage.setItem('activeIndex',0)

      this.thisIndex = 0
    },
    methods:{
      /*跳往index对应路由*/
      chooseIndex(index){
        this.thisIndex = index
        console.log(index)
        let url ='/home/'+this.headerList[index].id
        this.$router.replace(url)
        this._scrollLeftList(index)
      },
      /*点击滑动*/
      _scrollLeftList(index) {
          // 得到左侧当前分类的li
          const li = this.$refs.title_content.children[index]
          // 滑动到li位
          this.nav.scrollToElement(li, 200)
      },
      /*计算ul的宽度*/
      ulWidthGet(){
        let num = this.headerList.length
        let li = 70
        let ul = this.$refs.title_content
        ul.style.width = li*num +'px'
      }
    },
    computed:{
      ...mapState(['headerList']),
    },
    watch:{
      headerList (){
        this.$nextTick(() =>{
          this.ulWidthGet()
          this.nav=new BScroll('.title_wrapper',{
            click:true,
            probeType:0,
            scrollX:true
          })
          this.chooseIndex(this.thisIndex)
          })
        }
    },
    data() {
      return {
        id:null,
        thisIndex:0
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title_wrapper
    position fixed
    top 45px
    left 0
    z-index 200
    width 100%
    overflow hidden
    height 30px
    background #fff
    .title_content
      height 100%
      width 800px
      display flex
      li
        box-sizing border-box
        padding-top 2px
        height 30px
        line-height 30px
        width 50px
        margin 0 15px
        text-align center
        font-size 16px
        color #333
        &.on
          color red
          border-bottom 2px solid red
</style>
