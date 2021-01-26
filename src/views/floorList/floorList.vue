<template>
  <div class="floorList">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div v-for="(item, index) in floorList" :key="index">
      <List :list="item"></List>
    </div>
  </div>
</template>
<script>
// import Screen from "../../components/screen.vue";
import List from '../../components/list.vue';
import { getfloorSwiper } from "../../network/home";

export default {
  name: "FloorList",
  data() {
    return {
        floorList: [],
        value:"",
    };
  },
  components: {
    Screen,
    List
  },
  created() {
    this.getfloorSwiper();
  },
  methods: {
    getfloorSwiper() {
      getfloorSwiper().then((res) => {
        console.log(res);
        this.floorList = res;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.floorList {
    padding: 0.1rem;
    // padding-top: 0.64rem;
    .list{
        margin-bottom: 0.1rem;
    }
}
</style>