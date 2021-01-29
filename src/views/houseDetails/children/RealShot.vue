<template>
  <div class="realShot">
    <div class="list" v-for="(item, index) in list" :key="index">
      <img :src="item.image" alt="实拍图" class="left" />
      <div class="content">
        <div class="title">{{ item.title }}</div>
        <div class="people">
          <img :src="item.icon" alt="头像" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RealShot",
  props: {
    list: {
      type: Array,
      default: () => [],
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
.realShot {
  .list {
    display: flex;
    margin-top: 20px;

    .left {
      margin-right: 10px;
      width: 100px;
      height: 70px;
    }
    .content {
      .title {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .people {
        img {
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 10px;
          width: 20px;
          height: 20px;
        }

        span {
          font-size: 14px;
          color: #999;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>