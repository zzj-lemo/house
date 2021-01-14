<template>
  <div id="home">

    <RecommendView :recommends="recommends"></RecommendView>

    <floor-list :title="title1"></floor-list>

    <floor-list :title="title2"></floor-list>
  </div>
</template>

<script>
import RecommendView from "./children/RecommendView";
import FloorList from './children/floorList.vue';
import { getHomeMultiData } from "../../network/home";

export default {
  name: "Home",
  components: {
    RecommendView,
    FloorList,
  },
  data() {
    return {
      recommends: [],
      title1: '热门楼盘',
      title2: '即将开盘',
    };
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.recommends = res;
    })

  },
};
</script>
