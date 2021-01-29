<template>
  <div class="houseDetails">
    <floor-head></floor-head>
    <img :src="houseDetail.image" alt="户型图" class="banner" />
    <div class="content">
      <h2 class="name">{{ houseDetail.name }}</h2>
      <div class="price">
        <span class="left">{{ houseDetail.price }}</span>
        <div class="right">
          <span class="contrast" @click="goPriceComparison()">比价</span>
          <span class="forward" @click="goToIntroduce()">转</span>
        </div>
      </div>
      <div class="list">
        <div class="list_con">{{ houseDetail.houseType }}</div>
        <div class="list_con">{{ houseDetail.area }}</div>
        <div class="list_con">{{ houseDetail.direction }}</div>
      </div>
      <div class="address">地址：{{ houseDetail.address }}</div>
      <div class="title">
        <h3>户型实拍</h3>
        <span class="more">查看更多></span>
      </div>
      <real-shot :list="list"></real-shot>
    </div>
  </div>
</template>

<script>
import FloorHead from "../../components/head.vue";
import FloorFooter from "../../components/footer.vue";
import RealShot from "./children/RealShot.vue";
import { getHouseDetails, getRealShot } from "../../network/houseDetails";

export default {
  name: "HouseDetail",
  data() {
    return {
      houseDetail: {},
      list: [],
    };
  },
  components: {
    FloorHead,
    FloorFooter,
    RealShot,
  },
  created() {
    this.getHouseDetails();
    this.getRealShot();
  },
  methods: {
    getHouseDetails() {
      getHouseDetails().then((res) => {
        console.log(res);
        this.houseDetail = res;
      });
    },
    getRealShot() {
      getRealShot().then((res) => {
        console.log(res);
        this.list = res;
      });
    },
    goPriceComparison() {
      this.$router.push("/priceComparison");
    },
    goToIntroduce() {
      this.$router.push("/toIntroduce");
    },
  },
};
</script>

<style lang="scss" scoped>
.houseDetails {
  .head {
    background-color: transparent;
  }
  .banner {
    width: 100%;
  }
  .content {
    padding: 20px;

    .name {
      font-size: 18px;
    }
    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      .left {
        color: #f20505;
        font-size: 14px;
      }
      .right {
        .contrast {
          width: 40px;
          height: 30px;
          line-height: 30px;
          border-radius: 4px;
          font-size: 14px;
          text-align: center;
          border: 1px solid rgba(187, 187, 187, 100);
          display: inline-block;
          margin-right: 10px;
        }
        .forward {
          @extend .contrast;
          font-size: 24px;
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
          margin-right: 0;
          transform: rotate(30deg);
        }
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 10px;
      h3 {
        font-size: 18px;
      }
      .more {
        font-size: 14px;
        color: #9f9b9b;
      }
    }
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 15px;

      .list_con {
        width: 29%;
        height: 70px;
        line-height: 70px;
        text-align: center;
        border: 1px solid #bbb;
        font-size: 14px;
      }
    }
    .address {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
}
</style>