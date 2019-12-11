import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import {
	requestBreak
} from "@/components/api/api.js"
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		statu: "show"
	},
	mutations: {
		SET_STATU: (state, statu) => {
			state.statu = statu
		}
	},
	actions: {
		setTatus({ commit }, statu) {
			commit("SET_STATU", statu)
			console.log(statu)
			Cookies.set("statu", "007")
			sessionStorage.setItem("statu", "007")
		}
	},
	modules: {
	}
})
