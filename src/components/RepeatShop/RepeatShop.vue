<template>
  <div>
    <div class="repeat-shop repeat-shop1">
      <a class="bgc"></a>
      <div class="repeat-shop-wrap repeat-shop-wrap1">
        <div class="repeat-wrap repeat-wrap1">
          <ul>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/d9e41913161dd7a12dd21d70058a6e69.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>西班牙制造，高</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>西</span>
                  <span>班</span>
                  <span>牙</span>
                  <span>制</span>
                  <span>造</span>
                </div>
                <div class="tag">
                  <span class="goodPrice">限时购</span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/d9e41913161dd7a12dd21d70058a6e69.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>西班牙制造，高</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>西</span>
                  <span>班</span>
                  <span>牙</span>
                  <span>制</span>
                  <span>造</span>
                </div>
                <div class="tag">
                  <span class="goodPrice">限时购</span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/d9e41913161dd7a12dd21d70058a6e69.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>西班牙制造，高</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>西</span>
                  <span>班</span>
                  <span>牙</span>
                  <span>制</span>
                  <span>造</span>
                </div>
                <div class="tag">
                  <span class="goodPrice">限时购</span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/d9e41913161dd7a12dd21d70058a6e69.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>西班牙制造，高</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>西</span>
                  <span>班</span>
                  <span>牙</span>
                  <span>制</span>
                  <span>造</span>
                </div>
                <div class="tag">
                  <span class="goodPrice">限时购</span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/d9e41913161dd7a12dd21d70058a6e69.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>西班牙制造，高</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>西</span>
                  <span>班</span>
                  <span>牙</span>
                  <span>制</span>
                  <span>造</span>
                </div>
                <div class="tag">
                  <span class="goodPrice">限时购</span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/d9e41913161dd7a12dd21d70058a6e69.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>西班牙制造，高</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>西</span>
                  <span>班</span>
                  <span>牙</span>
                  <span>制</span>
                  <span>造</span>
                </div>
                <div class="tag">
                  <span class="goodPrice">限时购</span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/d9e41913161dd7a12dd21d70058a6e69.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>西班牙制造，高</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>西</span>
                  <span>班</span>
                  <span>牙</span>
                  <span>制</span>
                  <span>造</span>
                </div>
                <div class="tag">
                  <span class="goodPrice">限时购</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: '',
    methods:{
      _initBScroll() {
        new BScroll('.repeat-shop1 .repeat-shop-wrap1', {
          scrollX: true,
          click: true
        })
      }
    },
    mounted(){
      this.$nextTick(() => {
        this._initBScroll()
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .repeat-shop
    background #fff
    margin-bottom 0.26667rem
    .bgc
      background url(https://yanxuan.nosdn.127.net/61057b244c63dec382afb5385f0d4270.jpg?imageView&thumbnail=750x0&quality=75)
      background-size 100% 100%
      display block
      width 100%
      height 4.9333rem
      margin-bottom 0.26667rem

    .repeat-shop-wrap
      background #fff
      display flex
      overflow hidden
      flex-wrap nowrap

      .repeat-wrap
        background #fff
        display flex
        flex 2
        /*height auto*/
        padding 0 0.4rem 0.4rem

        ul
          overflow hidden
          display flex
          height auto
          position: relative



.item
  margin-left 0.2666rem
  width 2.88rem
  float left
  padding 0 0 0.17333rem !important
  position: relative

  a
    width 100%
    color #333
    display block

    img
      display block
      top 0
      left 0
      width 2.88rem
      height 2.88rem
      background #f5f5f5
      margin-bottom 0.1rem

    .detail
      margin-top 0
      margin-bottom 0.048rem
      padding 0
      font-size 0.32rem
      overflow visible
      white-space normal
      line-height 0.48rem

    .small
      position: absolute
      top 0
      left 0
      width 0.42667rem
      padding 0.16rem 0
      margin 0.13333rem 0 0 0.13333rem
      color #b4a078
      border 0.5px solid #b4a078
      background #fff
      border-radius 0.02667rem
      display flex
      flex-direction column
      justify-content center

      span
        text-align: center
        line-height 1
        font-size 0.26667rem

    .tag
      width 100%
      z-index 1
      margin 0 0 0.05rem -0.16rem
      height 0.41333rem
      overflow hidden
      padding-left 0

      .goodPrice
        margin-left 0.16rem
        float left
        display inline-block
        vertical-align middle
        margin-bottom 0.06667rem
        height 0.4rem
        line-height 0.37333rem
        text-align: center
        font-size 0.26667rem
        padding 0 0.10667rem
        color #b4292d
        border 1px solid #b4282d
        zoom 1
        background rgba(255, 255, 255, 0.9)

      .bond
        float left
        display inline-block
        vertical-align middle
        margin-bottom 0.06667rem
        height 0.4rem
        text-align: center
        font-size 0.26667rem
        color #b4292d
        zoom 1
        background rgba(255, 255, 255, 0.9)
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/coupon-tag-77f3e7728a.png) no-repeat
        background-size 100%
        padding 0 0.17333rem
        line-height 0.4rem
        border none
        margin-left 0.16rem

      .price
        color #b4292d

</style>
