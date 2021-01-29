<template>
  <div class="share">
    <floor-head></floor-head>
    <div class="content">
      <h2>分享</h2>
      <div class="flex">
        <div class="box" v-for="(item, index) in shareList" :key="index">
          <img :src="item.image" alt="图标" />
          <span>{{ item.text }}</span>
        </div>
      </div>
      <div class="button">
        <span>转</span>
        我要转介绍
      </div>
    </div>
  </div>
</template>

<script>
import FloorHead from "../../components/head.vue";

export default {
  name: "Share",
  data() {
    return {
      shareList: [
        { image: require("../../assets/img/WeChat.png"), text: "微信" },
        { image: require("../../assets/img/friend.png"), text: "朋友圈" },
        { image: require("../../assets/img/QQ.png"), text: "QQ" },
        { image: require("../../assets/img/micro-blog.png"), text: "微博" },
        { image: require("../../assets/img/Facebook.png"), text: "Facebook" },
        { image: require("../../assets/img/twitter.png"), text: "Twitter" },
        { image: require("../../assets/img/mail.png"), text: "邮件" },
        { image: require("../../assets/img/news.png"), text: "短消息" },
      ],
    };
  },
  components: {
    FloorHead,
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.share {
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
    }
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25%;
        margin-bottom: 20px;
        img {
          width: 48px;
          height: 48px;
        }
        span {
          margin-top: 6px;
          font-size: 14px;
        }
      }
    }
    .button {
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      text-align: center;
      border: 1px solid #bbb;

      span {
        width: 38px;
        height: 38px;
        line-height: 38px;
        font-size: 24px;
        text-align: center;
        border: 1px solid #bbb;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        transform: rotate(30deg);
        margin-right: 10px;
      }
    }
  }
}
</style>