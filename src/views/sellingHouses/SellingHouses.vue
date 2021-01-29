<template>
  <div class="sellingHouses">
    <floor-head></floor-head>
    <div class="content">
      <div class="swiper">在线卖房</div>
      <div class="form">
        <h2>信息录入</h2>
        <div class="form_con">
          <span>城市：</span>
          <select>
            <option>悉尼</option>
            <option>堪培拉</option>
            <option>多伦多</option>
          </select>
        </div>
        <div class="form_con">
          <span>小区名称：</span>
          <select>
            <option>请选择</option>
          </select>
        </div>
        <div class="form_con">
          <span>门牌号：</span>
          <select>
            <option>请选择</option>
          </select>
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

export default {
  name: "sellingHouses",
  components: {
    FloorHead,
  },
};
</script>

<style lang="scss" scoped>
.sellingHouses {
  .content {
    padding: 0.1rem;

    h2 {
      font-size: 0.24rem;
      padding-top: 0.5rem;
      margin-bottom: 0.3rem;
    }
    .form {
      padding: 0 0.2rem;
      .form_con {
        margin-bottom: 0.2rem;
        span {
          font-size: 0.2rem;
          width: 35%;
          display: inline-block;
        }
        input {
          width: 65%;
          height: 0.3rem;
          font-size: 0.14rem;
          border: 1px solid #bbb;
          padding: 0 0.1rem;
        }
        /deep/.van-dropdown-menu__bar {
          box-shadow: none;
        }
        select {
          width: 65%;
          height: 0.34rem;
          font-size: 0.14rem;
          border: 1px solid #bbb;
          outline: none;
          border-radius: 0.05rem;
          padding: 0 0.05rem;
        }
      }
    }

    .submit {
      width: 100%;
      height: 0.44rem;
      line-height: 0.44rem;
      border-radius: 0.04rem;
      background-color: #e61713;
      color: #fff;
      font-size: 16px;
      text-align: center;
      border: none;
      margin: 0 auto;
      display: block;
      margin-top: 0.3rem;
      margin-bottom: 0.2rem;
    }
  }
}
</style>