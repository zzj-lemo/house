<template>
  <div class="list" @click="goList()">
    <img :src="list.image" />
    <div class="content">
      <div class="name">{{ list.name }}</div>
      <div class="price">{{ list.price }}</div>
      <div class="address">{{ list.address + "/建面" + list.area }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    goList() {
      this.$router.push("/floorDetails");
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;

  img {
    margin-right: 20px;
    width: 150px;
    height: 100px;
  }
  .content {
    div {
      margin-bottom: 10px;
    }

    .name {
      font-size: 20px;
      font-weight: bold;
      color: #111;
    }
    .price {
        font-size: 18px;
        color: #FD5845;
    }
    .address {
        font-size: 14px;
    }
    .time {
      font-size: 12px;
      font-weight: bold;
      color: #111;
    }
  }
}
</style>