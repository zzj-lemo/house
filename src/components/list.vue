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
    margin-right: 0.2rem;
    width: 1.5rem;
    height: 1rem;
  }
  .content {
    div {
      margin-bottom: 0.1rem;
    }

    .name {
      font-size: 0.2rem;
      font-weight: bold;
      color: #111;
    }
    .price {
        font-size: .18rem;
        color: #FD5845;
    }
    .address {
        font-size: .14rem;
    }
    .time {
      font-size: 0.12rem;
      font-weight: bold;
      color: #111;
    }
  }
}
</style>