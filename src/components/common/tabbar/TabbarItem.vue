<template>
  <div class="tabbar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  // 父传子
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isactive: false,
    };
  },
  methods: {
    itemClick() {
      // console.log(this.path);
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>
<style>
.tabbar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar_item img {
  width: 24px;
  height: 24px;
  vertical-align: bottom;
  margin-top: 3px;
  margin-bottom: 2px;
}
</style>
