<template>
  <div class="collection">
    <van-tabs>
      <van-tab title="楼盘">
        <div v-for="(item, index) in floorList" :key="index">
          <list :list="item"></list>
        </div>
      </van-tab>
      <van-tab title="户型">
        <div v-for="(item, index) in houseList" :key="index">
          <list :list="item"></list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import List from "../../components/list.vue";
import { getCollection } from "../../network/floorDetails";

export default {
  name: "Collection",
  data() {
    return {
      floorList: [],
      houseList: [],
    };
  },
  components: {
    List,
  },
  created() {
    this.getCollection();
  },
  methods: {
    getCollection() {
      getCollection().then((res) => {
        console.log(res);
        this.houseList = res.filter((item) => item.type == "house");
        this.floorList = res.filter((item) => item.type == "floor");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.collection {
  .list {
    margin-bottom: 0.1rem;
    
    /deep/.address {
      display: none;
    }
  }
  /deep/.van-tabs__nav {
    /deep/.van-tabs__line {
      display: none;
    }
    /deep/.van-tab {
      border: 1px solid rgba(224, 227, 234, 100);
      background-color: #f3f6f9;
      height: 0.4rem;
      line-height: 0.4rem;
    }
    /deep/.van-tab--active {
      color: #3894ff;
      background-color: #fff;
    }
  }
  /deep/.van-tabs__content {
    padding: 0.15rem 0.1rem;
  }
}
</style>