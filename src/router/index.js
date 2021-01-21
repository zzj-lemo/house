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
]

const router = new VueRouter({
  routes
})

export default router
