import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Main from "../views/Main.vue"
import MemberList from "../views/Member/MemberList.vue"
import MemberLevel from "../views/Member/MemberLevel.vue"
import NotFound from '../views/NotFound.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      //默认登录页
      path: '/',
      // name: 'Login',
      redirect: '/login'
    },
    {
      //登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      //首页
      path: '/main',
      name: 'Main',
      component: Main,
			children:[
				{
					//会员列表
					path:'/member/list',
					name:'MemberList',
					component:MemberList
				},
				{
					//会员等级
					path:'/member/level/:id',
					name:'MemberLevel',
					component:MemberLevel,
					props:true
				}
			]
    },
		{
			path:'*',
			component:NotFound
		},
	
  ],
  mode: 'history'
})