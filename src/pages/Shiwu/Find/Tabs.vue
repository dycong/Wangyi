<template>
  <div class="container">

    <!--推荐-->
    <div class="content" v-if="tabId === 0">
      <div v-for="(item, index) in Manual" :key="index">
        <li v-for="(topic, index) in item.topics" :key="index" >
          <BigImg v-if="topic.style === 1" :topic="topic"/>
          <SmallImg v-if="topic.style === 2" :topic="topic"/>
        </li>
      </div>
    </div>
    <!--女王节礼物-->
    <div class="content" v-if="tabId === 1">
      <div v-for="(item, index) in Manual" :key="index">
        <li v-for="(topic, index) in item.topics" :key="index" >
          <BigImg v-if="topic.style === 2" :topic="topic"/>
          <SmallImg v-if="topic.style === 1" :topic="topic"/>
        </li>
      </div>
    </div>
    <!--收纳秘诀-->
    <div class="content" v-if="tabId === 2">
      收纳秘诀
    </div>
    <!--晒单-->
    <div class="content" v-if="tabId === 3">
      晒单
    </div>
    <!--达人-->
    <div class="content" v-if="tabId === 4">
      <div v-for="(item, index) in Manual" :key="index">
        <li v-for="(topic, index) in item.topics" :key="index" >
          <BigImg v-if="topic.style === 1" :topic="topic"/>
          <SmallImg v-if="topic.style === 2" :topic="topic"/>
        </li>
      </div>
    </div>
    <!--HOME-->
    <div class="content" v-if="tabId === 5">
      <div>
        <li v-for="(item, index) in Home" :key="index" >
          <Home :item="item"/>
        </li>
      </div>
    </div>

  </div>
</template>

<script>
  import {reqShiwuData} from '../../../api/index'

  import BigImg from '../../../components/BigImg/BigImg.vue'
  import SmallImg from '../../../components/SmallImg/SmallImg.vue'
  import Home from '../../../components/Home/Home.vue'

  export default {
    data () {
      return {
        Manual: [],
        Home:[],
        Talent:[]
      }
    },
    async mounted () {
      const result = await reqShiwuData()

      this.Manual = result.data.Manual.data
      this.Home = result.data.Home.data.result
      this.Talent = result.data.Talent
      console.log('this.Talent', this.Talent)
      // console.log('this.Home',this.Home)
      // console.log('this.Manual---',this.Manual)
      // console.log(this.Manual[0].topics)

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

    components: {
      BigImg,
      SmallImg,
      Home
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

    .content
      margin-top 180px
      margin-bottom 100px

  .iconfont
    font-size 50px
</style>
