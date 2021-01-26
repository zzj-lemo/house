<template>
  <div class="head">
    <div class="return" @click="returnLevel()">
      {{ $t("head_footer.return") }}
    </div>
    <div class="right">
      <span class="collection" @click="goCollection()">{{ $t("head_footer.collection") }}</span>
      <span class="share" @click="goShare()">{{ $t("head_footer.share") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  methods: {
    returnLevel() {
      this.$router.go(-1);
    },
    goCollection() {
      this.$router.push("/collection");
    },
    goShare() {
      this.$router.push("/share");
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  position: fixed;
  display: flex;
  z-index: 2;
  justify-content: space-between;
  padding: 0.1rem;
  background-color: #fff;

  .return {
    width: 0.6rem;
    height: 0.3rem;
    line-height: 0.3rem;
    border-radius: 0.06rem;
    color: #111;
    font-size: 0.14rem;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 100);
  }
  .right {
    span {
      @extend .return;
      display: inline-block;
    }
    .collection {
      margin-right: 0.1rem;
    }
  }
}
</style>