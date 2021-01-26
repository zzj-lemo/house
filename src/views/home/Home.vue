<template>
  <div id="home">
    <recommend-view :recommends="recommends"></recommend-view>

    <floor-swiper :title="$t('home.hot')" :floorSwiper="hotList"></floor-swiper>

    <floor-swiper :title="$t('home.soon')" :floorSwiper="soonList"></floor-swiper>
  </div>
</template>

<script>
import { getResource, getfloorSwiper } from "../../network/home";
import RecommendView from './children/RecommendView.vue';
import FloorSwiper from './children/FloorSwiper.vue';

export default {
  name: "Home",
  components: {
    RecommendView,
    FloorSwiper,
    RecommendView,
  },
  data() {
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
