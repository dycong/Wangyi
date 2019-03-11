<template>
  <div id="Container">
    <Header>
      <div class="header-wrap">
        <div class="logo">
          <h1></h1>
          <div class="input" @click="$router.push('/search')">
            <i class=""></i>
            <span>搜索商品,共21728款好物</span>
          </div>
          <div class="login" @click="$router.replace('/personal')">登录</div>
        </div>
        <div class="header-nav-wrap">
          <div class="header-nav-some-wrap">
            <div class="header-nav-some">
              <a href="javascript:;" class="active">
                <span>推荐</span>
              </a>
              <a href="javascript:;">
                <span>居家生活</span>
              </a>
              <a href="javascript:;">
                <span>服饰鞋包</span>
              </a>
              <a href="javascript:;">
                <span>美食酒水</span>
              </a>
              <a href="javascript:;">
                <span>个护清洁</span>
              </a>
              <a href="javascript:;">
                <span>母婴亲子</span>
              </a>
              <a href="javascript:;">
                <span>运动旅行</span>
              </a>
              <a href="javascript:;">
                <span>数码家电</span>
              </a>
              <a href="javascript:;">
                <span>礼品特色</span>
              </a>
            </div>
          </div>
          <div class="down-wrap" @click="ShowAll">
            <div class="down-left"></div>
            <span class="down" :class="{toggle: isShowAll}" ></span>
          </div>
        </div>
        <div class="mask" v-if="isShowAll">
          <div class="mask-wrap">
            <div class="mask-top">
              <div class="allSort"></div>
              <div class="top"></div>
            </div>
            <ul>
              <li>推荐</li>
              <li>居家生活</li>
              <li>服饰鞋包</li>
              <li>美食酒水</li>
              <li>个护清洁</li>
              <li>母婴亲子</li>
              <li>运动旅行</li>
              <li>数码家电</li>
              <li>礼品特色</li>
            </ul>
          </div>
        </div>

      </div>
    </Header>
    <Content>
      <div class="firstView">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/4d078ea6e81cbf0fd128ef1b255bd6e2.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
      <!--轮播下面自营品牌-->
      <div class="swiper-bottom">
        <ul class="">
          <li>
            <a href="JavaScript:;">
              <i
                style="background-image:url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"></i><span>网易自营品牌</span>
            </a>
          </li>
          <li>
            <a href="JavaScript:;">
              <i
                style="background-image:url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"></i><span>30天无忧退货</span>
            </a>
          </li>
          <li>
            <a href="JavaScript:;">
              <i
                style="background-image:url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"></i><span>48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="content-main">
        <!--私人订制之上-->
        <div>
          <!--居家生活-->
          <div class="HomeLife-wrap">
            <ul>
              <li>
                <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                <p>居家生活</p>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/fb9dde0c1593536c18c8e12b6f49eb17.png" alt="">
                <p>服饰鞋包</p>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                <p>美食酒水</p>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
                <p>个护清理</p>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/63682bd2df06963251b2715e20f98a75.png" alt="">
                <p>限时购</p>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
                <p>母婴亲子</p>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/23be40a05926faf2f2a81a08a1c53164.png" alt="">
                <p>运动旅行</p>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
                <p>数码家电</p>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/e83bd330713b66a8d4e8eb0cefed8996.png" alt="">
                <p>礼品特色</p>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/51f5a91f10ba745ec68340b98315acf5.png" alt="">
                <p>超级会员</p>
              </li>
            </ul>
          </div>
          <!--女王献礼-->
          <div class="queen">
            <div class="queen-top">
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75"
                     alt="">
              </a>
            </div>
            <div class="queen-bottom">
              <a href="">
                <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75"
                     alt="">
              </a>
              <a href="">
                <img src="https://yanxuan.nosdn.127.net/15519497825531997.jpg?imageView&thumbnail=375x0&quality=75"
                     alt="">
              </a>
            </div>
            <div class="nothing"></div>
          </div>
          <!--网易员工精选-->
          <div class="staff">
            <a href="">
              <img src="https://yanxuan.nosdn.127.net/329276a2313b7971e7cc8db6493d1f37.png" alt="">
            </a>
          </div>
          <!--女王专属-->
          <div class="staff-bottom">
            <div>
              <a href="">
                <p class="title">女王专属美食阁</p>
                <p class="desc">3件75折/每满150减30</p>
                <div>
                  <img
                    src="http://yanxuan.nosdn.127.net/2b7ffdac363edd686b0471de1655c813.png?imageView&thumbnail=150x150&quality=75"
                    alt="">
                  <img
                    src="http://yanxuan.nosdn.127.net/d84dbafe215d765fb5bbd75e642ad445.png?imageView&thumbnail=150x150&quality=75"
                    alt="">
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <p class="title">2019明前龙井</p>
                <p class="desc">预售好价75折</p>
                <div>
                  <img
                    src="http://yanxuan.nosdn.127.net/f958c8b4e8d6dfa7fc574bd06b530821.png?imageView&thumbnail=150x150&quality=75"
                    alt="">
                  <img
                    src="http://yanxuan.nosdn.127.net/c33ee95d358956a927708d16d67d727e.png?imageView&thumbnail=150x150&quality=75"
                    alt="">
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <p class="title">按摩神器大赏</p>
                <p class="desc">伪真人手按摩</p>
                <div>
                  <img
                    src="https://yanxuan.nosdn.127.net/0fc3975b621704cb00328ef96cdce963.png?imageView&thumbnail=150x150&quality=75"
                    alt="">
                  <img
                    src="https://yanxuan.nosdn.127.net/823652e902ffeb49f50381b93e7e0be0.png?imageView&thumbnail=150x150&quality=75"
                    alt="">
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <p class="title">热销百强榜</p>
                <p class="desc">全站实时更新</p>
                <div>
                  <img
                    src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?imageView&thumbnail=150x150&quality=75"
                    alt="">
                  <img
                    src="https://yanxuan.nosdn.127.net/31dc9401203e8e6f99572abfc4e047a3.png?imageView&thumbnail=150x150&quality=75"
                    alt="">
                </div>
              </a>
            </div>
          </div>
        </div>
        <!--私人订制-->
        <div class="personal">
          <div class="text">
            <span>私人订制</span>
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/9cf70438be99e0662c8123032228f870.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span class="font-normal">泰国制造 天然乳胶枕 护...</span>
                      <span class="price">￥169</span>
                    </div>
                    <div class="small">
                      <span>泰</span>
                      <span>国</span>
                      <span>制</span>
                      <span>造</span>
                    </div>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>玩趣彩虹四季拖鞋</span>
                      <span class="price">￥19.9</span>
                    </div>
                    <div class="small">
                      <span>10</span>
                      <span>色</span>
                      <span>可</span>
                      <span>选</span>
                    </div>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/eb87709f92843bd6eddf9cb7a2b01688.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>电动式硅胶洁面仪</span>
                      <span class="price">￥119</span>
                    </div>
                  </a>
                </li>
              </div>
              <div class="swiper-slide">
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/360eb0e1645f9ae82ad7f94296acafcd.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>100年传世珐琅锅</span>
                      <span class="price">￥241</span>
                    </div>
                    <div class="small">
                      <span>2</span>
                      <span>色</span>
                      <span>可</span>
                      <span>选</span>
                    </div>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/96dbf7cb44b1c504589b6e42c6e5e53a.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>即食燕窝 70克*6瓶...</span>
                      <span class="price">￥208</span>
                    </div>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/1ff21a48ff35db41c09cd3036e9e3b2e.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>大丈夫冻牛肉面</span>
                      <span class="price">￥22.8</span>
                    </div>
                  </a>
                </li>
              </div>
              <div class="swiper-slide">
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/55425f24345d01992d61a1646325ac94.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>严选礼品卡 1000元面...</span>
                      <span class="price">￥1000</span>
                    </div>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/9cf64f95283f5c7d3cef459df3745a5d.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>男式磨毛牛津纺长袖衬衫</span>
                      <span class="price">￥130</span>
                    </div>
                    <div class="small">
                      <span>7</span>
                      <span>色</span>
                      <span>可</span>
                      <span>选</span>
                    </div>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/dfe93936f47b66f4b8a4f1869f0ce828.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>日式和风超声波电动牙刷</span>
                      <span class="price">￥129</span>
                    </div>

                  </a>
                </li>
              </div>
              <div class="swiper-slide">
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/e7414e953903e55c54f354d2309ef270.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>20寸 全铝镁合金登机箱</span>
                      <span class="price">￥799</span>
                    </div>
                    <div class="small">
                      <span>8</span>
                      <span>色</span>
                      <span>可</span>
                      <span>选</span>
                    </div>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/79febce8e66ead2b4f11ac3e645bcf82.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>男式针织压脚束脚裤</span>
                      <span class="price">￥150</span>
                    </div>
                    <div class="small">
                      <span>6</span>
                      <span>色</span>
                      <span>可</span>
                      <span>选</span>
                    </div>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <img
                      src="https://yanxuan.nosdn.127.net/de773a91504ea09383eaa946faf7de71.png?imageView&quality=65&thumbnail=330x330"
                      alt="">
                    <div class="detail">
                      <span>史蒂夫 短袖T恤 我的世界...</span>
                      <span class="price">￥99</span>
                    </div>
                  </a>
                </li>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
        </div>
        <!--限时购-->
        <div class="time-shop">
          <div class="shop-top">
            <div class="text">
              <span>限时购</span>
              <div class="timer">
                <span class="hour">12</span>:
                <span class="min">00</span>:
                <span class="sec">00</span>
              </div>

            </div>
            <a class="more">
              <span>更多</span>
              <i></i>
            </a>
          </div>
          <div class="time-shop-center">
            <a href="">
              <div class="shop-img">
                <img
                  src="http://yanxuan.nosdn.127.net/19ca59c48a76f62d459737aa82922b16.png?imageView&thumbnail=216x216&quality=75"
                  alt="">
              </div>
              <div class="price">
                <span class="newPrice">￥179</span>
                <span class="oldPrice">￥199</span>
              </div>
            </a>
            <a href="">
              <div class="shop-img">
                <img
                  src="http://yanxuan.nosdn.127.net/ef596b93a1b026304b9c5b99fee7c2f1.png?imageView&thumbnail=216x216&quality=75"
                  alt="">
              </div>
              <div class="price">
                <span class="newPrice">￥5099</span>
                <span class="oldPrice">￥5999</span>
              </div>
            </a>
            <a href="">
              <div class="shop-img">
                <img
                  src="http://yanxuan.nosdn.127.net/ef596b93a1b026304b9c5b99fee7c2f1.png?imageView&thumbnail=216x216&quality=75"
                  alt="">
              </div>
              <div class="price">
                <span class="newPrice">￥2079</span>
                <span class="oldPrice">￥2599</span>
              </div>
            </a>
            <a href="">
              <div class="shop-img">
                <img
                  src="http://yanxuan.nosdn.127.net/56f5c0738eba678890ff12bc92895e44.png?imageView&thumbnail=216x216&quality=75"
                  alt="">
              </div>
              <div class="price">
                <span class="newPrice">￥379</span>
                <span class="oldPrice">￥439</span>
              </div>
            </a>
            <a href="">
              <div class="shop-img">
                <img
                  src="http://yanxuan.nosdn.127.net/f6afcfe134c0a28f912db9472c40f5f8.png?imageView&thumbnail=216x216&quality=75"
                  alt="">
              </div>
              <div class="price">
                <span class="newPrice">￥1119</span>
                <span class="oldPrice">￥1399</span>
              </div>
            </a>
            <a href="">
              <div class="shop-img">
                <img
                  src="http://yanxuan.nosdn.127.net/e65a0301983305d68adb0ae7f9890bd2.png?imageView&thumbnail=216x216&quality=75"
                  alt="">
              </div>
              <div class="price">
                <span class="newPrice">￥236</span>
                <span class="oldPrice">￥329</span>
              </div>
            </a>
          </div>
        </div>
        <!--新品首发-->
        <div class="new-shop">
          <div class="shop-top">
            <div class="text">
              <span>新品首发</span>
            </div>
            <a class="more">
              <span>更多</span>
              <i></i>
            </a>
          </div>
          <div class="new-shop-center">
            <li class="item">
              <a>
                <img
                  src="https://yanxuan.nosdn.127.net/9cf70438be99e0662c8123032228f870.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>网易智造低压海盐热敷腰带</span>
                  <span class="price">￥169</span>
                </div>
                <div class="tag">
                  <span class=""></span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/24320570a1ea380d50deb1e509afb522.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>2019明前特技西湖龙井...</span>
                  <span class="price">￥199</span>
                </div>
                <div class="tag">
                  <span class="goodPrice">预售好价</span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/b91ff43b7a016a43390790ee5fbcab01.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>泰国制造 天然乳胶枕 护...</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>8</span>
                  <span>色</span>
                  <span>可</span>
                  <span>选</span>
                </div>
                <div class="tag">
                  <span class=""></span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/38d204ba72e3a72afb59d1b491a15f5d.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>泰国制造 天然乳胶枕 护...</span>
                  <span class="price">￥169</span>
                </div>
                <div class="tag">
                  <span class="bond">券</span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/d9e41913161dd7a12dd21d70058a6e69.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>泰国制造 天然乳胶枕 护...</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>日</span>
                  <span>本</span>
                  <span>制</span>
                  <span>造</span>
                </div>
                <div class="tag">
                  <span class="bond">券</span>
                </div>
              </a>
            </li>
            <li class="item">
              <a>
                <img
                  src="http://yanxuan.nosdn.127.net/0cb381c4f4879a62e7ec024d727a466c.png?imageView&quality=65&thumbnail=330x330"
                  alt="">
                <div class="detail">
                  <span>泰国制造 天然乳胶枕 护...</span>
                  <span class="price">￥169</span>
                </div>
                <div class="small">
                  <span>3</span>
                  <span>色</span>
                  <span>可</span>
                  <span>选</span>
                </div>
                <div class="tag">
                  <span class=""></span>
                </div>
              </a>
            </li>
          </div>
        </div>
        <!--人气推荐-->
        <div class="pop-shop">
          <div class="shop-top">
            <div class="text">
              <span>人气推荐</span>
            </div>
            <a class="more">
              <span>更多</span>
              <i></i>
            </a>
          </div>
          <a class="pop-shop-wrap" href="">
            <div class="pop-shop-img">
              <img
                src="http://yanxuan.nosdn.127.net/73af63aa5c47c369fe7e2f30b3815aac.png?imageView&quality=65&thumbnail=280x280"
                alt="">
            </div>
            <div class="pop-shop-tag">
              <div class="goodPrice-wrap">
                <span class="goodPrice">好货内部价</span>
              </div>
              <div class="name">网易智造减压眼部按摩仪</div>
              <div class="desc">让眼部享受全方位按摩</div>
              <div class="price">￥359</div>
            </div>
          </a>
          <div class="pop-ul">
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
                  <span class="price">￥449</span>
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
                  <span>德</span>
                  <span>国</span>
                  <span>制</span>
                  <span>造</span>
                </div>
                <div class="tag">
                  <span class="goodPrice">女王节特惠</span>
                </div>
              </a>
            </li>
          </div>
        </div>
        <!--类目热销榜-->
        <div class="hot-shop">
          <div class="shop-top">
            <div class="text">
              <span>类目热销榜</span>
            </div>
          </div>
          <div class="hot-shop-wrap">
            <div class="top">
              <a class="top-item">
                <div class="text">热销榜</div>
                <img
                  src="http://yanxuan.nosdn.127.net/d78a90f7f496656b79e4559935031958.png?imageView&quality=65&thumbnail=200x200"
                  alt="">
              </a>
              <a class="top-item">
                <div class="text">好评榜</div>
                <img
                  src="http://yanxuan.nosdn.127.net/d78a90f7f496656b79e4559935031958.png?imageView&quality=65&thumbnail=200x200"
                  alt="">
              </a>
            </div>
            <div class="center">
              <a class="center-item" href="">
                <div class="desc">居家生活榜</div>
                <div class="pic">
                  <img
                    src="http://yanxuan.nosdn.127.net/2eb0624b89d2cce1a5fb13187a0c10d8.jpg?imageView&quality=65&thumbnail=200x200"
                    alt="">
                </div>
              </a>
              <a class="center-item" href="">
                <div class="desc">居家生活榜</div>
                <div class="pic">
                  <img
                    src="http://yanxuan.nosdn.127.net/0d551bd5cee1656127985e1003926672.png?imageView&quality=65&thumbnail=200x200"
                    alt="">
                </div>
              </a>
              <a class="center-item" href="">
                <div class="desc">居家生活榜</div>
                <div class="pic">
                  <img
                    src="http://yanxuan.nosdn.127.net/0d551bd5cee1656127985e1003926672.png?imageView&quality=65&thumbnail=200x200"
                    alt="">
                </div>
              </a>
              <a class="center-item" href="">
                <div class="desc">居家生活榜</div>
                <div class="pic">
                  <img
                    src="http://yanxuan.nosdn.127.net/2eb0624b89d2cce1a5fb13187a0c10d8.jpg?imageView&quality=65&thumbnail=200x200"
                    alt="">
                </div>
              </a>
              <a class="center-item" href="">
                <div class="desc">居家生活榜</div>
                <div class="pic">
                  <img
                    src="http://yanxuan.nosdn.127.net/0d551bd5cee1656127985e1003926672.png?imageView&quality=65&thumbnail=200x200"
                    alt="">
                </div>
              </a>
              <a class="center-item" href="">
                <div class="desc">居家生活榜</div>
                <div class="pic">
                  <img
                    src="http://yanxuan.nosdn.127.net/2eb0624b89d2cce1a5fb13187a0c10d8.jpg?imageView&quality=65&thumbnail=200x200"
                    alt="">
                </div>
              </a>
              <a class="center-item" href="">
                <div class="desc">居家生活榜</div>
                <div class="pic">
                  <img
                    src="http://yanxuan.nosdn.127.net/0d551bd5cee1656127985e1003926672.png?imageView&quality=65&thumbnail=200x200"
                    alt="">
                </div>
              </a>
              <a class="center-item" href="">
                <div class="desc">居家生活榜</div>
                <div class="pic">
                  <img
                    src="http://yanxuan.nosdn.127.net/2eb0624b89d2cce1a5fb13187a0c10d8.jpg?imageView&quality=65&thumbnail=200x200"
                    alt="">
                </div>
              </a>
            </div>
          </div>
        </div>
        <!--福利社-->
        <div class="weal-shop">
          <a class="weal-item">
            <div class="right">
              <img
                src="http://yanxuan.nosdn.127.net/562331f0fbd1fa7113c8caedbdd0f35c.png?imageView&thumbnail=200x200&quality=75"
                alt="">
              <div class="mask">
                <p class="p1">￥96.8</p>
                <p class="p2">￥129</p>
              </div>
            </div>
            <div class="left">
              <p class="title">福利社</p>
              <p class="desc">抢超值神券</p>
              <p class="name">享今日特价</p>
            </div>
          </a>
          <a class="weal-item">
            <div class="right">
              <img
                src="http://yanxuan.nosdn.127.net/562331f0fbd1fa7113c8caedbdd0f35c.png?imageView&thumbnail=200x200&quality=75"
                alt="">
              <div class="mask">
                <p class="p1">￥1</p>
                <p class="p2">￥9.9</p>
              </div>
            </div>
            <div class="left">
              <p class="title">福利社</p>
              <p class="desc">抢超值神券</p>
              <p class="name">享今日特价</p>
            </div>
          </a>
          <a class="weal-item">
            <div class="right">
              <img
                src="http://yanxuan.nosdn.127.net/562331f0fbd1fa7113c8caedbdd0f35c.png?imageView&thumbnail=200x200&quality=75"
                alt="">
            </div>
            <div class="left">
              <p class="title">福利社</p>
              <p class="desc">抢超值神券</p>
              <p class="name">享今日特价</p>
            </div>
          </a>
          <a class="weal-item">
            <div class="right">
              <img
                src="http://yanxuan.nosdn.127.net/562331f0fbd1fa7113c8caedbdd0f35c.png?imageView&thumbnail=200x200&quality=75"
                alt="">
            </div>
            <div class="left">
              <p class="title">福利社</p>
              <p class="desc">抢超值神券</p>
              <p class="name">享今日特价</p>
            </div>
          </a>
        </div>
        <!--品牌制造商直供-->
        <div class="brand-shop">
          <div class="shop-top">
            <div class="text">
              <span>品牌制造商直供</span>
            </div>
            <a class="more">
              <span>更多</span>
              <i></i>
            </a>
          </div>
          <div class="list">
            <a class="item">
              <div class="text">
                <p>海外制造商</p>
                <div class="desc">
                  <span>9.9元起</span>
                  <span class="right">上新</span>
                </div>
              </div>
            </a>
            <a class="item">
              <div class="text">
                <p>海外制造商</p>
                <div class="desc">
                  <span>9.9元起</span>
                  <span class="right">上新</span>
                </div>
              </div>
            </a>
            <a class="item">
              <div class="text">
                <p>海外制造商</p>
                <div class="desc">
                  <span>9.9元起</span>
                </div>
              </div>
            </a>
            <a class="item">
              <div class="text">
                <p>海外制造商</p>
                <div class="desc">
                  <span>9.9元起</span>
                  <span class="right">上新</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!--专题精选-->
        <div class="topic-shop">
          <div class="shop-top">
            <div class="text">
              <span>专题精选</span>
            </div>
            <a class="more">
              <span>更多</span>
              <i></i>
            </a>
          </div>
          <div class="topic-swiper-wrap">
            <div class="swiper-container">
              <ul class="swiper-wrapper">
                <li class="swiper-slide">
                  <a class="pic" href="">
                    <img
                      src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75"
                      alt="">
                  </a>
                  <p class="title">2019明前春茶新鲜上市</p>
                  <div class="desc">把整个春天，酿成明前一杯茶</div>
                </li>
                <li class="swiper-slide">
                  <a class="pic" href="">
                    <img
                      src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75"
                      alt="">
                  </a>
                  <p class="title">2019明前春茶新鲜上市</p>
                  <div class="desc">把整个春天，酿成明前一杯茶</div>
                </li>
                <li class="swiper-slide">
                  <a class="pic" href="">
                    <img
                      src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75"
                      alt="">
                  </a>
                  <p class="title">2019明前春茶新鲜上市</p>
                  <div class="desc">把整个春天，酿成明前一杯茶</div>
                </li>
              </ul>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination swiper-pagination-bullets"></div>
            </div>
          </div>
        </div>
        <!--众筹-->
        <div class="raise-shop">
          <div class="shop-top">
            <div class="text">
              <span>众筹</span>
            </div>
            <a class="more">
              <span>更多</span>
              <i></i>
            </a>
          </div>
          <div class="raise-shop-wrap">
            <a class="raise-shop-item">
              <div class="left">
                <img
                  src="https://yanxuan.nosdn.127.net/534bd66101b746846fabb4bc452d957a.png?imageView&thumbnail=210x210&quality=75"
                  alt="">
              </div>
              <div class="right">
                <p class="name">诸事如意猪猪壶</p>
                <p class="price">￥588起</p>
                <div class="percent">
                  <div class="left">
                    <div class="color"></div>
                  </div>
                  <div class="right">7%</div>
                </div>
                <div class="num">8人以支持</div>
              </div>
            </a>
            <a class="raise-shop-item">
              <div class="left">
                <img
                  src="https://yanxuan.nosdn.127.net/534bd66101b746846fabb4bc452d957a.png?imageView&thumbnail=210x210&quality=75"
                  alt="">
              </div>
              <div class="right">
                <p class="name">诸事如意猪猪壶</p>
                <p class="price">￥588起</p>
                <div class="percent">
                  <div class="left">
                    <div class="color"></div>
                  </div>
                  <div class="right">200%</div>
                </div>
                <div class="num">300人以支持</div>
              </div>
            </a>
          </div>
        </div>
        <!--重复-->
        <RepeatShop />

      </div>
    </Content>
    <Footer>
      <div class="footer-wrap">
        <div class="content">
          <div class="btn">
            <a href="">下载APP</a>
            <a href="">电脑版</a>
          </div>
          <p>
            <span>网易公司版权所有 © 1997-2019</span><br>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
      </div>
    </Footer>
    <a class="gift">
      <i class="icon"></i>
    </a>
    <a href="#" class="GO" v-show="isShowGo"></a>
  </div>
