<template>
  <div class="houseDetails">
    <floor-head></floor-head>
    <img :src="houseDetail.image" alt="户型图" />
    <div class="content">
      <h2 class="name">{{ houseDetail.name }}</h2>
      <div class="price">
        <span class="left">{{ houseDetail.price }}</span>
        <div class="right">
          <span class="contrast">比价</span>
          <span class="forward">转</span>
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
import { getHouseDetails,getRealShot } from "../../network/houseDetails";

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
  },
};
</script>

<style lang="scss" scoped>
.houseDetails {
  .head {
    background-color: transparent;
  }
  .content {
    padding: 0.2rem;

    .name {
      font-size: 0.18rem;
    }
    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.14rem;

      .left {
        color: #f20505;
      }
      .right {
        .contrast {
          width: 0.4rem;
          height: 0.3rem;
          line-height: 0.3rem;
          border-radius: 0.04rem;
          font-size: 0.14rem;
          text-align: center;
          border: 1px solid rgba(187, 187, 187, 100);
          display: inline-block;
          margin-right: 0.1rem;
        }
        .forward {
          @extend .contrast;
          font-size: 0.24rem;
          width: 0.4rem;
          height: 0.4rem;
          line-height: 0.4rem;
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
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
      h3 {
        font-size: 0.18rem;
      }
      .more {
        font-size: 0.14rem;
        color: #9F9B9B;
      }
    }
    .list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.1rem;
        margin-bottom: 0.15rem;

        .list_con {
            width: 29%;
            height: 0.7rem;
            line-height: 0.7rem;
            text-align: center;
            border: 1px solid #bbb;
        }
    }
    .address {
        font-size: .14rem;
        margin-bottom: 0.2rem;
    }
  }
}
</style>