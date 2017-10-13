import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import VueScroller from 'vue-scroller'
import moment from 'moment'
// import {format} from 'date-fns'
import app from './app.vue'
import router from './router'
import "./common/stylus/index.styl"

import './mock/mockServer'
import loading from './common/img/loading.gif'

//声明使用插件
Vue.use(VueResource)  // 内部给vm和组件对象添加一个属性$http(发送ajax请求)
Vue.use(VueLazyload, {
  loading
})
Vue.use(VueScroller)

// 注册全局过滤器
Vue.filter('date-string', function (value) { // 被处理的时间值
 return moment(value).format('YYYY-MM-DD HH:mm:ss')
 // return format(value, 'YYYY-MM-DD HH:mm:ss')
})


new Vue({
  el: '#app',
  render: h => h(app),
  router  // 配置路由器
})
