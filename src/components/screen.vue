<template>
  <div class="filterbar">
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item title="选择区域" ref="item">
        <div class="filterbar-content">
          <van-tree-select
            :items="items"
            :active-id.sync="activeIds"
            :main-active-index.sync="activeIndex"
          />
        </div>
        <div class="button-div">
          <van-button plain type="default" class="reset">重置</van-button>
          <van-button type="info" class="determine">确定</van-button>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="房屋价格" ref="item">
        <div class="money">
          <span>房屋价格</span>
          <div>
            <div class="radio-label">
              <input type="radio" id="money1" name="money" />
              <label for="money1">$</label>
            </div>
            <div class="radio-label">
              <input type="radio" id="money2" name="money" />
              <label for="money2">￥</label>
            </div>
          </div>
        </div>
        <div class="height">
          <input type="number" placeholder="最低价（万）" />
          <span>——</span>
          <input type="number" placeholder="最高价（万）" />
        </div>
        <div class="menu">
          <div class="radio-label">
            <input type="checkbox" id="money3" />
            <label for="money3">50万以内</label>
          </div>
          <div class="radio-label">
            <input type="checkbox" id="money4" />
            <label for="money4">50-80万</label>
          </div>
          <div class="radio-label">
            <input type="checkbox" id="money4" />
            <label for="money4">80-110万</label>
          </div>
          <div class="radio-label">
            <input type="checkbox" id="money4" />
            <label for="money4">110-150万</label>
          </div>
          <div class="radio-label">
            <input type="checkbox" id="money4" />
            <label for="money4">150-200万</label>
          </div>
          <div class="radio-label">
            <input type="checkbox" id="money4" />
            <label for="money4">200万以上</label>
          </div>
        </div>
        <div class="button-div">
          <van-button plain type="default" class="reset">重置</van-button>
          <van-button type="info" class="determine">确定</van-button>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="筛选" ref="item">
        <div class="house">
          <span>房屋类型</span>
          <div class="content">
            <div class="radio-label">
              <input type="radio" id="house1" name="house" />
              <label for="house1">独栋</label>
            </div>
            <div class="radio-label">
              <input type="radio" id="house2" name="house" />
              <label for="house2">联排</label>
            </div>
            <div class="radio-label">
              <input type="radio" id="house3" name="house" />
              <label for="house3">公寓</label>
            </div>
            <div class="radio-label">
              <input type="radio" id="house4" name="house" />
              <label for="house4">多单元</label>
            </div>
          </div>
          <div v-for="(item, index) in roomNum" :key="index" class="room">
            <span>{{ item }}</span>
            <div class="number">
              <div class="slider">
                <van-slider
                  v-model="value1"
                  range
                  @change="onChange"
                  :min="0"
                  :max="5"
                />
              </div>
              <div class="num">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5+</span>
              </div>
            </div>
          </div>
        </div>
        <div class="button-div">
          <van-button plain type="default" class="reset">重置</van-button>
          <van-button type="info" class="determine">确定</van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roomNum: ["卧室数量", "卫浴数量", "车位/车库"],
      value: 0,
      radio: "1",
      activeIds: [],
      activeIndex: 0,
      items: [
        {
          // 导航名称
          text: "推荐城市",
          // 导航节点额外类名
          className: "my-class",
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "全部",
              // id，作为匹配选中状态的标识符
              id: 1,
            },
            {
              text: "纽卡斯尔",
              id: 2,
            },
            {
              text: "悉尼",
              id: 7,
            },
          ],
        },
        {
          // 导航名称
          text: "维多利亚",
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "墨尔本",
              // id，作为匹配选中状态的标识符
              id: 3,
            },
            {
              text: "吉朗",
              id: 4,
            },
          ],
        },
        {
          // 导航名称
          text: "昆士兰",
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "黄金海岸",
              // id，作为匹配选中状态的标识符
              id: 5,
            },
            {
              text: "凯恩斯",
              id: 6,
            },
          ],
        },
      ],
      // 双滑块模式时，值必须是数组
      value1: [0, 5],
    };
  },

  computed: {},

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    onChange(value) {
      Toast("当前值：" + value);
    },
  },
};
</script>
<style lang="scss" scoped>
.filterbar {
  width: 100%;
  background-color: #fff;
  height: 0.54rem;

  /deep/.van-dropdown-item__content {
    max-height: 100%;
  }

  .filterbar-title {
    width: 100%;
    height: 0.54rem;
    .title-ul {
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 0.54rem;

      .current {
        span {
          color: #1989fa;
        }
      }
    }
    ul .title-li {
      width: 24%;
      text-align: center;
      font-size: 0.9em;

      .filterbar-content {
        position: absolute;
        left: 0;
        width: 100%;
        padding: 0.5em;
        background-color: #fff;
        z-index: 2;
        top: 0.54rem;
      }
      .content-ul li {
        text-align: left;
        color: #111;
        font-weight: 400;
        padding-left: 1.5em;
        padding-top: 0.7em;
      }
      .content-ul .current {
        color: #1989fa;
      }
    }
    .content-ul .van-icon {
      float: right;
      margin-right: 2.5em;
    }
    ul .van-icon {
      vertical-align: middle;
    }
  }
}

.van-sidebar-item--select::before {
  display: none;
}

.van-sidebar-item--select {
  color: #1989fa;
}
.van-tree-select__item--active {
  color: #1989fa;
}

.button-div {
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
  .reset {
    width: 40%;
    border-radius: 0.08rem;
  }
  .determine {
    width: 57%;
    border-radius: 0.08rem;
  }
}
.money {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem;
  /* 喜欢的颜色 */
  .radio-label,
  .radio-check {
    display: inline-block;
    position: relative;
  }
  .radio-label input {
    opacity: 0;
    width: 1px;
    height: 1px;
  }
  .radio-label label {
    display: inline-block;
    min-width: 0.5rem;
    height: 0.24rem;
    line-height: 0.24rem;
    text-align: center;
    border-radius: 5px;
    color: #111;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .radio-label input:checked {
    opacity: 0;
    width: 1px;
    height: 1px;
  }
  .radio-label input:checked + label {
    color: #fff;
    background-color: #1989fa;
  }
  .iconq {
    font-size: 25px;
    position: absolute;
    right: -11px;
    bottom: -11px;
    z-index: 1;
    opacity: 0;
  }
}
.height {
  @extend .money;
  input[type="number"] {
    width: 1.5rem;
    height: 0.3rem;
    line-height: 0.24rem;
    padding: 0 0.1rem;
  }
}
.menu {
  @extend .money;
  flex-wrap: wrap;
  padding-bottom: 0;

  .radio-label label {
    min-width: 1rem;
    height: 0.3rem;
    line-height: 0.3rem;
    margin-bottom: 0.2rem;
  }
}
.house {
  @extend .menu;
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 0.1rem;

    .radio-label label {
      min-width: 0.8rem;
      height: 0.3rem;
      line-height: 0.3rem;
    }
  }

  .room {
    width: 100%;
    margin-bottom: 0.2rem;
    .number {
      width: 100%;
      .slider {
        padding: 0.2rem;
        width: 100%;
      }
      .num {
        display: flex;
        justify-content: space-between;
        padding: 0 0.2rem;
      }
    }
  }
}
</style>