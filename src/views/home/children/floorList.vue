<template>
  <div class="floorList">
    <h2>{{ title }}</h2>
    <Swiper>
      <div>111</div>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "../../../components/swiper";

export default {
  name: "floorList",

  props: {
    title: String,
    floorList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Swiper,
  },
};
</script>

<style lang="scss" scoped>
.floorList {
  padding: 0.08rem;
  h2 {
    color: #f20505;
    font-size: 0.24rem;
  }
}
</style>
