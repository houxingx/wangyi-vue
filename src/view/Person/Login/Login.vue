<template>
  <div class="all-wrap">
    <div class="img-wrap">
      <img src="../../../common/images/wangyi2.png">
    </div>

    <div class="content-wrap">
      <div class="item-wrap">
        <div class="input input1">
          <input type="tel" placeholder="输入手机号" maxlength="11" v-if="!method" v-model="phone"/>
          <input type="text" placeholder="邮箱账号" v-else v-model="email"/>
        </div>

        <div class="input input2">
          <input v-if="method===0 && !isPsd" placeholder="输入短信验证验证码" v-model="code"/>
          <input v-else-if="method===0&& isPsd" placeholder="输入密码" v-model="ppwd"/>
          <input v-else placeholder="密码" v-model="epwd"/>
            <mt-button  v-if="method===0 && !isPsd" :disabled="!isRightPhone || computeTime>0"
                    :class="{canclick:isRightPhone}" @click.prevent="sendCode">
              {{computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码'}}
            </mt-button>
        </div>

        <div class="text-wrap">
          <span class="problem">
            {{method===0 ? "遇到问题？": "注册账号"}}
          </span>
          <span class="psd" v-if="method===0" @click="changeIsPsd">
            {{isPsd===false ?"使用密码登录":"使用短信登录"}}
          </span>
          <span class="psd" v-if="method===1">
            忘记密码
          </span>
        </div>

        <div class="but-wrap1 but-wrap">
          <mt-button type="danger" class="but but1" @click="toLogin">登录</mt-button>
        </div>

        <div class="but-wrap2 but-wrap">
          <mt-button type="default" class="but but2" @click="tologin(0)">其他登录方式</mt-button>
        </div>

        <div class="regiest" @click="toRegiste">
          注册账号<i class="iconfont icon-xiangyou-copy"></i>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {Toast, MessageBox} from 'mint-ui'
  import MtButton from "../../../../node_modules/mint-ui/packages/button/src/button.vue";
  import  {reqSendLoCode,reqPhoNoteLogin,reqPhoPwdLogin,reqEmiPwdLogin} from '../../../api/index'
  export default {
    components: {MtButton},
    props:{
      /*登录方法  0是手机登录  1是邮箱登录*/
      method:Number,
      /*在person页面还是登录注册页面*/
      tologin:Function,
      toRegiste:Function
    },
    data() {
      return {
        isPsd:false,  //flase使用短信登录 true使用密码登录
        phone: '',  // 手机号
        code: '',   // 短信验证码
        ppwd:'',     //手机密码
        email:'',   //邮箱
        epwd: '',    // 邮箱密码
        computeTime: 0, // 倒计时剩余的时间
      }
    },
    computed:{
      isRightPhone() {
        return /^1\d{10}$/.test(this.phone)
      },
      isRightEmail(){
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)
      }
    },
    methods:{
      /*显示错误信息*/
      showAlert(msg) {
        MessageBox.alert(msg)
      },
      /*切换时手机号用 短信登录 还是 密码登录*/
      changeIsPsd(){
        this.isPsd=!this.isPsd
      },
      // 发送一次性短信验证码
      async sendCode() {
        /*1. 实现倒计时功能*/
        this.computeTime = 30
        // 启循环定时器, 改变computedTime
        const interverId = setInterval(() => {
          this.computeTime--
          // 当计时达到最小值时, 清除定时器
          if (this.computeTime <= 0) {
            this.computeTime = 0
            clearInterval(interverId)
          }
        }, 1000)
        /*2. 发送请求去发短信验证码*/
        const result = await reqSendLoCode(this.phone)
        if(result.code===0) { // 成功
          Toast('验证码已发送')
        } else { // 失败
          // 停止计时
          this.computeTime = 0
          // alert('失败了')
          MessageBox.alert(result.msg, '提示')
        }
      },


      //登录
      async toLogin(){
        let result

        if(this.method===0){ //手机登录
          if(this.isPsd){  //使用密码
            if(!this.isRightPhone){
              this.showAlert('请输入正确的手机号')
              return
            }else if(!this.ppwd){
              this.showAlert('请输入密码')
              return
            }
            console.log('手机密码登录')
            let phone = this.phone
            let ppwd = this.ppwd
            result = await reqPhoPwdLogin({phone,ppwd})
          }else{  //使用短信
            if(!this.isRightPhone){
              this.showAlert('请输入正确的手机号')
              return
            }else if(!/^\d{6}$/.test(this.code)){
              this.showAlert('验证码有误')
              return
            }
            console.log('手机验证码登录')
            let phone = this.phone
            let code = this.code
            result = await reqPhoNoteLogin({phone,code})
          }

        }else{  // 邮箱注册
          if(!this.isRightEmail){
            this.showAlert('邮箱有误')
            return
          }else if(!this.epwd){
            this.showAlert('密码有误')
            return
          }
          console.log('邮箱登录')
          let email = this.email
          let epwd = this.epwd
          result = await reqPhoNoteLogin({email,epwd})
        }
        if(result.code===0) { // 登陆成功
          const user = result.data
          // 1. 将user保存到state
          this.$store.dispatch('saveUser', user)
          // 2. 自动跳转到个人中心
          this.$router.replace('/home')
        } else { // 登陆失败
          this.showAlert(result.msg)
        }
      }

    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .all-wrap
    width 100%
    height 100%
    padding-top 45px
    .img-wrap
      width 100%
      height 60px
      padding-top 28px
      text-align center
      img
        height 100%
    .content-wrap
      width 100%
      height 400px
      padding 50px 30px 0 30px
      box-sizing border-box
      .item-wrap
        width 100%
        height 100%
        .input
          width 100%
          height 45px
          box-sizing border-box
          margin-top 5px
          input::-webkit-input-placeholder
            color: #bbbbbb
            font-size: 16px
            text-align: left
          input
            display inline-block
            width 100%
            height 100%
            border-bottom 1px solid #999
            outline: none
            textarea
              outline: none
        .input2
          position relative
          button
            position absolute
            top 0
            right 0
            color #999
            transform scale(0.7)
          .canclick
            color #333
        .but-wrap
          margin-top 15px
          width 100%
          .but
            width 100%
            font-size 14px
            height 45px
          .but1
            background #b4282d
          .but2
            border 1px solid #b4282d
            color #b4282d
        .regiest
          width 100%
          margin-top 20px
          text-align center
        .text-wrap
          margin-top 10px
          position relative
          .psd
            position absolute
            right 0
</style>
