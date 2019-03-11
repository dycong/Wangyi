<template>
  <div>
    <div class="item-wrap">
      <a class="item" href="">
        <div class="info">
          <div class="name">
            <span class="ava">
              <img :src="topic.avatar" alt="">
            </span>
            <span>{{topic.nickname}}</span>
          </div>
          <div class="title">
            {{topic.title}}
          </div>
          <div class="desc">
            {{topic.subtitle}}
          </div>
          <div class="watch">
            <i class="icon iconfont icon-tuxiangshibie"></i>
            <span>{{topic.readCount}}看过</span>
          </div>
        </div>
        <div class="pic">
          <img :src="topic.picUrl" alt="">
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

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .item-wrap
    width 100%
    background #fff
    margin 20px 0
    position: relative
    padding 32px 30px
    .item
      display flex
      flex-wrap wrap
      justify-content space-between
      .info
        width 400px
        .name
          font-size 0.46rem
          color #333
          line-height 56px
          white-space nowrap
          text-overflow ellipsis
          span
            display inline-block
            vertical-align middle
          .ava
            border-radius 50%
            width 54px
            height 54px
            margin-right 12px
            border 0.01rem solid #d9d9d9
            img
              width 100%
              height 100%
        .title
          width 100%
          font-size 0.48rem
          color #333
          line-height 0.7rem
          overflow hidden
          text-overflow ellipsis
          padding-top 0.2rem
        .desc
          width 100%
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          font-size 0.38rem
          line-height 0.6rem
          padding-top 0.08rem
          color #7f7f7f
        .watch
          position: absolute
          left 30px
          bottom 8px
          font-size 0.30rem
          color #999
          line-height 0.5rem
          margin-top 18px
          span
            display inline-block
            vertical-align middle
          .icon
            display inline-block
            width 28px
            height 38px
            vertical-align middle
            margin-right 0.16rem
            overflow hidden

      .pic
        position: relative
        overflow: hidden
        border-radius 0.16rem
        height 272px
        width 272px
        img
          width 100%
          height 100%

.iconfont
  font-size 36px

</style>
