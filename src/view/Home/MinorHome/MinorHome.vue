<template>
  <div class="container" v-if="cateLists.length">
    <div class="main_content">
      <img :src="cateLists[activeIndex].bannerUrl">
    </div>
    <GoodShowList v-for="(item,index) in cateLists" :key="index"
                  :showList="item"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'
  import GoodShowList from '../../../components/GoodShowList/GoodShowList.vue'
  export default {
    data() {
      return {
        activeIndex:0
      }
    },
    beforeMount(){
      this.activeIndex=parseInt(localStorage.getItem('activeIndex'))
    },
    computed:{
      ...mapState(['cateLists'])
    },
    mounted(){
      PubSub.subscribe('changeIndex',(msg,data)=>{
        this.activeIndex = data-1
      })
    },
    components:{
      GoodShowList
    },
    watch:{
      cateLists(){
        this.$nextTick(()=>{
          let id = this.$route.params.id
          this.cateLists.forEach((item,index) =>{
            if(item.id===id){
              this.index =index
            }
          })
        })
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    height 100%
    .main_content
      width 100%
      height 185px
      border-bottom 10px solid #f5f5f5
      img
        width 100%
        height 100%
</style>
