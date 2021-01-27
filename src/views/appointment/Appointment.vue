<template>
  <div class="toIntroduce">
    <floor-head></floor-head>
    <div class="content">
      <h2>看房预约信息</h2>
      <div class="form">
        <div class="form_con">
          <span>名字：</span>
          <input type="text" placeholder="被介绍人姓名" />
        </div>
        <div class="form_con">
          <span>手机：</span>
          <input type="tel" placeholder="被介绍人手机" />
        </div>
        <div class="form_con">
          <span>邮箱：</span>
          <input type="email" placeholder="被介绍人邮箱" />
        </div>
        <div class="form_con">
          <span>预约时间：</span>
          <input type="text" :value="date" @click="show = true" />
          <van-calendar v-model="show" @confirm="onConfirm" color="#1989fa" />
        </div>
        <div class="form_con">
          <span class="margin">房源/楼盘：</span>
          <input type="text" placeholder="发起预约时，自动选择" />
        </div>
        <button class="submit">确定介绍</button>
        <div class="agree">
          <input type="checkbox" id="agree"/>
          <label for="agree">允许平台经纪致电联系</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FloorHead from "../../components/head.vue";

export default {
  name: "ToIntroduce",
  data() {
    return {
      ToIntroduce: [],
      date: "",
      show: false,
    };
  },
  components: {
    FloorHead,
  },
  created() {},
  methods: {
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
      console.log(this);
    },
  },
};
</script>

<style lang="scss" scoped>
.toIntroduce {
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
      font-weight: normal;
    }
    .form {
      padding: 0 0.2rem;
      .form_con {
        margin-bottom: 0.2rem;
        span {
          font-size: 0.2rem;
        }
        input {
          width: 2rem;
          height: 0.3rem;
          font-size: 0.14rem;
          border: 1px solid #bbb;
          padding: 0 0.1rem;
        }
        /deep/.van-dropdown-menu__bar {
          box-shadow: none;
        }
      }

      .submit {
        width: 3.15rem;
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
      .agree {
        padding-left: 0.2rem;
        input {
          vertical-align: middle;
        }
        label {
          font-size: 0.15rem;
          margin-left: 0.1rem;
        }
      }
    }
  }
}
</style>