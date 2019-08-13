import axios from "axios"
import qs from 'qs'
import storage from 'common/js/storage'
import Store from "../store";

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


let requestCount = 0    //请求数量
//显示loading
export function ShowLoading() {
    if (requestCount === 0) {
        Store.commit('showLoading')
    }
    requestCount++
}
 
//隐藏loading
export function HideLoading() {
    if (requestCount <= 0) return
    requestCount--
    
    if (requestCount === 0) {
        Store.commit('hideLoading')
    }
}


//请求拦截器
axios.interceptors.request.use(
    req => {
        // token
        let userInfo = storage.get('userInfo')  //获取token
        req.headers['access-token'] = userInfo ? userInfo.token : '';   //设置请求头
        if (req.showLoading) {
            ShowLoading()
        }
        return req
    },
    err => {
        return Promise.reject(err)
    }
);
//响应拦截器
axios.interceptors.response.use(
    res => {
        console.log(res)
        if (res.config.showLoading) {
            HideLoading()
        }
        return res;
    },
    err => {
        return Promise.reject(err)
    }
)

/*
**  每次调用ShowLoading方法 requestCount + 1。
**  调用HideLoading方法，requestCount - 1。
**  requestCount为 0 时，结束 loading。
*/

//封装post请求，若请求不需要loading，则将showLoading设为false
export function post(url, data = {},loading = { showLoading: true }) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data),loading)
        .then(res => {       
            resolve(res.data)        
        }).catch(err => {
            reject(err)
        })
    })
}
//封装get请求，若请求不需要loading，则将showLoading设为false
export function get(url,params={},loading = { showLoading: true }){
    return new Promise((resolve,reject) => {
        axios.get(url, {
            params: params
        }, loading)
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })  
  }