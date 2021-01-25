import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import {
  Button,
  Icon,
  TreeSelect,
  DropdownMenu,
  DropdownItem,
  RadioGroup,
  Radio,
  Slider,
  Search,
  Swipe,
  SwipeItem,
} from "vant";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBSoV0qBU9OKKxEgBYuBGGVCzocBPjbegs",
    libraries: "places",
    region: "VI", // 这个地区自己定
    language: "en", // 这个语言自己定
  },
  installComponents: true,
});
require("./mock/mock");

Vue.use(VueI18n)
  .use(Button)
  .use(Icon)
  .use(TreeSelect)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(RadioGroup)
  .use(Radio)
  .use(Slider)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem);

const i18n = new VueI18n({
  locale: "chs", // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
  messages: {
    chs: require("./assets/languages/chs.json"), // 本地资源文件，我这里配2个语言，中文&英文，src下根据个人情况放置
    en: require("./assets/languages/en.json"),
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
