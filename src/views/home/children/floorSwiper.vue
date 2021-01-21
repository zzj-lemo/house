<template>
  <div class="floorList">
    <h2>{{ title }}</h2>
    <swiper :options="swiperOption" ref="mySwiper" v-if="floorSwiper.length">
      <swiper-slide v-for="(item,index) in floorSwiper" :key="index">
        <List :list="item">
          <div class="time">{{ item.time }}开盘</div>
        </List>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import List from '../../../components/list.vue';

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
    swiper,
    swiperSlide,
    List,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss">
.swiper-container {
  .swiper-pagination {
    .swiper-pagination-bullet-active {
      background-color: #333;
    }
  }
}
</style>
<style lang="scss" scoped>
.floorList {
  padding: 0.08rem;
  h2 {
    color: #f20505;
    font-size: 0.24rem;
    margin-bottom: 0.1rem;
  }
  .swiper-container {
    position: relative;
    width: 100%;
    .swiper-slide {
      width: 100%;
      padding-bottom: .3rem;
    }
  }
}
</style>

