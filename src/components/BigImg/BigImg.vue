<template>
  <div>
    <div class="item-wrap">
      <a href="">
        <div class="avatar">
          <span class="ava">
            <img src="https://yanxuan.nosdn.127.net/52bbfdc43780710303d7fceba3e382ec.png?imageView&quality=65&thumbnail=56y56" alt="">
          </span>
          <span>作者</span>
        </div>
        <div class="title">
          这些断货王平时等到阿斯顿发送到发送到发生了科技
        </div>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/7b8f18db78d572f036875a58529f6a16.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        </div>
        <div class="watch">
          <i class="icon iconfont icon-tuxiangshibie"></i>
          <span>111人看过</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import {reqShiwuData} from '../../api'

  export default {
    data() {
      return{
        StyleOne:[]
      }
    },
    async mounted(){
      const result = await reqShiwuData()
      // console.log('BigImg',result.data.Manual)
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
