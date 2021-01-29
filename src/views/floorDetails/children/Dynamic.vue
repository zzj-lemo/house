<template>
  <div class="dynamic">
    <div class="list" v-for="(item, index) in floorDynamic" :key="index">
      <div class="article">{{ item.article }}</div>
      <div class="flex">
        <span class="state">{{ item.state }}</span>
        <span class="time">{{ item.time }}</span>
      </div>
    </div>
    <div class="subscribe">+ 订阅销控和动态</div>
  </div>
</template>

<script>
export default {
  name: "Dynamic",
  props: {
    floorDynamic: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.dynamic {
  .list {
    padding: 15px 0;
    border-bottom: 1px solid #eee;
    .article {
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .state {
        font-size: 12px;
        color: #e5a674;
        background-color: #fbf6e0;
        padding: 2px;
      }
      .time {
        font-size: 12px;
        color: #aaa;
      }
    }
  }
  .list:first-child {
    padding-top: 0;
  }
  .list:nth-last-child(2) {
    border-bottom: none;
  }
  .subscribe {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #577dd9;
    background-color: #f4f7ff;
    font-size: 16px;
    text-align: center;
    border-radius: 5px;
  }
}
</style>