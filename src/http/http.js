import axios from 'axios'
import store from './../store/store'
import * as types from './../store/types'
import router from './../router'
import { BASE_URL, HOST_PORT } from './../constant/api'

// Axios configuration
axios.defaults.timeout = HOST_PORT
axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true

// http request 拦截器
axios.interceptors.request.use(
    config => {
      if (store.state.token) {
        config.headers.Authorization = `token ${store.state.token}`
      }
      return config
    },
    err => {
      return Promise.reject(err)
    },
  )
  
  // http response 拦截器
  axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // 401 清除token信息并跳转到登录页面
            store.commit(types.LOGOUT)
            
            // 只有在当前路由不是登录页面才跳转
            router.currentRoute.path !== 'login' &&
              router.replace({
                path: '/about',
                query: { redirect: router.currentRoute.path },
              })
        }
      }
      // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
      return Promise.reject(error.response.data)
    },
  )
  
  export default axios