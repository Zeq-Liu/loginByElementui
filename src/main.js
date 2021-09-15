import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'

Vue.use(vueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.prototype.axios = axios;

Vue.config.productionTip = false

//路由钩子router.berforeEach()
router.beforeEach((to, from, next) => {
	let isLogin = sessionStorage.getItem('isLogin');

	if (to.path == '/logout') { //登出并清空
		sessionStorage.clear();
		//跳转到登录
		next({
			path: '/login'
		});
	} else if (to.path == '/login') {
		//判断是否为空，不为空，跳转至首页
		if (isLogin != null) {
			next({
				path: '/main'
			});
		}
	} else if (isLogin == null) {
		next({
			path: '/login'
		});
	}
	next();
})


new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
