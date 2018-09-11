<template>
  <div class="container">
    <TitleScroll />
    <DirectSuply :content="DirectSuplyArr[0]"/>

    <NewRelease />
    <NewRelease2 />

    <div class="count_down_good" v-if="flashSaleIndexVO.showFlash">
      <div class="detail_info">
        <div class="title">严选限时购</div>
        <div class="time">
          <span class="hour">{{hour}}</span>
          <span class="colon">:</span>
          <span class="mins">{{min}}</span>
          <span class="colon">:</span>
          <span class="secs">{{sec}}</span>
        </div>
        <div class="next_good">
          <span>下一场</span>
          <span>2:00</span>
          <span>开始</span>
        </div>
      </div>
      <img :src="flashSaleIndexVO.primaryPicUrl">
    </div>

    <a class="welfare_team" v-if="flashSaleIndexVO.nextStartTime">
      <img :src="flashSaleIndexVO.saleIndexVO.picUrl" />
    </a>

    <DirectSuply :content="DirectSuplyArr[1]"/>

    <GoodShowList  v-for="(item, index) in cateLists" :key="index"  :isMinor=0
      :showList="item" />




  </div>
</template>

<script>
  import {mapState} from  'vuex'
  import BScroll from 'better-scroll'
  import TitleScroll from '../../../components/TitleScroll/TitleScroll.vue'
  import NewRelease from '../../../components/NewRelease/NewRelease.vue'
  import NewRelease2 from '../../../components/NewRelease/NewRelease2.vue'
  import DirectSuply from '../../../components/Direct_supply/DirectSuply.vue'
  import GoodShowList from '../../../components/GoodShowList/GoodShowList.vue'

  export default {
    components:{
      TitleScroll,
      NewRelease,
      NewRelease2,
      DirectSuply,
      GoodShowList,
    },
    data() {
      return {
        DirectSuplyArr:['产品制造商直供','专题精选'],
        remainTime:null,
        nextTime:null,
        hour:0,
        min:0,
        sec:0
      }
    },
    mounted(){
      this._residueTime()
    },
    computed:{
      ...mapState(['flashSaleIndexVO','cateLists'])
    },
    watch:{
      /*监视flashSaleIndexVO，调用倒数计时器*/
      flashSaleIndexVO(){
        this.$nextTick(()=>{
          this.remainTime = this.flashSaleIndexVO.remainTime
          this._residueTime()
        })
      }
    },
    methods:{

      /*计时器倒计时*/
      _residueTime(){
        let time = this.remainTime
        if(!time){
          return
        }
        this.newTime(time)
        const interverId = setInterval(() => {
          time--
          this.newTime(time)
          // 当计时达到最小值时, 清除定时器
          if (time <= 0) {
            time = 0
            clearInterval(interverId)
          }
        }, 1000)
      },
      /*将得到时间转换为页面显示数字*/
      newTime(time){
        this.remainTime = time
        let hour = Math.floor(time /3600)
        let min =  Math.floor((time - hour*3600) /60)
        let sec =  time - hour*3600 -min*60
        this.hour = hour
        this.min = min
        this.sec = sec
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    height 100%
    .count_down_good
      float left
      width 100%
      padding 15px 20px 15px 28px
      text-align center
      .detail_info
        float left
        width 160px
        height 160px
        text-align center
        padding-top 40px
        .title
          font-size 20px
        .time
          margin 10px 0
          span
            background black
            color white
            padding 2px
            border-radius 2px
            margin-right 5px
            &.colon
              color black
              background white
        .next_good
          font-size 12px
      img
        float left
        width 160px


    .welfare_team
      width 100%
      height 150px
      img
        width 375px
        height 150px
</style>
