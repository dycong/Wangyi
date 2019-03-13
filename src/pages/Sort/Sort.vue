<template>
  <div>
    <Header>
      <div class="header-wrap">
        <div class="search-wrap">
          <div class="top"></div>
          <div class="search-content" @click="$router.push('/search')">
            <div class="content">
              <i class="icon"></i>
              <span>搜索商品，共21861款好物</span>
            </div>
          </div>
        </div>
      </div>

    </Header>

    <Content>
      <div class="left">
        <div class="left-wrap">
          <ul>
            <!--:class="LeftList.id === Number($route.query.id) ? 'active' : ''"-->
            <li v-for="(LeftList, index) in LeftLists" :key="index"
                :class="{active:num === index}"
                @click="alive(index)">
              <router-link :to="`/sort/sortList?id=${LeftList.id}`">
                <a href="">{{LeftList.name}}</a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <RouterView/>
    </Content>
  </div>
</template>

<script>
  import SortList from './SortList.vue'
  import BScroll from 'better-scroll'
  import {reqSortList} from '../../api'

  export default {
    data () {
      return {
        LeftLists: [],
        num:''
      }
    },
    methods: {
      alive(indexs) {
        this.num = indexs
      },
      // 初始化滑动
      _initScroll () {
        new BScroll('.left-wrap', {
          click: true
        })
      }
    },
    async mounted () {
      const result = await reqSortList()
      // console.log('result',result)
      this.LeftLists = result.data.categoryL1List

      this.$nextTick(() => {
        this._initScroll()
      })
      this.alive(0)
    },
    components: {
      SortList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  Header
    .header-wrap
      height 88px

      .search-wrap
        position: fixed
        left: 0
        top: 0
        z-index 5
        width 100%

        .top
          position: relative
          z-index 2
          overflow hidden
          height 0

        .search-content
          display flex
          align-items center
          height 1.17333rem
          padding 0 0.4rem
          background #fff
          position: relative

          .content
            width 100%
            display flex
            align-items center
            justify-content center
            height 0.74667rem
            font-size 0.37333rem
            background-color #ededed

            .icon
              display inline-block
              vertical-align middle
              background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
              background-repeat no-repeat
              background-size 100% 100%
              width 0.37333rem
              height 0.37333rem
              margin-right 0.1333rem

            span
              color #666


  Content
    height 1148px
    width 100%
    overflow hidden

    .left
      float left
      width 2.16rem
      background #fff
      overflow hidden
      height 1148px

      .left-wrap
        height 100%

        ul
          flex-direction column
          justify-content center
          overflow hidden
          box-sizing border-box
          padding 0.53333rem 0
          padding-bottom 1rem

          :nth-child(1)
            margin-top 0

          li
            text-align: center
            height 0.6667rem
            margin-top 0.53333rem
            width 162px

            &.active
              border-left 3px solid red

            a
              width 100%
              display block
              line-height 0.6667rem
              font-size 0.37333rem
              color #333


    .right
      padding 0.4rem 0.4rem 0.28rem
      height 1148px
      overflow hidden
      margin-left 2.16rem

      .right-wrap
        height 100%
        overflow hidden

        .content
          .banner
            width 100%
            height 2.56rem
            display table
            margin-bottom 0.42667rem
            background #f4f4f4 center no-repeat
            border-right 4px
            position: relative

          .cateList
            .lists
              .item
                display inline-block
                margin-right 0.4rem
                font-size 0
                width 1.92rem
                vertical-align top

                .itemPic
                  width 1.92rem
                  height 1.92rem

                  img
                    display block
                    width 100%
                    height 100%
                    background #fff

                .title
                  height 0.96rem
                  line-height 0.48rem
                  font-size 0.32rem
                  text-align: center
                  overflow hidden
                  color #333


</style>
