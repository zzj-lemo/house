<template>
  <div class="floorDetail">
    <floor-head :class="{ navActive: scrollFlag }"></floor-head>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#333">
      <van-swipe-item v-for="(item, index) in floorDetail.image" :key="index">
        <img :src="item" alt="楼盘图" />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <h2 class="name">{{ floorDetail.name }}</h2>
      <div class="price">
        <span class="left">{{ floorDetail.price }}</span>
        <div class="right">
          <span class="contrast"  @click="goPriceComparison()">比价</span>
          <span class="forward"  @click="goToIntroduce()">转</span>
        </div>
      </div>
      <div class="title">
        <h3>基础信息</h3>
        <span class="more">更多详情></span>
      </div>
      <basic-info :floorDetail="floorDetail"></basic-info>
      <div class="title">
        <h3>主力户型</h3>
      </div>
      <house-type :houseTypeList="houseTypeList"></house-type>
      <div class="title">
        <h3>楼盘动态</h3>
      </div>
      <!-- <dynamic :floorDynamic="floorDynamic"></dynamic> -->
      <div class="title">
        <h3>周边配套</h3>
      </div>
      <periphery></periphery>
    </div>
    <floor-footer></floor-footer>
  </div>
</template>

<script>
import FloorHead from "../../components/head.vue";
import FloorFooter from "../../components/footer.vue";
import {
  getfloorDetail,
  getHouseType,
  getFloorDynamic,
} from "../../network/floorDetails";
import BasicInfo from "./children/BasicInfo.vue";
import HouseType from "./children/HouseType.vue";
import Dynamic from "./children/Dynamic.vue";
import Periphery from "./children/Periphery.vue";

export default {
  name: "FloorDetail",
  data() {
    return {
      scrollFlag: true,
      floorDetail: {},
      houseTypeList: [],
      floorDynamic: [],
    };
  },
  components: {
    FloorHead,
    FloorFooter,
    Periphery,
    Dynamic,
    HouseType,
    BasicInfo,
  },
  created() {
    this.getfloorDetail();
    this.getHouseType();
    this.getFloorDynamic();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    getfloorDetail() {
      getfloorDetail().then((res) => {
        console.log(res);
        this.floorDetail = res;
      });
    },
    getHouseType() {
      getHouseType().then((res) => {
        console.log(res);
        this.houseTypeList = res;
      });
    },
    getFloorDynamic() {
      getFloorDynamic().then((res) => {
        console.log(res);
        this.floorDynamic = res;
      });
    },
    handleScroll() {
      let _this = this;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      if (scrollTop < 200) {
        _this.scrollFlag = true;
      } else {
        _this.scrollFlag = false;
      }
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

<style lang="scss">
.navActive {
  background-color: transparent !important;
  .return {
    color: #fff !important;
  }
  .right span {
    color: #fff !important;
  }
}
</style>
<style lang="scss" scoped>
.floorDetail {
  padding-bottom: 1rem;

  .content {
    padding: 0.2rem;

    .name {
      font-size: 0.3rem;
    }
    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.2rem;

      .left {
        font-size: 0.28rem;
        color: #f20505;
      }
      .right {
        .contrast {
          width: 0.5rem;
          height: 0.36rem;
          line-height: 0.36rem;
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
          width: 0.48rem;
          height: 0.48rem;
          line-height: 0.48rem;
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
        font-size: 0.24rem;
      }
      .more {
        font-size: 0.14rem;
      }
    }
  }
}
</style>