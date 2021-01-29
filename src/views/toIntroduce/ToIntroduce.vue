<template>
  <div class="toIntroduce">
    <floor-head></floor-head>
    <div class="content">
      <h2>转介绍登记信息(当前用户名）</h2>
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
          <span>房源/楼盘</span>
          <screen></screen>
        </div>
        <div class="option">
          <select>
            <option>楼盘清单</option>
            <option>航城壶号</option>
            <option>华樾国际</option>
          </select>
        </div>
        <button class="submit">确定介绍</button>
        <div class="agree">
          <input type="checkbox" id="agree" />
          <label for="agree">允许平台经纪致电联系</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FloorHead from "../../components/head.vue";
import Screen from "../../components/screen.vue";

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
    Screen,
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
    padding: 10px;
    h2 {
      font-size: 24px;
      text-align: center;
      padding-top: 50px;
      margin-bottom: 30px;
      font-weight: normal;
    }
    .form {
      padding: 0 20px;
      .form_con {
        margin-bottom: 20px;
        span {
          font-size: 20px;
        }
        input {
          width: 200px;
          height: 30px;
          font-size: 14px;
          border: 1px solid #bbb;
          padding: 0 10px;
        }
        /deep/.van-dropdown-menu__bar {
          box-shadow: none;
        }
      }

      .option {
        text-align: center;
        select {
          width: 224px;
          height: 30px;
          font-size: 14px;
          border: 1px solid #bbb;
          outline: none;
          border-radius: 5px;
          option {
            width: 100%;
          }
        }
      }
      .submit {
        width: 315px;
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
          vertical-align: middle;
        }
      }
    }
  }
}
</style>