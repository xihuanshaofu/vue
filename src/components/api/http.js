import axios from 'axios'
import {
  Message
} from 'element-ui'
// import store from '@/store'
// import {
//   getToken
// } from '@/utils/auth'
// 创建axios实例

axios.defaults.baseURL = process.env.VUE_APP_BASE_API  //获取当前环境的请求地址
const service = axios.create({
 // api的base_url  
  //baseURL: "/sms"
  //baseURL: "/toutiao", // api的base_url
  //baseURL: "http://172.25.0.43:8088/", // api的base_url
  timeout: 50000 // 请求超时时间
})

// request拦截器taol
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (2>1) {
    config.headers['Authorization'] = "token" // 让每个请求携带token
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status == 401) {
      Message({
        message: '登录超时,您将在3秒后返回登陆界面',
        type: 'error',
        duration: 3 * 1000,
        showClose: true,
        // onClose: function() {
        //   store.dispatch('LogOut').then(() => {
        //     location.reload()
        //   })
        // }
      })
    } else if (error.response.status == 400) {
      Message({
        message: '登录失败',
        type: 'error',
        duration: 5 * 1000
      })
    } else if (error.response.status == 500) {
      Message({
        message: '服务端错误，请联系管理员。 错误码为' + error.response.status,
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }

    return Promise.reject(error)
  })

export default service
