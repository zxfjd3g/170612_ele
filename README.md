# 1. day01
## 1). 搭建项目
    vue-cli(vue脚手架)
    vue: 基本库
    webpack: 打包工具
    es-lint: 代码检查工具
    ES6 + babel: es6和编译工具
    express: 运行开发时内存中打包的项目
    stylus stylus-loader
    vue-router
    
## 2). header静态组件
    移动端的布局
    图标字体
    flex布局
    1px边框问题
    stiky footer(粘粘布局)

# 2. day02
## 1). header动态组件
    1. mock数据
    	设计json数据结构
			结构 + 值
			结构: 类型 | 名称
			mock数据与真实数据之间结构要一致, 变化的只能是值
		提供mock接口
			express: 可以通过浏览器/编译方式请求, 但打包运行不能访问/只能提供静态数据
			mockjs: 只能编码请求,不能通过浏览器请求, 打包运行可以访问/可以提供动态数据
		ajax请求mock接口
			vue-resouce: 包装XMLHttpRequest, pomise风格, 主要用在vue1
			axios: 包装XMLHttpRequest, pomise风格, 浏览器/node都可以, vue2后基本都用axios
			fetch: 浏览器内置的, 不是包装XMLHttpRequest, 本身就是pomise风格, 但老版浏览中没有, 需要使用fetch.js来兼容 
    2. 动态显示数据
	    在data初始化状态: seller={}
		在created()中发送ajax请求, 异步获取数据并更新状态
		父组件: 状态数据通过props传递给子组件
		子组件: 声明接收属性, props配置
		模板展现数据
			{{}}
			v-for
			v-if
			v-show
			:class
			:xxx
    3. 交互
    	@click="xxx"
		methods: xxx()
		动画效果
			<transition name='xxx'>
			.xxx-enter-active, .xxx-leave-active: transition样式
			.xxx-enter, xxx-leave-to: 隐藏时的样式
    
## 2). star组件
	1. 组件的作用
		复用
		简化
	2. 编写使用组件的流程
		创建组件文件: xxx.vue
		定义好props配置: 确定组件接收哪些属性
		使用组件标签, 传入相应的属性
		完成组件内部的编码
			style
			template
			script
	3. 计算属性
## 3). goods组件
	1. 使用第三库better-scroll实现平滑滚动
		下载引入
		API文档
		样例
		使用
			new BScroll(domContainer, {...})
	2. 在界面更新后才处理
		this.$nextTick(function(){})
	3. 标识某个标签
		ref: 得到指定的标签对象

# 3. day03
## 1). goods组件
## 2). cartcontrol组件
## 3). shopcart组件
## 4). food组件















