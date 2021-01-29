<template>
  <div class="contact">
    <div class="left" @click="goChat()">{{ $t("head_footer.online") }}</div>
    <div class="middle" @click="goAppointment()">
      {{ $t("head_footer.appointment") }}
    </div>
    <div class="right">
      <a href="tel:#">{{ $t("head_footer.phone") }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "floorFooter",
  methods: {
    goAppointment() {
      this.$router.push("/appointment");
    },
    goChat() {
      this.$router.push("/chat");
    },
  },
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
  padding: 20px;
  background-color: #fff;

  .left {
    width: 123px;
    height: 50px;
    line-height: 50px;
    border-radius: 4px;
    background-color: #39c48b;
    color: rgba(255, 255, 255, 100);
    font-size: 16px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 100);
  }
  .middle {
    @extend .left;
    width: 57px;
    height: 60px;
    line-height: 60px;
    background-color: #df4848;
  }
  .right {
    @extend .left;
    background-color: #3071f5;
  }
}
</style>