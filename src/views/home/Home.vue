<template>
  <div id="home">
    <RecommendView :recommends="recommends"></RecommendView>

    <floor-swiper :title="$t('home.hot')" :floorSwiper="hotList"></floor-swiper>

    <floor-swiper :title="$t('home.soon')" :floorSwiper="soonList"></floor-swiper>
  </div>
</template>

<script>
import RecommendView from "./children/RecommendView";
import floorSwiper from "./children/floorSwiper.vue";
import { getResource, getfloorSwiper } from "../../network/home";

export default {
  name: "Home",
  components: {
    RecommendView,
    floorSwiper,
  },
  data(){
    return {
      recommends: [],
      hotList:[],
      soonList:[],
    };
  },
    
  created() {
    this.getResource();
    this.getfloorSwiper();
  },
  methods: {
    getResource() {
      getResource().then((res) => {
        console.log(res);
        this.recommends = res;
      });
    },
    getfloorSwiper() {
      getfloorSwiper().then((res) => {
        console.log(res);
        this.hotList = res.filter(item => item.type == 'hot' );
        this.soonList = res.filter(item => item.type == 'soon' );
      });
    },
  },
};
</script>
