import axios from 'axios'
import store from './store/store'
import * as types from './store/types'
import router from './router'

// Axios configuration
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://127.0.0.1:9000'
axios.defaults.withCredentials = true



// http request interceptors
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)


// http response interceptor
axios.interceptors.response.use(
    response => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.commit(types.LOGOUT)
                    
                    router.currentRoute.path !== 'login' &&
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.path },
                    })
            
            }
        }
        return Promise.reject(error.response.data)
    }
)


export default axios