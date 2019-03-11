<template>
  <div>
    <div class="item-wrap">
      <a href="">
        <div class="avatar">
          <span class="ava">
            <img :src="topic.avatar" alt="">
          </span>
          <span>{{topic.nickname}}</span>
        </div>
        <div class="title">
          {{topic.title}}
        </div>
        <div class="pic">
          <img :src="topic.picUrl" alt="">
        </div>
        <div class="watch">
          <i class="icon iconfont icon-tuxiangshibie"></i>
          <span>{{topic.readCount}}人看过</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    props:{
      topic:Object
    },
    data() {
      return{

      }
    },
    async mounted(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .iconfont
    font-size 0.4rem

.item-wrap
  width: 100%
  background #fff
  margin 0.2rem 0
  padding 0.36rem 0.3rem
  .avatar
    margin-bottom 0.24rem
    color #333
    line-height 0.36rem
    overflow hidden
    font-size 0.4rem
    text-overflow ellipsis
    white-space nowrap
    img
      width 100%
      height 100%
    .ava
      display inline-block
      overflow hidden
      border-radius 50%
      border 0.01rem solid #d9d9d9
      margin-left 0.12rem
      vertical-align middle
      height 54px
      width 54px
  .title
    line-height 0.69rem
    text-overflow ellipsis
    overflow hidden
    font-size 0.54rem
    color #333
    margin -0.08rem 0 0.32rem 0
  .pic
    width 690px
    height 376px
    margin-bottom 0.4rem
    overflow hidden
    border-radius 0.12rem
    position: relative
    img
      width 100%
      height 100%
  .watch
    margin-bottom -0.16rem
    font-size 0.3rem
    color #999
    line-height 0.32rem
    margin-top 0.18rem
    vertical-align middle
    .icon
      width 36px
      height 22px
      vertical-align middle
      display inline-block
    span
      display inline-block
      vertical-align middle


</style>
