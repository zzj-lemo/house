<template>
  <div class="floorList">
    <h2>{{ title }}</h2>
    <van-swipe class="my-swipe" autoplay="false" indicator-color="#333">
      <van-swipe-item v-for="(item, index) in floorSwiper" :key="index">
        <list :list="item">
          <div class="time">{{ item.time }}开盘</div>
        </list>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import List from "../../../components/list.vue";

export default {
  name: "FloorSwiper",

  props: {
    title: String,
    floorSwiper: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    List,
  },
};
</script>
<style lang="scss" scoped>
.floorList {
  padding: 8px;
  h2 {
    color: #f20505;
    font-size: 24px;
    margin-bottom: 10px;
  }
}
  .van-swipe__indicator {
    background-color: #ddd;
  }
  .van-swipe__indicator--active {
    background-color: #333;
  }
  .van-swipe-item {
    padding-bottom: 15px;
}
</style>

