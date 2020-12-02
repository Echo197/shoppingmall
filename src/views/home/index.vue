<template>
  <nav-bar class="homeNav">
    <div slot="center">购物街</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getMultiData } from "network/api/home";
export default {
  data() {
    
    return {
      banner: "",
      dKeyword: "",
      keywords: "",
      recommend: "",
    };
  },
  components: {
    NavBar,
  },
  created() {
    getMultiData().then((res) => {
      this.banner = res.banner;
      this.dKeyword = res.dKeyword;
      this.keywords = res.keywords;
      this.recommend = res.recommend;
    });
  },
  methods: {},
};
</script>
<style>
.homeNav {
  color: var(--color-background);
  background-color: var(--color-tint);
}
</style>