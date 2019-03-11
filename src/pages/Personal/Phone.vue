<template>
  <div>

    <div class="phoneLogin-wrapper">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <input maxlength="11" class="account" type="text" placeholder="请输入手机号" v-model="phone">
      <div class="password-wrapper">
        <input class="password" type="text" placeholder="请输入短信验证码" maxlength="6"  v-model="code">
        <button class="getCode" :disabled="!RightPhone" @click="getCode">获取验证码</button>
      </div>
      <div class="otherInfo">
        <span class="otherInfo-left">遇到问题?</span>
        <span class="otherInfo-right">使用密码验证登录</span>
      </div>
      <div class="login"  :class="!RightPhone ? 'wrong' : ''" :disabled="RightPhone" @click="Login">登录</div>
      <div class="otherLoginType" @click="$router.replace('/personal')">其它登录方式</div>
      <div class="register">注册账号></div>
    </div>
    <!--<LoginTemplate :Info="Info">-->
      <!--<button class="getCode" slot="getCode">获取验证码</button>-->
      <!--<div class="register" slot="register">注册账号></div>-->
    <!--</LoginTemplate>-->
  </div>
</template>

<script>
  import { Toast, Icon } from 'mint-ui';

  export default {
    data() {
      return{
      /*  Info:{
          type:'请输入手机号',
          pwd:'请输入短信验证码',
          question:'遇到问题?',
          forget:'使用密码验证登录'
        }*/
        phone:'',
        code:''
      }
    },
    methods:{
      getCode() {
        const {RightPhone} = this
        if(RightPhone){
          Toast({
            message:'验证码发送成功!',
            className: 'toast1'
          })
        }
      },
      Login () {
        const {code} = this
        console.log('手机登录')
        if(!code){
          Toast('验证码不能为空')
          return
        }else if(!/^\d{6}$/.test(code)){
          Toast('验证码错误')
          return
        }
        Toast('登录成功')
        this.$router.replace('/home')
      }
    },
    computed:{
      RightPhone() {
        return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .phoneLogin-wrapper
    margin-top 100px
    width: 100%
    text-align center
    box-sizing border-box
    .logo
      padding-top: .74667rem;
      margin-bottom: 1.8rem;
      img
        width: 2.56rem;
        height: .85333rem;
    .account
      width 90%
      height: 1.2rem;
      font-size: 0.4rem;
      line-height: 0.6rem;
      margin: 0.39rem 0;
      padding-left: 0;
      -webkit-tap-highlight-color: transparent;
      outline none
      border-bottom 1px solid #bdbdbd
      // 修改placeholder样式
      &::-webkit-input-placeholder
        font-size: .36rem
    .password-wrapper
      position relative
      left 0
      top 0
      display inline-block
      width: 90%
      .password
        width 100%
        height: 1.2rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        outline none
        border-bottom 1px solid #bdbdbd;
        &::-webkit-input-placeholder
          font-size: .36rem



    .otherInfo
      height: 0.6rem;
      line-height: 0.6rem;
      color: #7f7f7f !important;
      font-size: 0.38rem;
      display flex
      justify-content space-between
      padding .4rem .4rem
      .otherInfo-right
        color: #000

    .login
      width: 90%
      display inline-block
      margin .42667rem 0
      height: 1.25333rem;
      line-height: 1.25333rem;
      text-align: center;
      font-size: .37333rem;
      color: #fff;
      border: 1px solid #b4282d;
      background-color: #b4282d;
      border-radius: 4px;
    .wrong
      color #fff
      background-color: #b428;
    .otherLoginType
      width: 90%
      display inline-block
      margin-bottom .4rem
      height: 1.25333rem;
      line-height: 1.25333rem;
      text-align: center;
      font-size: .37333rem;
      color: #b4282d;
      border: 1px solid #b4282d;
      border-radius: 4px

  .getCode
    position absolute
    right 0
    top .5rem
    font-size .36rem
    width: 2.3rem;
    height: 0.75rem;
    text-align: center;
    background: #fff;
    line-height: 0.75rem;
    border: 1px solid #333;
    border-radius: 10px;

  .register
    font-size: .37333rem;
    line-height: .53333rem;
    color: #333;

  .toast1
    font-size 100px !important
</style>
