<template>
  <div class="floorList">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>

export default {
  name: "floorList",

  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.floorList {
  padding: 0.08rem;
  h2 {
    color: #f20505;
    font-size: 0.24rem;
  }
}
</style>
