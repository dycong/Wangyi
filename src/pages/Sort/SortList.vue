<template>
  <div class="right" v-if="RightLists">
    <div class="right-wrap">
      <div class="content">
        <div class="banner">
          <img :src="RightLists.wapBannerUrl" alt="">
        </div>
        <div class="cateList">
          <ul class="lists">
            <li class="item" v-for="(RightList, index) in RightLists.subCateList" :key="index">
              <div class="itemPic">
                <img v-lazy="RightList.wapBannerUrl" alt="">
              </div>
              <p class="title">{{RightList.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {reqSortList} from '../../api'

  export default {
    data () {
      return {
        // RightLists: [],
        LeftLists:[]
      }
    },
    computed: {
      RightLists () {
        if (this.LeftLists) {
          const res = this.LeftLists.find(item => item.id === this.$route.query.id * 1)
          if (!res) {
            return this.LeftLists[0]
          } else {
            return res
          }
        }
      }
    },
    async mounted () {
      const result = await reqSortList()
      this.LeftLists = result.data.categoryL1List

      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll () {
        new BScroll('.right-wrap', {
          click: true
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
          img
            width 100%
            height 100%

        .cateList
          .lists
            .item
              display inline-block
              margin-right 0.4rem
              width 1.92rem
              vertical-align top
              .itemPic
                width 1.92rem
                height 1.92rem
                img
                  width 100%
                  height 100%
              .title
                height 0.96rem
                line-height 0.48rem
                font-size 0.32rem
                text-align: center
                overflow hidden
                color #333


</style>
