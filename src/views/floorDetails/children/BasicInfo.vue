<template>
  <div class="info">
    <div class="time">
      开盘<span>{{ floorDetail.time }}</span>
    </div>
    <div class="flex">
      <div class="time">
        户型<span>{{ floorDetail.houseType }}</span>
      </div>
      <div class="time">
        建面<span>{{ floorDetail.area }}</span>
      </div>
    </div>
    <div class="flex">
      <div class="time">
        地址<span>{{ floorDetail.address }}</span>
      </div>
      <van-icon name="location" color="#F20505" size="0.3rem" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicInfo",
  props: {
    floorDetail: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  .time {
    font-size: 0.18rem;
    color: #9f9b9b;
    margin-bottom: 0.1rem;

    span {
      color: #101010;
      font-size: 0.16rem;
      margin-left: 0.1rem;
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>