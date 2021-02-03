<template>
  <div class="divInput" ref="box">
    <div class="input" @click="openValue">
      <input
        v-model="value"
        type="text"
        :placeholder="value"
        readonly="readonly"
      />
      <van-icon name="arrow-down" />
    </div>
    <div class="list" v-show="show">
      <ul>
        <li
          @click="getvalue(index, item)"
          v-for="(item, index) in tableData"
          :key="item.index"
          :class="index == active ? 'active' : ''"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectBox",
  data() {
    return {
      show: false,
      value: "",
      active: 0,
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    placeholder: "",
  },
  created() {
    this.value = this.tableData[0];
    document.addEventListener("click", (e) => {
      console.log(this.$refs.box.contains(e.target));
      if (!this.$refs.box.contains(e.target)) {
        this.show = false;
      }
    });
  },
  methods: {
    openValue() {
      this.show = !this.show;
    },
    getvalue(index, item) {
      this.value = item;
      this.show = false;
      this.active = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.divInput {
  position: relative;
}
ul li {
  list-style: none;
}
.input {
  width: 140px;
  height: 34px;
  line-height: 34px;
  position: relative;
  font-size: 14px;
  border: 1px solid #bbb;
  outline: none;
  border-radius: 5px;
  padding: 0 5px;
}
.input input {
  border: none;
  outline: none;
  width: 90%;
}
.input i {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}
.list {
  width: 140px;
  border: 1px solid #cccccc;
  overflow: hidden;
  position: absolute;
  top: 35px;
  background-color: #fff;
  z-index: 2;
  box-shadow: 0 0 5px 1px #ccc;
}
.list ul li {
  width: 100%;
  height: 30px;
  cursor: pointer;
  line-height: 30px;
  padding-left: 10px;
}
.list ul .active {
  background-color: #1989fa;
  color: #fff;
}
</style>