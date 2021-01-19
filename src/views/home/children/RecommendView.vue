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
      this.$router.push('/info');
    }
  }
};
</script>

<style lang="scss" scoped>
  .recommend{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .06rem;
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
      margin-bottom: 0.02rem;
      padding: .06rem;

      .title {
        font-size: .14rem;
        color: #fff;
        margin-top: .04rem;
      }
    }
  }
  .recommend .content:nth-child(4n+1) {
    background-color: #39C48B;
  }
  .recommend .content:nth-child(4n+2) {
    background-color: #098CFD;
  }
  .recommend .content:nth-child(4n+3) {
    background-color: #FD6D09;
  }
  .recommend .content:nth-child(4n+4) {
    background-color: #FDCC09;
  }
</style>