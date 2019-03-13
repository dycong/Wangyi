<template>
  <div class="container">
    <!--推荐-->
    <div class="content-wrap" v-if="tabId === 0">
      <div class="content">
        <div class="tuijian" v-for="(item, index) in Manual" :key="index">
          <li v-for="(topic, index) in item.topics" :key="index">
            <BigImg v-if="topic.style === 1" :topic="topic"/>
            <SmallImg v-if="topic.style === 2" :topic="topic"/>
          </li>
        </div>
      </div>
    </div>

    <!--女王节礼物-->
    <div class="content-wrap" v-if="tabId === 1">
      <div class="content">
        <div v-for="(item, index) in Manual" :key="index">
          <li v-for="(topic, index) in item.topics" :key="index">
            <BigImg v-if="topic.style === 2" :topic="topic"/>
            <SmallImg v-if="topic.style === 1" :topic="topic"/>
          </li>
        </div>
      </div>
    </div>

    <!--收纳秘诀-->
    <div class="content-wrap" v-if="tabId === 2"></div>

    <!--晒单-->
    <div class="content-wrap shaidan-wrap" v-if="tabId === 3">
      <div class="content">
        <div class="shaidan-top">
          <p class="title">让生活更好的N种方式</p>
          <p class="desc">{{ShaiDanCollection.title}}</p>
          <div class="picWall">
            <ul>
              <li class="item" :style="{backgroundImage:'url('+List.banner.picUrl+')'}" v-for="(List, index) in ShaiDanCollection.lookList" :key="index"></li>
            </ul>
          </div>
        </div>
        <div class="shaidan-bottom">
          <p class="title">TA们的严选生活</p>
          <div class="ul-wrap">
            <ul>
              <li><p class="active">最新</p></li>
              <li><p>本月最热</p></li>
              <li><p>晒单合辑</p></li>
            </ul>
          </div>
          <div class="item-wrap">
            <ul>
              <li v-if="index%2 === 0" v-for="(item, index) in ShaiDanLists" :key="index">
                <ShaidanBigImg v-if="!item.isCollection" :item="item"/>
              </li>
            </ul>
            <ul>
              <li v-if="index%2 === 1" v-for="(item, index) in ShaiDanLists" :key="index">
                <ShaidanBigImg :item="item"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--达人-->
    <div class="content-wrap" v-if="tabId === 4">
      <div class="content">
        <li v-for="(topic, index) in Talent" :key="index">
          <BigImg v-if="topic.style === 1" :topic="topic"/>
          <SmallImg v-if="topic.style === 2" :topic="topic"/>
        </li>
      </div>
    </div>

    <!--HOME-->
    <div class="content-wrap" v-if="tabId === 5">
      <div class="content">
        <li v-for="(item, index) in Home" :key="index">
          <Home :item="item"/>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    reqShiwuData,
    reqShiwuTuijian,
    reqShaiDanCollection,
    reqShaiDanList
  } from '../../../api/index'
  import BScroll from 'better-scroll'

  import BigImg from '../../../components/BigImg/BigImg.vue'
  import SmallImg from '../../../components/SmallImg/SmallImg.vue'
  import Home from '../../../components/Home/Home.vue'
  import ShaidanBigImg from '../../../components/ShaidanBigImg/ShaidanBigImg.vue'

  export default {
    data () {
      return {
        Manual: [],
        Home: [],
        Talent: [],
        ShaiDanLists: [],
        ShaiDanCollection: []
      }
    },
    methods: {
      _initScroll () {
        new BScroll('.picWall', {
          scrollX: true,
        })
      }
    },
    async mounted () {
      // 推荐数据
      const result1 = await reqShiwuTuijian()
      this.Manual = result1.data

      // 达人，HOME
      const result2 = await reqShiwuData()
      this.Home = result2.data.Home.data.result
      this.Talent = result2.data.Talent.data.result

      // 晒单评论列表
      const ShaiDanLists = await reqShaiDanList()
      this.ShaiDanLists = ShaiDanLists.data.topicList

      // 晒单图片列表
      const ShaiDanCollection = await reqShaiDanCollection()
      this.ShaiDanCollection = ShaiDanCollection.data

      this.$nextTick(() => {
        let PullUp = new BScroll('.content-wrap',{
          probeType:3,
          pullUpLoad:true
        })
        PullUp.on('pullingUp',async () => {
          console.log('aaa')
          PullUp.finishPullUp()
        })
        PullUp.refresh()
      })

    },
    computed: {
      tabId () {
        if (this.$route.params.id === '0') {
          return 0
        } else if (this.$route.params.id === '1') {
          return 1
        } else if (this.$route.params.id === '2') {
          return 2
        } else if (this.$route.params.id === '3') {
          return 3
        } else if (this.$route.params.id === '4') {
          return 4
        } else if (this.$route.params.id === '5') return 5
      }
    },

    updated () {
      if (this.tabId !== 3) {
      } else {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    watch: {},

    components: {
      BigImg,
      SmallImg,
      Home,
      ShaidanBigImg
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    background #ddd
    .content-wrap
      margin-top 180px
      height 16rem
      /*margin-bottom 100px*/
    .shaidan-wrap
      display flex
      flex-direction column

      .shaidan-top
        background #fff
        padding-top 0.37333rem
        margin-bottom 0.26667rem
        padding-bottom 0.53333rem

        .title
          text-align: center
          font-size 0.4rem
          height 0.5333rem
          line-height 0.5333rem
          color #7f7f7f
          margin-bottom 0.32rem

        .desc
          position: relative
          text-align: center
          max-width 12rem
          font-size 0.5rem
          line-height 0.64rem
          color #333
          overflow hidden
          text-overflow ellipsis

        .picWall
          width 750px
          height 3.2rem
          margin-top 0.6rem
          display flex
          overflow hidden

          ul
            display flex

            .item
              display inline-block
              float left
              width 3.2rem
              height 3.2rem
              border-radius 10px
              overflow hidden
              background-image url("https://yanxuan.nosdn.127.net/44ded9b669fc83f7e7eeda049dd0303a.jpg")
              background-size 100% 100%
              background-repeat no-repeat
              margin-left 0.2rem


      .shaidan-bottom
        display flex
        flex-direction column
        align-items center
        background #fff
        padding-top 0.7rem

        > .title
          color #333
          height 0.46rem
          line-height 0.46rem
          font-size 0.43rem
          margin 0.27rem
          font-weight bold

        .ul-wrap
          width 750px
          height 1.76rem
          padding-top 0.32rem

          ul
            width 750px
            display flex
            justify-content center
            align-items center
            background #fff

            li
              width 2.3rem
              height 1.6rem
              margin 0 0.32rem
              padding 0.43rem 0

              p
                width 2.3rem
                height 0.75rem
                line-height 0.75rem
                text-align: center
                font-size 0.37333rem

                &.active
                  background-color #ffe4af
                  color #b0955f
                  font-weight bold


        .item-wrap
          width 750px
          margin-top 0.27rem
          display flex

          ul
            width 375px
            display flex
            flex-direction column
            align-items center


  .iconfont
    font-size 30px
</style>
