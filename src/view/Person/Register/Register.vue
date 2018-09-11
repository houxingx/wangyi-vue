<template>
  <div class="all-wrap">
      <div class="reg-title">注册</div>

      <div class="content-wrap">
        <div class="name-wrap input">
          <input v-if="regType" placeholder="电话号码" v-model="phone" maxlength="11"/>
          <input v-if="!regType" placeholder="邮箱" v-model="email" />
        </div>

        <div class="code-wrap input" v-if="regType">
          <input placeholder="短信验证码" v-model="code"/>
          <mt-button :disabled="!isRightPhone || computeTime>0" @click="sendCode"
                     :class="{active:isRightPhone && computeTime===0}">
            {{computeTime>0? `已发送${computeTime}` : '发送验证码'}}</mt-button>
        </div>

        <div class="pwd-wrap input">
          <input v-if="regType" placeholder="密码" v-model="ppwd"/>
          <input v-else placeholder="邮箱密码" v-model="epwd"/>
        </div>

        <mt-button type="danger" class="toreg" @click="toRegister">注册</mt-button>

        <span style="position: absolute;left: 20px;font-size: 13px">
          我同意《服务条款》和《网易隐私政策》
        </span>

        <div class="change-reg-type item_icon" >
          <span @click="regType=false" v-if="regType">邮箱注册 <i class="iconfont icon-xiangyou-copy"></i></span>
          <span @click="regType=true" v-else>手机注册 <i class="iconfont icon-xiangyou-copy"></i></span>
        </div>
      </div>

  </div>
</template>

<script>
  import MtButton from "../../../../node_modules/mint-ui/packages/button/src/button.vue";
  import {MessageBox,Toast} from 'mint-ui'
  import  {reqSendReCode,reqRegPhone,reqRegEmail} from '../../../api/index'
  export default {
    components: {MtButton},
    data() {
      return {
        regType:true,  //注册方式 true 是手机注册  false是邮箱注册
        phone:'',       //电话号码
        code:'',        //短信验证码
        ppwd:'',         //手机密码
        computeTime:0,  //短信发送 倒计时

        email:'',
        epwd:''          //邮箱密码
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
      showAlert(msg) {
        MessageBox.alert(msg)
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
        const result = await reqSendReCode(this.phone)
        if(result.code===0) { // 成功
          Toast('验证码已发送')
        } else { // 失败
          // 停止计时
          this.computeTime = 0
          // alert('失败了')
          MessageBox.alert('验证码发送失败', '提示')
        }
      },

      /*注册*/
      async toRegister(){
        let result
        if(this.regType){ //手机注册
          if(!this.isRightPhone){
            this.showAlert('请输入正确的手机号')
            return
          }else if(!/^\d{6}$/.test(this.code)){
            this.showAlert('验证码有误')
            return
          }else if(!this.ppwd){
            this.showAlert('请输入密码')
            return
          }
          console.log('手机注册')
          let phone =this.phone
          let code =this.code
          let ppwd =this.ppwd
          result = await  reqRegPhone({phone,code,ppwd})

        }else{// 邮箱注册
          if(!this.isRightEmail){
            this.showAlert('邮箱有误')
            return
          }else if(!this.epwd){
            this.showAlert('密码有误')
            return
          }
          console.log('邮箱注册')
          let email =this.email
          let epwd =this.epwd
          result = await  reqRegEmail({email,epwd})
        }
        // 根据结果做不同的处理
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
    text-align center
    display flex
    flex-direction column
    .reg-title
      font-size 28px
      height 50px
      margin-top 30px
    .content-wrap
      width 100%
      height 100%
      box-sizing border-box
      padding 57px 20px 0 20px
      text-align center
      position relative
      .input
        width 100%
        border-bottom 1px solid #999
        height 30px
        position relative
        margin-top 10px
        padding-top 20px
        input
          position absolute
          left 10px
          height 30px
          outline none
          width 80%
          textarea
            outline none
        button
          position absolute
          right 10px
          top 10px
          &.active
            color black


      .code-wrap
        height 40px
      .toreg
        width: 100%
        background: #b4282d
        margin:30px 0 20px 0
      .change-reg-type
        margin-top 40px

</style>
