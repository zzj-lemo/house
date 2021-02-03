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
      <van-icon name="location" color="#F20505" />
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
    font-size: 18px;
    color: #9f9b9b;
    margin-bottom: 10px;

    span {
      color: #101010;
      font-size: 16px;
      margin-left: 10px;
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;

    .van-icon-location::before {
      font-size: 30px;
    }
  }
}
</style>