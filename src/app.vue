<template>
  <div>
    <ele-header :seller="seller"></ele-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <!--生成路由链接的a标签-->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!--用来标识显示当前路由组件的标签-->
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import header from './components/header/header.vue'

  export default {

    data () {
      return {
        seller: {}
      }
    },

    mounted () {
      // 使用vue-resource发送ajax请求express提供的接口
      /*this.$http.get('/api/seller')
        .then(response => {
          const result = response.body
          console.log('vue-resource express', result)
        })*/
      // 使用axios发送ajax请求mockjs提供的接口
      axios.get('/api2/seller')
        .then(response => {
          const result = response.data
          console.log('axios mockjs', result)
          if(result.code===0) {
            this.seller = result.data
          }
        })
    },

    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display flex
    height 40px
    line-height 40px
    text-align center
    font-size 14px
    border-1px(rgba(7,17,27,.1))
    .tab-item
      width 0
      flex 1
      & > a
        display block
        text-decoration none
        color rgb(77,85,93)
        &.active
          color: rgb(240,20,20)
</style>
