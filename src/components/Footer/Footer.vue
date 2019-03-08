<template>
  <footer class="footer border-1px">
    <span class="footer_item" :class="{on:$route.path === '/home'}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="footer_item" :class="{on:$route.path === '/sort'}" @click="goTo('/sort')">
      <span class="item_icon">
        <i class="iconfont icon-chouti"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="footer_item" :class="{on:$route.path === '/shiwu'}" @click="goTo('/shiwu')">
      <span class="item_icon">
        <i class="iconfont icon-liwu"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="footer_item" :class="{on:$route.path === '/cart'}" @click="goTo('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="footer_item" :class="{on:$route.path === '/personal'}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>

<script>
  export default {
    name: '',
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    top-border-1px(#e4e4e4)
    position: fixed
    z-index 100
    left 0
    right 0
    bottom 0
    width: 100%
    height: 100px
    background-color: #fff
    display flex
    .footer_item
      display flex
      flex 1 //等分布局
      flex-direction column
      align-items center
      margin 10px
      color #999999
      &.on
        color red
      span
        font-size 24px
        margin-top 4px
        margin-bottom 4px
        .iconfont
          font-size 44px
</style>
