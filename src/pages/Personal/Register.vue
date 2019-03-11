<template>
  <div>
    <div class="register-wrap">
      <div class="header">手机号注册</div>
      <div class="content-wrap">
        <div class="content">
          <div class="phone input" >
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="code input">
            <input type="text" placeholder="请输入验证码">
          </div>
          <div class="pwd input">
            <input type="password" placeholder="请输入密码">
          </div>
        </div>
      </div>
      <div class="footer">邮箱账号注册</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: ''
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .register-wrap
    margin-top 100px

    .header
      font-size 0.48rem
      line-height 0.69333rem
      color #333
      padding 0.53333rem 0 0
      text-align: center

    .content-wrap
      overflow hidden
      height 100%
      width 100%
      .content
        padding 0 0.55566rem
        padding-top 1.6rem
        .input
          height 1.3rem
          line-height 1.3rem
          font-size 40px
          background #fff
          input
            border none

        /*.phone*/
        /*.code*/
        /*.pwd*/
input
  outline none
  
</style>
