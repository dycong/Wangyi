<template>
  <div class="container">
    <Header>
      <div class="header-wrap">
        <div class="home">
          <a class="iconfont icon-shouye" href="/home" ></a>
        </div>
        <div class="center">
          <router-link to="/shiwu/find">
            <a class="item" :class="{active:$route.path === '/shiwu/find'}">发现</a>
          </router-link>
          <router-link to="/shiwu/zhenxuan">
            <a class="item" :class="{active:$route.path === '/shiwu/zhenxuan'}">甄选家</a>
          </router-link>
      </div>
        <div class="right">
          <a class="iconfont icon-sousuo" href="/search"></a>
          <a class="iconfont icon-gouwuche" href="/cart"></a>
        </div>
      </div>
    </Header>
    <RouterView />
  </div>
</template>

<script>
  import Find from './Find/Find.vue'
  import Zhenxuan from './Zhenxuan/Zhenxuan.vue'

  export default {
    name: '',
    methods:{},
    components:{
      Find,
      Zhenxuan
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    background #ddd

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
            margin-top 0.25rem
            position: relative
            background-size 0.46rem 0.46rem
            width 0.92rem
            display block

        .center
          width 6.4rem
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
          .item
            height 100px
            padding 0 0.16rem
            vertical-align middle
          .active
            height 100px
            color #b4282d
            font-weight bold
            font-size 0.5rem

        .right
          height 100px
          float right
          margin-right  0.04rem
          display block

  .iconfont
    font-size 50px
</style>
