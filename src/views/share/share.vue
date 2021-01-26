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
    padding: 0.1rem;
    h2 {
      font-size: 0.24rem;
      text-align: center;
      padding-top: 0.5rem;
      margin-bottom: 0.3rem;
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
        margin-bottom: 0.2rem;
        img {
          width: 0.48rem;
          height: 0.48rem;
        }
        span {
          margin-top: 0.06rem;
          font-size: 0.14rem;
        }
      }
    }
    .button {
      width: 100%;
      height: 0.44rem;
      line-height: 0.44rem;
      font-size: 0.14rem;
      text-align: center;
      border: 1px solid #bbb;

      span {
        width: .38rem;
        height: .38rem;
        line-height: .38rem;
        font-size: .24rem;
        text-align: center;
        border: 1px solid #bbb;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        transform: rotate(30deg);
        margin-right: 0.1rem;
      }
    }
  }
}
</style>