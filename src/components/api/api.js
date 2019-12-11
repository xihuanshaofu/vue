import http from "./http.js"

export function requestQ(param){
	return http({
		url:"/api/overtime/daysOver",
		method:"post",
		data:param
	})
}

export function requestBreak(param){
	return http({
		url:"/api/overtime/listAlltx",
		method:"post",
		data:param
	})
}