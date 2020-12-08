<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="homeNav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <!-- 思路一 -->
    <!-- <swiper :banners="banner"></swiper> -->
    <!-- 思路二 -->
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
// import { Swiper, SwiperItem } from "components/common/swiper";
import { getMultiData } from "network/api/home";
export default {
  name: "home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      banner: [],
      dKeyword: "",
      keywords: "",
      recommend: "",
    };
  },
  created() {
    getMultiData().then((res) => {
      this.banner = res.data.banner.list;
      console.log(this.banner);
      this.dKeyword = res.data.dKeyword;
      this.keywords = res.data.keywords;
      this.recommend = res.data.recommend;
    });
  },
  methods: {},
};
</script>
<style>
#home {
  height: 100vh;
}
.homeNav {
  color: var(--color-background);
  background-color: var(--color-tint);
}
</style>