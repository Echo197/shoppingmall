<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.slide {
  width: 100%;
  /* 若是父元素设置了flex布局后，若要其子元素的width有效果，必须给子元素设置flex-shrink为0 */
  flex-shrink: 0;
  /* height: 150px; */
  /* background-color: pink; */
}

.slide img {
  width: 100%;
}
</style>