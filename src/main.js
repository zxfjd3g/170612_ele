import Vue from 'vue'
import VueResource from 'vue-resource'
import moment from 'moment'
import app from './app.vue'
import router from './router'
import "./common/stylus/index.styl"

import './mock/mockServer'

//声明使用插件
Vue.use(VueResource)  // 内部给vm和组件对象添加一个属性$http(发送ajax请求)

// 注册全局过滤器
Vue.filter('date-string', function (value) { // 被处理的时间值
 return moment(value).format('YYYY-MM-DD HH:mm:ss')
})


new Vue({
  el: '#app',
  render: h => h(app),
  router  // 配置路由器
})