</template>

<script>
  import RepeatShop from '../../components/RepeatShop/RepeatShop.vue'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return{
        isShowAll: false,
        isShowGo:false
      }
    },
    computed:{

    },
    methods: {
      ShowGo(){
        let ScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        // console.log(ScrollTop)
        if(ScrollTop > 1300){
          this.isShowGo = true
        }else {
          this.isShowGo = false
        }
      },

      ShowAll() {
        this.isShowAll = !this.isShowAll
      },
      // BScroll 滑动
      _initScroll () {
        new BScroll('.header-nav-some-wrap', {
          scrollX: true,
          click: true
        })
       /* new BScroll('.repeat-shop1 .repeat-shop-wrap1', {
          scrollX: true,
          click: true
        })
        new BScroll('.repeat-shop2 .repeat-shop-wrap2', {
          scrollX: true,
          click: true
        })
        new BScroll('.repeat-shop3 .repeat-shop-wrap3', {
          scrollX: true,
          click: true
        })
        new BScroll('.repeat-shop4 .repeat-shop-wrap4', {
          scrollX: true,
          click: true
        })
        new BScroll('.repeat-shop5 .repeat-shop-wrap5', {
          scrollX: true,
          click: true
        })*/

      }
    },

    mounted ()  {
      var mySwiper = new Swiper('.firstView .swiper-container', {
        autoplay: true,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.firstView .swiper-pagination',
        },
      })
      var mySwiper2 = new Swiper('.personal .swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.personal .swiper-pagination',
        },
      })
      var mySwiper3 = new Swiper('.topic-swiper-wrap .swiper-container', {
        slidesPerView: 'auto',
      })

      window.addEventListener('scroll', this.ShowGo)

      this.$nextTick(() => {
        this._initScroll()
      })
    },
    components:{
      RepeatShop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #Container

    Header
      height 148px
      background #fff
      border-bottom 1px solid #d9d9d9;
      position relative

      .header-wrap
        position fixed !important
        left 0
        top 0
        width 100%
        z-index 99
        background #fff

        .logo
          display flex
          align-items center
          padding 0.21333rem 0.4rem

          h1
            height 0.53333rem
            width 1.84rem
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
            display inline-block
            margin-right 0.26667rem
            background-size cover
            background-position center

          .input
            display flex
            flex-grow 1
            /*flex-wrap nowrap*/
            align-items center
            justify-content center
            flex-flow row nowrap
            height 0.74667rem
            font-size 0.373333rem
            background #ededed
            border-radius 0.10667rem

            i
              display inline-block
              vertical-align middle
              width 0.37333rem
              height 0.37333rem
              margin-right 0.13333rem
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)

          .login
            line-height 0.53333rem
            text-align center
            color #b4282d
            border 1px solid #b4282d
            border-radius 0.10667rem
            margin-left 0.21333rem
            font-size 0.32rem
            width 0.98667rem
            height 0.5333rem

        .header-nav-wrap
          display flex
          width 100%
          height 0.8rem
          line-height 0.8rem

          .header-nav-some-wrap
            flex 5
            display flex
            overflow hidden
            padding-right 1.3333rem

            .header-nav-some
              white-space nowrap
              display flex
              height 100%
              padding-right 1.6rem

              a
                flex 1 0 auto
                margin-left .26667rem
                padding 0 .21333rem
                text-align center
                color #333
                font-size .37333rem
                &.active
                  color #b4282d
                  border-bottom 2px solid #b4282d

          .down-wrap
            z-index 100
            /*float: left*/
            width 1.33333rem
            height 0.75rem
            text-align: center
            background #fff
            position: absolute
            top: 1.2rem
            right: 0


            .down-left
              position: absolute
              top: 0
              right 1rem
              width 0.8rem
              height 0.6rem
              background #fff

            .down
              margin-top -0.3rem
              width 0.4rem
              height 0.4rem
              display inline-block
              vertical-align middle
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
              background-repeat no-repeat
              background-size 100% 100%
              transition transform  0.5s
              &.toggle
                transform rotate(180deg)

        .mask
          z-index 1
          width 1000rem
          height 1000rem
          background rgba(0,0,0,0.1)
          .mask-wrap
            position: relative
            z-index 2
            background #fff
            width 100%

    Content
      background #eee
      .swiper-container
        height 4.93333rem

        img
          /*height 4.93333rem*/
          width 100%

        .swiper-pagination
          bottom .4rem
          width: 100%

        >>> .swiper-pagination-bullet
          width .53333rem
          height .05333rem
          display inline-block
          background #fff
          opacity .4
          border-radius 0

        >>> .swiper-pagination-bullet-active
          opacity 1
          background #fff
          border-radius 0

      .swiper-bottom
        background #fff
        color #b4282d

        ul
          height 0.96rem
          padding-left 0.4rem
          padding-right 0.4rem
          display flex
          flex-flow nowrap
          align-items center
          zoom 1

          li
            flex 1
            float left

            a
              display inline-block
              vertical-align middle

              i
                display inline-block
                vertical-align middle
                background-repeat no-repeat
                background-size 100% 100%
                width 0.42667rem
                height 0.42667rem

              span
                color #b4282d
                display inline-block
                vertical-align middle
                line-height 0.42667rem
                height 0.42667rem
                font-size 0.32rem
                margin-left 0.10667rem


      .content-main
        background #eee

        .HomeLife-wrap
          background #fff
          width 100%
          height 5.22667rem

          ul
            width 100%

            li
              /*margin-top 0.12rem*/
              display block
              width 1.46667rem
              height 2.08rem
              float left
              margin 0.13333rem 0.26667rem 0

              img
                display block
                width 1.46667rem
                height 1.46667rem

              p
                margin-top 0.13333rem
                text-align: center
                font-size 0.32rem
                line-height 0.48rem
                white-space nowrap
                color #333

        .queen
          width 10rem
          height 2.62222rem
          background-size 100% 100%
          background #fff

          .queen-bottom
            width 100%
            height 2.71111rem
            background-size 100% 100%

            a
              display block
              float left
              width 50%
              height 100%

        .staff
          width 100%
          height 2.13333rem
          display block
          float left
          margin-top 0.3rem

          img
            height 100%
            width 100%

        .staff-bottom
          padding 0.13333rem 0.4rem 0.4rem 0.34667rem
          margin-bottom 0.26667rem
          overflow hidden
          background #fff

          a
            box-sizing border-box
            display block
            width 4.57333rem
            height 3.52rem
            float left
            margin 0.05333rem 0 0 0.05333rem
            padding 0.26667rem 0 0 0.26667rem
            border-radius 0.05333rem
            background url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75)

            .title
              width 100%
              padding-left 0.13333rem
              font-family PingFangSC-Medium
              font-size 0.42667rem
              color #333

            .desc
              width 100%
              margin 0.2rem 0
              font-size 0.32rem
              color #7f7f7f
              padding-left 0.13333rem

            img
              width 2rem
              height 2rem
              margin-right 0.053333rem
              float left

        .personal
          width 100%
          background #fff
          margin-bottom 0.26667rem

          .text
            height 1.3333rem
            line-height 1.3333rem
            padding 0 0.4rem
            background #fff
            overflow hidden

            span
              float left
              font-size 0.42667rem

          .swiper-container
            .swiper-pagination
              bottom .32rem
              width: 100%

            >>> .swiper-pagination-bullet
              width .16rem
              height .16rem
              background #d9d9d9
              border-radius 50%
              border none
              vertical-align middle

            >>> .swiper-pagination-bullet-active
              background red

            .swiper-wrapper
              .swiper-slide
                width 750px
                height auto

        .time-shop
          background #fff
          margin-bottom 0.26667rem

          .time-shop-center
            overflow hidden
            padding 0 0.1rem 0 0.4rem

            a
              display block
              color #333
              float left
              margin-right 0.22rem
              padding-bottom 0.4rem

              .shop-img
                height 2.888rem
                width 2.88rem
                border-radius 4px
                margin-bottom 0.16rem
                background #f5f5f5

              .price
                float left
                padding-left 0.26667rem

                .newPrice
                  float left
                  color #b4282d
                  margin-right 0.16rem
                  font-size 0.37333rem

                .oldPrice
                  float left
                  color #7f7f7f
                  text-decoration line-through
                  font-size 0.32rem

        .new-shop
          display flex
          flex-wrap wrap
          background #fff
          margin-bottom 0.26667rem
          padding-bottom 0.34667rem

          .new-shop-center
            width 750px
            height auto
            position: relative

        .pop-shop
          margin-bottom 0.26667rem
          padding-bottom 0.4rem
          background #fff

          .pop-shop-wrap
            display flex
            align-items center
            background #FEF0DF
            margin 0 0.4rem 0.26667rem
            width 9.2rem
            height 3.7333rem
            color #333

            .pop-shop-img
              height 3.7333rem
              background url(//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
              background-size 100% 100%
              margin-right 0.4rem
              width 3.7333rem

            .pop-shop-tag
              .goodPrice-wrap
                margin 0 0 0.16rem
                margin-bottom 0.12rem
                height 0.41333rem
                width 4.6667rem
                z-index 1
                overflow hidden

                .goodPrice
                  height 0.4rem
                  font-size 0.26667rem
                  display inline-block
                  text-align: center
                  margin-left 0
                  margin-bottom 0.06667rem
                  padding 0 0.10667rem
                  line-height 0.37333rem
                  color #b4282d
                  background rgba(255, 255, 255, 0.9)
                  border 1px solid #b4282d
                  vertical-align top

              .name
                width 4.6667rem
                height 0.5rem
                font-size 0.37333rem
                text-overflow ellipsis
                white-space nowrap
                overflow hidden

              .desc
                height 0.5rem
                color #7f7f7f
                width 4.6667rem
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                font-size 0.32rem

              .price
                height 0.5rem
                color #b4282d
                font-size 0.37333rem


          .pop-ul
            overflow hidden
            background #fff
            padding-left 0.1333rem

        .hot-shop
          margin-bottom 0.26667rem
          padding-bottom 0.4rem
          background #fff

          .hot-shop-wrap
            overflow hidden
            padding 0 0.26667rem 0.26667rem 0.4rem

            .top
              .top-item
                width 4.5333rem
                height 2.66667rem
                float left
                margin 0 0.13333rem 0.13333rem 0
                position relative
                background #f9f3e4

                .text
                  padding-left 0.32rem
                  color #333
                  font-size 0.37333rem
                  margin-top 0.88rem
                  z-index 5
                  position relative

                ::before
                  content ''
                  position: absolute
                  left 0.3rem
                  bottom -0.21333rem
                  width 0.64rem
                  height 0.05333rem
                  background #333

                img
                  position absolute
                  right 0
                  top 0
                  width 2.66667rem
                  height 2.66667rem


            .center
              .center-item
                display block
                width 2.2rem
                height 2.4rem
                background #f5f5f5
                border-radius 0.05333rem
                float left
                margin 0 0.13333rem 0.13333rem 0

                .desc
                  margin-top 0.13333rem
                  text-align: center
                  font-size 0.32rem
                  color #333

                .pic
                  width 1.6rem
                  height 1.6rem
                  margin 0.02667rem 0 0 0.30667rem

                  img
                    display inline
                    width 100%
                    height auto


        .weal-shop
          padding 0.34667rem 0.34667rem 0.34667rem 0.4rem
          background #fff
          overflow hidden
          margin-bottom 0.2667rem

          .weal-item
            background url(http://yanxuan.nosdn.127.net/dc4bbc16d3946fddb71382f8132210b9.png?imageView&thumbnail=343x220&quality=75)
            display block
            color #333
            width 4.57333rem
            height 2.9333rem
            float left
            margin 0 0.05333rem 0.05333rem 0
            font-size 0.32rem
            padding 0.26667rem 0 0 0.4rem
            position relative

            .right
              position absolute
              right 0
              top 0
              width 2.66667rem
              height 2.66667rem

              img
                display inline
                height auto
                width 100%

              .mask
                position absolute
                top 0.4rem
                right 0.45333rem
                width 1.06667rem
                height 1.06667rem
                opacity 0.8
                background #f59524
                border-radius 50%
                padding-top 0.13333rem
                color #fff
                text-align: center

                .p1
                  padding-top 0.15rem
                  padding-left -0.1rem
                  font-size 0.32rem

                .p2
                  font-size 0.26667rem

                  text-decoration line-through

            .left
              position relative

              .title
                height 0.5rem
                line-height 0.5rem
                font-size 0.42667rem

              .desc
                height 0.4rem
                line-height 0.4rem
                color #7f7f7f

              .name
                height 0.4rem
                line-height 0.4rem
                color #b4282d

        .brand-shop
          .list
            position: relative
            overflow hidden
            background #fff
            margin-bottom 0.26667rem
            padding 0 0.34667rem 0.34667rem 0.4rem

            .item
              background url(http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
              background-size 100% 100%
              display inline-block
              position relative
              margin 0 0.05333rem 0.05333rem 0
              width 4.57333rem
              height 3.46667rem
              overflow hidden
              background-color #f4f4f4

              .text
                position: absolute
                left 0
                top: 0
                padding-top 0.30667rem
                width 100%
                text-align: center

                p
                  text-overflow ellipsis
                  white-space nowrap
                  overflow hidden
                  color #333
                  font-size 0.37333rem
                  line-height 0.45333rem
                  margin-bottom 0.04rem

                .desc
                  display flex
                  justify-content center

                  span
                    font-size 0.32rem
                    color #7f7f7f

                  .right
                    display inline-block
                    width 0.85333rem
                    height 0.42667rem
                    line-height 0.42667rem
                    text-align: center
                    background #cbb693
                    margin-left 0.13333rem
                    color #fff


        .topic-shop
          background #fff
          padding 0 0.4rem 0.4rem
          margin-bottom 0.26667rem
          overflow hidden

          .topic-swiper-wrap
            .swiper-container
              overflow visible

            .swiper-wrapper
              width 100%

              li
                margin-left 31.25px
                width 6.4rem
                padding-bottom 0.32rem
                background #f5f5f5
                overflow visible

                .pic
                  display block
                  width 6.4rem
                  height 3.56rem
                  margin-bottom 0.21333rem
                  overflow visible

                  img
                    width 100%
                    height auto
                    position: relative
                    left 50%
                    transform translateX(-50%)

                .title
                  width 5.46667rem
                  font-size 0.37333rem
                  height 0.54667rem
                  line-height 0.53333rem
                  margin-bottom 0.08rem
                  overflow visible
                  padding 0 0.26667rem

                .desc
                  text-overflow ellipsis
                  white-space nowrap
                  overflow visible
                  width 5.86667rem
                  font-size 0.32rem
                  color #7f7f7f
                  padding 0 0.2666rem

        .raise-shop
          background #fff
          margin-bottom 0.2667rem

          .raise-shop-wrap
            border-top 1px solid #d8d8d8
            padding-bottom 0.4rem

            .raise-shop-item
              display flex
              flex-direction row
              flex-wrap nowrap
              align-items center
              padding 0.4rem 0.4rem 0
              color #333

              .left
                margin-right 0.4rem
                background-color #f4f4f4

                img
                  display inline
                  width 2.8rem
                  height 2.8rem


              .right
                .name
                  font-size 0.37333rem
                  width 6rem
                  white-space nowrap
                  text-overflow ellipsis
                  overflow hidden

                .price
                  font-size 0.42667rem
                  color #b4282d

                .percent
                  position: relative
                  border-radius 0.04rem

                  .left
                    width 4.8rem
                    height 0.08rem
                    border-radius 0.04rem
                    overflow hidden
                    position: relative
                    margin-top 0.29333rem
                    background #d8d8d8

                    .color
                      width 7%
                      position: absolute
                      top: 0
                      left: 0
                      z-index 2
                      height 100%
                      background #fea438

                  .right
                    position: absolute
                    right: 0
                    top -0.2rem
                    font-size 0.32rem
                    color #7f7f7f

                .num
                  margin-top 0.2rem
                  font-size 0.32rem
                  color #7f7f7f


    Footer
      margin-bottom 100px
      .footer-wrap
        border-top 1px solid rgba(0,0,0,0.15)
        background-color: #414141
        .content
          text-align: center
          padding 0.72rem 0.26667rem 0.37333rem
          .btn
            a
              height 0.82667rem
              width 2.23999rem
              line-height 0.82667rem
              margin-right 0.66667rem
              font-size 0.32rem
              color #fff
              border 1px solid #999
              display inline-block
              vertical-align middle
              text-align: center
          p
            margin-top 0.48rem
            font-size 0.32rem
            line-height 0.42667rem
            color #999
    .gift
      position: fixed
      right: 0
      bottom 3.2rem
      display block
      z-index 10
      .icon
        display inline-block
        vertical-align middle
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png)
        background-repeat no-repeat
        background-size 100% 100%
        width 1.49333rem
        height 1.06667rem

    .GO
      position: fixed
      right 0.30667rem
      bottom 1.6rem
      width 1.09333rem
      height 1.09333rem
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png)
      background-size 1.09333rem 1.09333rem
      z-index 10
  /*相同样式*/
  /*分类头部*/
  .shop-top
    box-sizing border-box
    width 100%
    height 1.3333rem
    line-height 1.3333rem
    padding 0 0.4rem
    background #fff
    overflow hidden

    .text
      font-size 0.42667rem
      float left

      .timer
        vertical-align middle
        margin -0.08rem 0 0 0.16rem
        display inline-block

        span
          display inline-block
          font-size 0.32rem
          width 0.48rem
          height 0.48rem
          line-height 0.48rem
          text-align: center
          background #333
          color #fff
          margin 0 0.13333rem

    .more
      float right
      display block
      font-size 0.37333rem
      line-height 1.3333rem
      color #333

      i
        width 0.17333rem
        height 0.30667rem
        display inline-block
        vertical-align middle
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png)
        background-repeat no-repeat
        background-size 100% 100%


  /*图片，small，goodPrice，bond的li*/
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
