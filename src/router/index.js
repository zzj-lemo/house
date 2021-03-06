import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 懒加载
const Home = () => import(/* webpackChunkName: "Home" */ "../views/home/Home.vue");
const Info = () => import(/* webpackChunkName: "Info" */ "../views/info/Info.vue");
const News = () => import(/* webpackChunkName: "News" */ "../views/news/News.vue");
const Collection = () => import(/* webpackChunkName: "Collection" */ "../views/collection/Collection.vue");
const My = () => import(/* webpackChunkName: "My" */ "../views/my/My.vue");
const FloorList = () => import(/* webpackChunkName: "floorList" */ "../views/floorList/FloorList.vue");
const FloorDetails = () => import(/* webpackChunkName: "floorDetails" */ "../views/floorDetails/FloorDetails.vue");
const HouseDetails = () => import(/* webpackChunkName: "HouseDetails" */ "../views/houseDetails/HouseDetails.vue");
const Share = () => import(/* webpackChunkName: "Share" */ "../views/share/Share.vue");
const PriceComparison = () => import(/* webpackChunkName: "PriceComparison" */ "../views/priceComparison/PriceComparison.vue");
const ToIntroduce = () => import(/* webpackChunkName: "ToIntroduce" */ "../views/toIntroduce/ToIntroduce.vue");
const Appointment = () => import(/* webpackChunkName: "Appointment" */ "../views/appointment/Appointment.vue");
const SellingHouses = () => import(/* webpackChunkName: "SellingHouses" */ "../views/sellingHouses/SellingHouses.vue");
const Agent = () => import(/* webpackChunkName: "Agent" */ "../views/agent/Agent.vue");
const Chat = () => import(/* webpackChunkName: "Chat" */ "../views/chat/Chat.vue");

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: "/home",
    // 指定的组件
    component: Home,
  },
  {
    path: "/info",
    component: Info,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/collection",
    component: Collection,
  },
  {
    path: "/my",
    component: My,
  },
  {
    path: "/floorList",
    component: FloorList,
  },
  {
    path: "/floorDetails",
    component: FloorDetails,
  },
  {
    path: "/houseDetails",
    component: HouseDetails,
  },
  {
    path: "/share",
    component: Share,
  },
  {
    path: "/priceComparison",
    component: PriceComparison,
  },
  {
    path: "/toIntroduce",
    component: ToIntroduce,
  },
  {
    path: "/appointment",
    component: Appointment,
  },
  {
    path: "/sellingHouses",
    component: SellingHouses,
  },
  {
    path: "/agent",
    component: Agent,
  },
  {
    path: "/chat",
    component: Chat,
  },
]

const router = new VueRouter({
  routes
})

export default router
