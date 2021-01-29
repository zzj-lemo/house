<template>
  <div class="houseSelection">
    <div class="title">选房助手</div>
    <div class="bottom">
      <div class="box">
        <div class="problem">你想住哪里</div>
        <select>
          <option>悉尼</option>
          <option>堪培拉</option>
          <option>多伦多</option>
        </select>
      </div>
      <div class="flex">
        <div class="box">
          <div class="problem">你想住多大的房子</div>
          <select>
            <option>一室0厅</option>
            <option>一室一厅</option>
            <option>二室一厅</option>
            <option>二室二厅</option>
            <option>三室二厅</option>
            <option>别墅</option>
            <option>独栋</option>
          </select>
        </div>
        <div class="box">
          <div class="problem">你的预算是多少</div>
          <select>
            <option>10-50万</option>
            <option>51-100万</option>
            <option>101-300万</option>
            <option>300万+</option>
          </select>
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
export default {
  name: "HouseSelection",
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
  }
  .bottom {
    padding: 10px;

    .box {
      padding: 10px 0;
      select {
        width: 150px;
        height: 34px;
        font-size: 14px;
        border: 1px solid #bbb;
        outline: none;
        border-radius: 5px;
        padding: 0 5px;
        margin-top: 5px;
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