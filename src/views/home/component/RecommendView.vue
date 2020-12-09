<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends" :key="item.sort">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <span>{{item.title}}</span>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          },
          required: true
      }
  },
};
</script>
<style>
.recommend{
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 25px;
    border-bottom: 10px solid #eee;
}

.recommend-item{
    flex: 1;
    text-align: center;
}

.recommend-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 5px;
}

.recommend-item a{
    text-decoration: none;
    color: #333333;
}
</style>