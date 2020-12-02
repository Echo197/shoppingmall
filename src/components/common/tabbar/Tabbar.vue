<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {};
  },
  methods: {},
}

</script>
<style>
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  box-shadow: 0 -2px 3px rgba(100, 100, 100, 0.2);
}
</style>