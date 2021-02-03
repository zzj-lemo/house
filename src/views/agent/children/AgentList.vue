<template>
  <div class="agentList">
    <div class="list" v-for="(item, index) in agentList" :key="index">
      <img :src="item.image" />
      <div class="middle">
        <div class="name">{{ item.name }}</div>
        <div class="people">
          {{ "服务" + item.service + "人 • 带看" + item.look + "人" }}
        </div>
      </div>
      <div class="right" @click="goChat()">
        <van-icon name="chat" color="#1989fa" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "agentList",
  props: {
    agentList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goList() {
      this.$router.push("/floorDetails");
    },
    goChat() {
      this.$router.push("/chat");
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #bbb;

  img {
    margin-right: 20px;
    width: 100px;
    height: 100px;
  }
  .middle {
    width: 60%;
    div {
      margin-bottom: 10px;
    }

    .name {
      font-size: 20px;
      color: #111;
    }
    .people {
      font-size: 18px;
    }
  }
  .right {
    width: 50px;
    height: 50px;
    background-color: #f4f8fe;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .van-icon-chat::before {
      font-size: 30px;
    }
  }
}
</style>