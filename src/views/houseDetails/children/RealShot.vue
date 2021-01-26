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
  name: "RecommendView",
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
    margin-top: 0.2rem;

    .left {
      margin-right: 0.1rem;
    }
    .content {
      .title {
        font-size: .16rem;
        margin-bottom: 0.1rem;
      }
      .people {
        img {
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 0.1rem;
        }

        span {
          font-size: .14rem;
          color: #999;
        }
      }
    }
  }
}
</style>