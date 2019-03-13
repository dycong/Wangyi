<template>
  <div class="container">
    <Header>
      <div class="header-wrap">
        <div class="home">
          <a class="iconfont icon-shouye" href="/home"></a>
        </div>
        <div class="center">
          <router-link to="/find/tab">
            <a class="item active">发现</a>
          </router-link>
          <router-link to="/zhenxuan">
            <a class="item" :class="{active:$route.path === '/zhenxuan'}">甄选家</a>
          </router-link>
        </div>
        <div class="right">
          <a class="iconfont icon-sousuo" href="/search"></a>
          <a class="iconfont icon-gouwuche" href="/cart"></a>
        </div>
      </div>
    </Header>
    <div class="list">
      <div class="list-wrap">
        <div class="item-wrap">
          <li class="item" :href="tab.linkUrl" v-for="(tab, index) in tabs" :key="index" :class="{active: +$route.params.id === index}">
            <router-link :to="`/find/tab/${index}`">
              {{tab.tabName}}
            </router-link>
          </li>
        </div>
      </div>
    </div>

    <RouterView/>
  </div>
</template>

<script>
  import {reqShiwuTabs} from '../../../api/index'
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        tabs:[],
      }
    },
    async mounted () {
      const result = await reqShiwuTabs()
      this.tabs = result.data

      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods:{
      // 初始化滑动
      _initScroll () {
        new BScroll('.list-wrap', {
          scrollX:true,
          click: true
        })
      },
    },

    components: {

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
          margin-right 0.04rem
          display block


    .list
      z-index 20
      display flex
      width 100%
      overflow hidden
      height 72px
      background #fafafa
      border-bottom 0.01rem solid #d9d9d9
      position: fixed
      left 0
      top 100px
      .list-wrap
        flex 5
        display flex
        overflow hidden
        padding-right 1.3333rem
        width 100%
        box-sizing content-box
        height 72px
        padding-bottom 20px
        .item-wrap
          white-space nowrap
          display flex
          height 100%
          .item
            height 72px
            line-height 72px
            font-size 0.4rem
            padding 0 0.08rem
            margin 0 0.2rem
            vertical-align middle
            display inline-block
            &.active
              border-bottom 0.04rem solid #B4282D
              color #B4282D

  .iconfont
    font-size 50px
</style>
