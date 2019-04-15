import axios from "axios"
import qs from 'qs'
import storage from 'common/js/storage'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// token
let userInfo = storage.get('userInfo')
axios.defaults.headers.post['access-token'] = userInfo?userInfo.token:'' 


export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data))
            .then(res => {
            resolve(res.data)
        }, err => {
            reject(err.data)
        })
    })
}

export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err.data)
        })
    })  
  }