import Vue from 'vue'
import VueRouter from 'vue-router'
/*
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'
*/
const goods = () => import('../components/goods/goods.vue')
const ratings = () => import('../components/ratings/ratings.vue')
const seller = () => import('../components/seller/seller.vue')

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:"active",
  routes: [ // 配置多个路由
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/',
      redirect: '/goods'
    }
  ]
})
