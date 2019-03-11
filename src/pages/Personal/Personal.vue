<template>
  <div>
    <Header>
      <div class="header-wrap">
        <div class="home">
          <a class="iconfont icon-shouye" @click="$router.replace('/')"></a>
        </div>
        <div class="center">

        </div>
        <div class="right">
          <a class="iconfont icon-sousuo" @click="$router.replace('/search')"></a>
          <a class="iconfont icon-gouwuche" @click="$router.replace('/cart')"></a>
        </div>
      </div>
    </Header>
    <Content>
      <div class="content-wrap" v-if="$route.path === '/personal'">
        <div class="logo-btn">
          <div class="logo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="btn">
            <!--手机号登录-->
            <router-link to="/personal/phone">
              <div class="phone btn-item">
                <i class="iconfont icon-shouji"></i>
                <span>手机号码登录</span>
              </div>
            </router-link>
            <!--邮箱登录-->
            <router-link to="/personal/email">
              <div class="email btn-item">
                <i class="iconfont icon-youxiang"></i>
                <span>邮箱账号登录</span>
              </div>
            </router-link>
            <!--手机号注册-->
            <router-link to="/personal/register">
              <div class="register">
                手机号快捷注册
                <i class="icon"></i>
              </div>
            </router-link>
          </div>
        </div>
        <div class="loginway">
          <div class="weixin item">
            <span class="item-span">
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
            </span>

          </div>
          <div class="qq item">
            <span class="item-span">
              <i class="iconfont icon-qq"></i>
              <span>微信</span>
            </span>
          </div>
          <div class="weibo item">
            <span class="item-span">
              <i class="iconfont icon-weibo"></i>
              <span>微信</span>
            </span>
          </div>
        </div>
      </div>
      <RouterView/>
    </Content>

  </div>
</template>

<script>
  import Phone from './Personal.vue'
  import Email from './Email.vue'

  export default {
    name: '',
    components: {
      Phone,
      Email
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  Header
    z-index 20
    width 100%
    position: fixed
    height 100px
    background #fafafa
    border-bottom 0.02rem solid #d9d9d9
    left 0
    top 0

    .header-wrap
      position: relative
      overflow hidden
      padding 0 0.52rem 0 0.4rem
      width 100%
      height 100px

      .home
        display block
        float left
        height 100px

        a
          height 100px
          margin-top 0.4rem
          position: relative
          background-size 0.46rem 0.46rem
          width 0.92rem
          display block

      .center
        width 5rem
        height 100px
        line-height 1.3rem
        text-align: center
        left 50%
        top 0
        margin-left -3.2rem
        font-size 0.4rem
        color #7f7f7f
        z-index 2
        position: absolute
      background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png") no-repeat center

      .right
        height 100px
        float right
        display block

        a
          margin-right 0.25rem


  Content
    display flex
    flex-direction column
    height 1346px

    .content-wrap
      margin-top 100px
      position: relative
      height 100%
      background #f2f5f4

      .logo-btn
        .logo
          padding-top 2.1333rem
          padding-bottom 2.13333rem
          text-align: center

          img
            width 3.57333rem
            height 1.2rem

        .btn
          padding 0 0.5333rem
          margin-bottom 2.73333rem

          .btn-item
            width 100%
            height 1.25333rem
            line-height 1.2rem
            font-size 0.4rem
            text-align: center
            vertical-align middle
            margin-bottom 0.42667rem
            overflow hidden

          .phone
            background-color #b4282d
            color #fff

            .icon
              display inline-block
              vertical-align middle

          .email
            color #b4282d
            border 1px solid #b4282d

          .register
            font-size 0.37333rem
            text-align: center
            width 100%
            color #333

            .icon
              margin-right 0.21333rem
              position: relative
              margin-left 0.05333rem
              display inline-block
              vertical-align middle
              width 0.37333rem
              height 0.37333rem
              background-size 100% 100%
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-8d47138d73.png)

      .loginway
        display flex
        justify-content center
        position: absolute
        width 100%
        left 0
        bottom 1.06667rem
        height 0.53333rem
        text-align: center

        .item
          height 0.5333rem
          border-right 1px solid #979797
          text-align: center
          padding 0 0.53333rem

          &:nth-child(3)
            border-right none

          .item-span
            position: relative
            top -0.5rem
            height 0.53333rem
            font-size 0.37333rem
            line-height 0.53333rem
            color #7f7f7f
            margin-left 0.06667rem

  .iconfont
    font-size 40px

</style>
