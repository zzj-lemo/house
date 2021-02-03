<template>
  <div class="houseSelection">
    <div class="title">选房助手</div>
    <div class="bottom">
      <div class="box">
        <div class="problem">你想住哪里</div>
        <select-box :tableData="tableData1"></select-box>
      </div>
      <div class="flex">
        <div class="box">
          <div class="problem">你想住多大的房子</div>
          <select-box :tableData="tableData2"></select-box>
        </div>
        <div class="box">
          <div class="problem">你的预算是多少</div>
          <select-box :tableData="tableData3"></select-box>
        </div>
      </div>
      <div class="agree">
        <input type="checkbox" id="agree" />
        <label for="agree">允许专属经纪致电讲解</label>
      </div>
    </div>
  </div>
</template>

<script>
import SelectBox from "../../../components/selectBox.vue";
export default {
  name: "HouseSelection",
  data() {
    return {
      tableData1: ["悉尼", "堪培拉", "多伦多"],
      tableData2: ["一室0厅", "一室一厅", "二室一厅", "二室二厅", "三室二厅", "别墅", "独栋"],
      tableData3: ["10-50万", "51-100万", "101-300万", "300万+"],
    };
  },
  components: {
    SelectBox,
  },
};
</script>

<style lang="scss" scoped>
.houseSelection {
  border: 1px solid #ccc;

  .title {
    width: 100%;
    height: 45px;
    background-color: #f45a5a;
    font-size: 24px;
    line-height: 45px;
    padding: 0 20px;
    color: #fff;
  }
  .bottom {
    padding: 10px;

    .box {
      padding: 10px 0;
      .problem {
        margin-bottom: 5px;
      }
    }
    .flex {
      display: flex;
      justify-content: space-between;
    }
    .agree {
      padding-left: 20px;
      input {
        vertical-align: middle;
        width: 13px;
        height: 13px;
      }
      label {
        font-size: 15px;
        margin-left: 10px;
        color: #1989fa;
      }
    }
  }
}
</style>