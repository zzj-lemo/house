<template>
  <div class="priceComparison">
    <floor-head></floor-head>
    <div class="content">
      <h2>比价</h2>
      <div class="flex">
        <div class="title">
          <div class="houseType">户型</div>
          <div class="price">价格</div>
          <div class="type">类型</div>
          <div class="area">大小</div>
          <div class="direction">朝向</div>
          <div class="address">地址</div>
        </div>
        <div class="house" v-for="(item,index) in priceComparison" :key="index">
          <img :src="item.image" alt="户型图">
          <div class="houseType">{{item.houseType}}</div>
          <div class="price">{{item.price}}</div>
          <div class="type">{{item.type}}</div>
          <div class="area">{{item.area}}</div>
          <div class="direction">{{item.direction}}</div>
          <div class="address">{{item.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FloorHead from "../../components/head.vue";
import { getPriceComparison } from "../../network/floorDetails";

export default {
  name: "PriceComparison",
  data() {
    return {
      priceComparison: [],
    };
  },
  components: {
    FloorHead,
  },
  created() {
    this.getPriceComparison();
  },
  methods: {
    getPriceComparison() {
      getPriceComparison().then((res) => {
        console.log(res);
        this.priceComparison = res;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.priceComparison {
  /deep/.right {
    display: none;
  }
  .content {
    padding: 0.1rem;
    h2 {
      font-size: 0.24rem;
      text-align: center;
      padding-top: 0.5rem;
      margin-bottom: 0.3rem;
    }
    .flex {
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;

      .title {
        margin-right: 0.2rem;

        div {
          margin-top: 0.15rem;
        }
      }
      .house {
        margin-right: 0.2rem;

        div {
          margin-top: 0.15rem;
        }
      }
    }
  }
}
</style>