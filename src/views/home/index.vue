<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="homeNav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner="banner"></home-swiper>
    <!-- 推荐 -->
    <recommend-view :recommends="recommend"></recommend-view>
    <!-- 特色 -->
    <feature-view></feature-view>
    <!-- 内容导航栏 -->
    <tab-control></tab-control>

    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import homeSwiper from "./component/homeSwiper";
import RecommendView from "./component/RecommendView";
import FeatureView from "./component/FeatureView";
import { getMultiData, getProductData } from "network/api/home";
export default {
  name: "home",
  components: {
    NavBar,
    TabControl,
    homeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      }
    };
  },
  created() {
    // 1. 获取轮播图数据
    this.getMultiData();

    // 2. 获取商品数据
    this.getProductData("pop");
    this.getProductData('new');
    this.getProductData('sell');
  },
  methods: {
    getMultiData() {
      getMultiData().then(res => {
        this.banner = res.data.banner.list;
        this.dKeyword = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getProductData(type) {
      const page = this.goods[type].page + 1;
      getProductData("pop", page).then(res => {
        this.goods[type].list.push(res.data.list);
        this.goods[type].page++;
      });
    }
  }
};
</script>
<style>
#home {
  height: 100vh;
}
.homeNav {
  color: var(--color-background);
  background-color: var(--color-tint);
  /* position: relative; */
  /* z-index: 9; */
}
</style>
