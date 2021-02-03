<template>
  <div class="sellingHouses">
    <floor-head></floor-head>
    <div class="content">
      <div class="swiper">在线卖房</div>
      <div class="form">
        <h2>信息录入</h2>
        <div class="form_con">
          <span>城市：</span>
          <select-box :tableData="tableData1"></select-box>
        </div>
        <div class="form_con">
          <span>小区名称：</span>
          <select-box :tableData="tableData2"></select-box>
        </div>
        <div class="form_con">
          <span>门牌号：</span>
          <select-box :tableData="tableData3"></select-box>
        </div>
        <div class="form_con">
          <span>期望售价：</span>
          <input type="email" placeholder="请输入" />
        </div>
        <div class="form_con">
          <span>称呼：</span>
          <input type="email" placeholder="请输入" />
        </div>
        <div class="form_con">
          <span>联系方式：</span>
          <input type="email" placeholder="请输入" />
        </div>
      </div>
      <h2>卖房流程</h2>
      <button class="submit">确认发布</button>
    </div>
  </div>
</template>

<script>
import FloorHead from "../../components/head.vue";
import SelectBox from "../../components/selectBox.vue";

export default {
  name: "sellingHouses",
  data() {
    return {
      tableData1: ["悉尼", "堪培拉", "多伦多"],
      tableData2: ["请选择"],
      tableData3: ["请选择"],
    };
  },
  components: {
    FloorHead,
    SelectBox,
  },
};
</script>

<style lang="scss" scoped>
.sellingHouses {
  .content {
    padding: 10px;

    h2 {
      font-size: 24px;
      padding-top: 50px;
      margin-bottom: 30px;
    }
    .form {
      padding: 0 20px;
      .form_con {
        display: flex;
        margin-bottom: 20px;
        span {
          font-size: 20px;
          width: 35%;
          display: inline-block;
        }
        input {
          width: 65%;
          height: 30px;
          font-size: 14px;
          border: 1px solid #bbb;
          padding: 0 10px;
        }
        /deep/.van-dropdown-menu__bar {
          box-shadow: none;
        }
        
      }
    }

    .submit {
      width: 100%;
      height: 44px;
      line-height: 44px;
      border-radius: 4px;
      background-color: #e61713;
      color: #fff;
      font-size: 16px;
      text-align: center;
      border: none;
      margin: 0 auto;
      display: block;
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
}
</style>