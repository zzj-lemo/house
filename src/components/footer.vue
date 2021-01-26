<template>
  <div class="contact">
    <div class="left">{{ $t("head_footer.online") }}</div>
    <div class="middle">{{ $t("head_footer.appointment") }}</div>
    <div class="right">
      <a href="tel:#">{{ $t("head_footer.phone") }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  methods: {},
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  position: fixed;
  display: flex;
  z-index: 2;
  justify-content: space-between;
  bottom: 0;
  align-items: flex-end;
  padding: 0.2rem;
  background-color: #fff;

  .left {
    width: 1.23rem;
    height: 0.5rem;
    line-height: 0.5rem;
    border-radius: 0.04rem;
    background-color: #39c48b;
    color: rgba(255, 255, 255, 100);
    font-size: 0.16rem;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 100);
  }
  .middle {
    @extend .left;
    width: 0.57rem;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #df4848;
  }
  .right {
    @extend .left;
    background-color: #3071f5;
  }
}
</style>