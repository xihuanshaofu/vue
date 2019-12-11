import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import JHK from '../views/jhk.vue'
Vue.use(VueRouter)

const routes = [
	{
		path:"/",
		redirect:{name:"home"}
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: About
	},
	{
		path: '/jhk',
		name: 'jhk',
		component: JHK
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
