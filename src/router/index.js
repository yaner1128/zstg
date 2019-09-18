import Vue from 'vue'
import Router from 'vue-router'

//引入路由模块
import Home from '@/components/Home/Home.vue'
import Display from '@/components/Display/Display.vue'
import News from '@/components/News/News.vue'
import About from '@/components/About/About.vue'

Vue.use(Router)

export default new Router({
	//路由匹配规则
	linkActiveClass:'is-active',
	mode:'history',//改成history模式
  	routes: [
  	{
  		path:'/',
  		redirect:'/home'
  	},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
    	path: '/display',
      name: 'Display',
      component: Display
    },
    {
    	path: '/news',
      	name: 'News',
      	component: News
    },
    {
     	path: '/about',
      	name: 'About',
      	component: About
    },
  ]
})
