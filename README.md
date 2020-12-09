# shoppingmall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# note

## 1. 轮播图

- 思路一
  - 全局组件中定义Swiper.vue -----> 视图组件Home.vue中引入这个组件

```vue
// Swiper.vue
<template>
  <div id="hy-swiper">
    <!-- 轮播图 -->
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <div class="slide" v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Swiper",
  props: {
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
};
</script>
<style>
#hy-swiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}

.slide {
  width: 100%;
  /* 若是父元素设置了flex布局后，若要其子元素的width有效果，必须给子元素设置flex-shrink为0 */
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>
```

```vue
// Home.vue
<template>
  <div id="home">
    <swiper :banners="banner"></swiper> 
</template>
<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "home",
  components: {
    Swiper
  },
};
```

- 思路二
  - 在上述情况下，预留slide插槽，新增SwiperItem.vue

```vue
// Swiper.vue
<template>
  <div id="hy-swiper">
    <!-- 轮播图 -->
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
       <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Swiper",
};
</script>
<style>
#hy-swiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}
</style>
```

```vue
// SwiperItem.vue
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
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
```

```vue
// Home.vue
<template>
  <div id="home">
    <swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" />
    		</a>
    	</swiper-item>
    </swiper> 
</template>
<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  name: "home",
  components: {
    Swiper,
    SwiperItem
  },
};
```

- 思路三
  - 在思路二的基础上，将Home.vue中轮播图的逻辑部分单独抽离成HomeSwiper.vue局部组件

```vue
// Home.vue
<template>
  <div id="home">
      <home-swiper :banner=banner></home-swiper> 
</template>
<script>
import HomeSwiper from "./component/homeSwiper";
export default {
  name: "home",
  components: {
    HomeSwiper
  },
};
```

```vue
// HomeSwiper.vue
<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
```

