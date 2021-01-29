<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="content" @click='goList()'>
        <img :src="item.image"/>
        <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goList() {
      this.$router.push('/floorList');
    }
  }
};
</script>

<style lang="scss" scoped>
  .recommend{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    flex-wrap: wrap;

    .content{
      width: 19%;
      flex-shrink: 0;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 2px;
      padding: 6px;

      .title {
        font-size: 14px;
        margin-top: 4px;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
</style>