<template>
  <div class="house_type">
    <div class="list" v-for="(item, index) in houseTypeList" :key="index" @click="goHouseDetails()">
      <img :src="item.image" alt="户型图" />
      <div class="area">{{ item.houseType + "  " + item.area }}</div>
      <div>{{ item.price }}</div>
      <div class="state">{{ item.state }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseType",
  props: {
    houseTypeList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goHouseDetails() {
      this.$router.push("/houseDetails");
    }
  }
};
</script>

<style lang="scss" scoped>
.house_type {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .list {
    width: 48%;
    img {
      width: 100%;
      margin-bottom: 10px;
    }
    div {
      margin-bottom: 10px;
      font-size: 14px;
    }
    .area {
      font-size: 16px;
      font-weight: bold;
    }
    .state {
      font-size: 12px;
      color: #fff;
      background-color: #4b63bf;
      display: inline;
      padding: 2px 5px;
    }
  }
}
</style>