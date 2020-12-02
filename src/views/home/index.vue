<template>
  <nav-bar class="homeNav">
    <div slot="center">购物街</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
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