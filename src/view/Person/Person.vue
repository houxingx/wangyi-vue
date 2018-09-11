<template>


  <div class="person">
    <MeetHeader/>

    <div v-if='user._id' class="isLogin">
      <div class="login">已经登录</div>
      <div class="name">{{user.phone||user.email}}</div>
      <mt-button @click="logout" type="danger" style="width: 80%">登出</mt-button>
    </div>

    <div v-if="!user._id" class="person-wrap">
      <div class="container" v-if="isPerson">
        <div class="img-wrap">
          <img src="../../common/images/wangyi2.png">
        </div>
        <div class="content-wrap">
          <div class="login-pho login">
            <mt-button type="danger" class="item_icon but but1" @click="tologin(0)">
              <i class="iconfont icon-tel"></i>手机号码登录</mt-button>
          </div>
          <div class="login-email login" >
            <mt-button type="default" class="item_icon but but2" @click="tologin(1)">
              <i class="iconfont icon-youxiang"></i>邮箱账号登录</mt-button>
          </div>
          <div class="regest-pho item_icon">
            <span @click="toRegiste">手机快捷注册<i class="iconfont icon-xiangyou-copy"></i></span>
          </div>
        </div>


        <div class="third-wrap">
        <span class="item-wrap">
          <span class="item_icon border">
            <i class="iconfont icon-zhangshangcaifuyemianshoujiban343">QQ</i>
          </span>
          <span class="item_icon border">
            <i class="iconfont icon-changyonglogo28">微信</i>
          </span>
          <span class="item_icon">
            <i class="iconfont icon-weibo">微博</i>
          </span>
        </span>
        </div>

      </div>

      <Login v-else-if="!isRegiste" :method="method" :tologin="tologin" :toRegiste="toRegiste"/>

      <Register v-else />
    </div>


  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {MessageBox} from 'mint-ui'
  import MeetHeader from '../../components/MeetHeader/MeetHeader.vue'
  import MtButton from "../../../node_modules/mint-ui/packages/button/src/button.vue";
  import Login from './Login/Login.vue'
  import Register from './Register/Register.vue'
  import {reqLogout} from '../../api/index'
  export default {
    data() {
      return {
        method:0,
        isPerson:true,
        isRegiste:false,
        isLogin:false
      }
    },
    computed:{
      ...mapState(['user'])
    },
    components:{
      MtButton,
      MeetHeader,
      Login,
      Register
    },
    methods:{
      tologin(type){
        this.method =type
        this.isPerson=!this.isPerson
      },

      toRegiste(){
        console.log('注册')
        this.isPerson=false
        this.isRegiste = true
      },
      logout () {
        MessageBox.confirm('确定退出吗?').then(
          action => {
            this.$store.dispatch('logout')
          },
          action => {
            console.log('点击了取消')
          }
        );
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .person
    width 100%
    height 100%
    .person-wrap
      width 100%
      height 100%
      .container
        width 100%
        height 100%
        padding-top 45px
        box-sizing border-box
        background #f4f4f4
        position relative
        .img-wrap
          width 100%
          height 205px
          padding 80px 0
          box-sizing border-box
          text-align center
          img
            height 100%


        .content-wrap
          width 100%
          height 146px
          .login
            margin-bottom 16px
            width 100%
            height 47px
            text-align center
            .but
              width 90%
              font-size 14px
              height 45px
            .but1
              background #b4282d
            .but2
              border 1px solid #b4282d
              color #b4282d
          .regest-pho
            width 100%
            text-align center
            font-size 14px

        .third-wrap
          position absolute
          left 0
          top 90%
          width 100%
          text-align center
          padding 0 15%
          .item-wrap
            width 70%
            display flex
            .item_icon
              flex 1
              color #666
            .border
              border-right 1px solid #666

    .isLogin
      width 100%
      padding-top 50px
      text-align center
</style>
