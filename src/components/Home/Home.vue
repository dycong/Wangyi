<template>
  <div>
    <div class="home-wrap">
      <a href="">
        <p class="title">{{item.title}}</p>
        <div class="img-wrap">
          <img v-lazy="item.picUrl">
        </div>
        <div class="see">
          <i class="iconfont icon-liwu"></i>
          <span>{{item.readCount}}人看过</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import Loading from '../../../static/loading.gif'

  export default {
    props: {
      item: Object
    },
    name: ''
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home-wrap
    width 100%
    background #fff
    margin 0.2rem 0
    padding 0.36rem 0.3rem

    .title
      line-height 0.6rem
      margin -0.08rem 0 0.16rem 0
      overflow hidden
      text-overflow ellipsis
      color #333
      font-size 0.44rem

    .img-wrap
      position: relative
      margin-bottom 0.2rem
      overflow hidden
      width 691px
      height 376px

      img
        width 100%
        height 100%

    .see
      font-size 0.32rem
      color #999
      line-height 0.44rem
      margin-top 0.18rem
      margin-bottom -0.16rem

  .iconfont
    font-size 32px

</style>
