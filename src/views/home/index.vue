<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="homeNav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import homeSwiper from "./component/homeSwiper";
import { getMultiData } from "network/api/home";
export default {
  name: "home",
  components: {
    NavBar,
    homeSwiper,
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