<template>
  <div class="container">
    <div class="list">
      <div class="list-wrap">
        <div class="item-wrap">
          <a class="item" :href="tab.linkUrl" v-for="(tab, index) in tabs" :key="index" >{{tab.tabName}}</a>
        </div>
      </div>
    </div>
    <!--推荐-->
    <div class="content">
      <BigImg/>
      <SmallImg />
    </div>
    <!--女王节礼物-->

  </div>
</template>

<script>
  import {reqShiwuData} from '../../../api/index'
  import BScroll from 'better-scroll'

  import BigImg from '../../../components/BigImg/BigImg.vue'
  import SmallImg from '../../../components/SmallImg/SmallImg.vue'

  export default {
    data() {
      return{
        tabs:[],
        Manual:[],
        avatar:'',
        nickName:'',
        title:'',
        picUrl:''
      }
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
    async mounted () {
      const result = await reqShiwuData()
      this.tabs = result.data.tabs.data
      // console.log('this.tabs---',this.tabs)
      this.Manual = result.data.Manual.data
      console.log('this.Manual---',this.Manual)

      this.$nextTick(() => {
        this._initScroll()
      })
    },
    components:{
      BigImg,
      SmallImg
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
