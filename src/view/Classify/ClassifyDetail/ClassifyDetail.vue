<template>
  <div class="container" v-if="categorys.length">
      <div class="banner">
        <img :src="categorys[showIndex].bannerUrl" />
      </div>
      <div class="cate-list">
        <ul class="cate-ul" ref="cateUl">
          <li class="cate-item" v-for="(item,index) in list" :key="index">
            <img :src="item.bannerUrl">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    props:{
      showIndex:Number
    },
    computed:{
      ...mapState(['categorys'])
    },
    mounted(){
      this.list =  this.categorys[this.showIndex].subCateList
      this._initList()
    },
    data() {
      return {
        list:[]
      }
    },
    watch:{
      categorys(){
        this.$nextTick(() =>{
          this.list =  this.categorys[this.showIndex].subCateList
          this._initList()
        })
      },
      showIndex(){
        this.list = this.categorys[this.showIndex].subCateList
      },
      list(){
        this.$nextTick(()=>this._initList())
      }
    },
    methods:{
      /*初始化页面，获取li的列表，每个第三个的右外边距改为0，
      * 并添加滑动BScroll*/
      _initList(){
        let lis = this.$refs.cateUl.children
        Array.from(lis).forEach( (li,index) =>{
          if(index % 3 === 2){
            li.style.marginRight ='0'
          }
        })
        new BScroll('.cate-list',{
          click:true,
          probeTypeL:0
        })
      }

    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .container
    width 264px
    height auto
    margin-left 81px
    padding 59px 15px 10.5px 15px
    z-index 10
    .banner
      width 100%
      height 96px
      margin-bottom 16px
      img
        width 100%
        height 100%
    .cate-list
      width 100%
      height auto
      .cate-ul
        width 100%
        height auto
        .cate-item
          box-sizing border-box
          width 72px
          height 108px
          margin-right 17px
          text-align center
          float left
          &.no-margin
            margin-right 0
          img
            border-radius 50%
            width 100%
            height 72px
          span
            font-size 12px



</style>
