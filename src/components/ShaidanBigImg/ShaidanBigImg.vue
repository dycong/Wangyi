<template>
  <div v-if="item.bannerInfo">
    <div class="item">
      <img v-lazy="item.bannerInfo.picUrl" alt="">
      <p>{{item.content}}</p>
      <div class="info">
        <span class="avatar">
          <img v-lazy="item.avatar" alt="">
        </span>
        <span class="name">{{item.nickName}}</span>
        <span class="see">
          {{item.supportNum}}
          <i class="iconfont icon-liwu"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: Object
    },
    name: ''
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .item
    width 4.6rem
    border-radius 8px
    margin-bottom 0.27rem
    box-shadow 0 0 0.08rem #ddd
    overflow hidden
    img
    p
      font-size 0.32rem
      width 4.6rem
      background #fff
      color #333
      line-height 0.48rem
      overflow: hidden
      white-space nowrap
      text-overflow ellipsis
    .avatar
      margin-left 0.2rem
      img
        width 0.7rem
        height 0.7rem
        border-radius 50%

    .name
      width 1.6rem
      overflow hidden
      text-overflow ellipsis
      font-size 0.32rem
      color #7f7f7f
      height 0.64rem
      line-height 0.64rem
      vertical-align middle

    .see
      float right
      margin-top 0.4rem
      margin-right 0.2rem
      font-size 0.32rem
      vertical-align middle

  .iconfont
    font-size 30px
</style>
