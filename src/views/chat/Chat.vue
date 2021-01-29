<template>
  <div class="chat">
    <floor-head></floor-head>
    <div class="content">
      <div class="people">
        <img src="../../assets/img/friend.png" alt="头像" />
        <span>官方客服/ai客服</span>
      </div>
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <chat-item
            v-for="item in chatItems"
            :key="item.message"
            :type="item.type"
            :message="item.message"
            :timestamp="item.timestamp"
            :from="item.from"
          ></chat-item>
        </div>
      </div>
      <div class="send">
        <input type="text" placeholder="单行输入" v-model="value" />
        <button @click="sendNews()">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import ChatItem from "./children/ChatItem.vue";
import FloorHead from "../../components/head.vue";

BScroll.use(MouseWheel);

export default {
  name: "chat",
  data() {
    return {
      value: "",
      chatItems: [
        {
          type: 1,
          message: "山不在高，有仙则名。",
          from: 1,
          timestamp: new Date(),
        },
        {
          type: 1,
          message: "水不在深，有龙则灵。",
          from: 1,
          timestamp: new Date(),
        },
        {
          type: 1,
          message: "做紧d咩嘢?",
          from: 2,
          timestamp: new Date(),
        },
        {
          type: 1,
          message: "？？？",
          from: 2,
          timestamp: new Date(),
        },
      ],
      bs: null,
    };
  },
  components: {
    ChatItem,
    FloorHead,
  },

  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    // better-scroll的代码
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollY: true, // 上下滚动
        click: true, // 开启点击事件
        startY:
          document.querySelector(".scroll-wrapper").clientHeight -
          this.$refs.scroll.scrollHeight +
          5, // 初始高度
        mouseWheel: true, // 鼠标滚动
        probeType: 2, // listening scroll hook
      });
    },
    sendNews() {
      console.log(this.value);
      this.chatItems.push({
        type: 1,
        message: this.value,
        from: 1,
        timestamp: new Date(),
      });
      this.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.chat {
  // font-size: 14px;
  /deep/.right {
    display: none;
  }
  .content {
    padding: 10px;
    .scroll-wrapper {
      height: calc(100% - 160px); // 留一些空间给 打字的地方 和 header
      overflow: hidden; // 非常之关键
    }
    .people {
      padding-top: 50px;
      border-bottom: 1px solid #bbb;
      padding-bottom: 15px;
      margin-bottom: 10px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
      }
      span {
        font-size: 24px;
        line-height: 45px;
      }
    }
    .send {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;

      input {
        width: 80%;
        height: 50px;
        line-height: 50px;
        border: 1px solid #bbb;
        padding: 10px;
      }
      button {
        width: 20%;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        border: 1px solid #bbb;
        background-color: #fff;
      }
    }
  }
}
</style>