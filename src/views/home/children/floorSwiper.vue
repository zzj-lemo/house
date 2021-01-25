<template>
  <div class="floorList">
    <h2>{{ title }}</h2>
    <van-swipe class="my-swipe" autoplay="false" indicator-color="#333">
      <van-swipe-item v-for="(item, index) in floorSwiper" :key="index">
        <List :list="item">
          <div class="time">{{ item.time }}开盘</div>
        </List>
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
  padding: 0.08rem;
  h2 {
    color: #f20505;
    font-size: 0.24rem;
    margin-bottom: 0.1rem;
  }
}
  .van-swipe__indicator {
    background-color: #ddd;
  }
  .van-swipe__indicator--active {
    background-color: #333;
  }
  .van-swipe-item {
    padding-bottom: 0.15rem;
}
</style>

