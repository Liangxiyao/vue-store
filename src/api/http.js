import axios from "axios"
import qs from 'qs';

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.post['access-token'] = '3c13bedc4c0bc19ddb8bea3045f8d9e9'

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data))
            .then(response => {
            let json = response.data
            if (json.status == 1) {
                resolve(json)
            }
        }, err => {
            reject(err)
        })
    })
}

export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            let json = response.data
            if (json.status == 1) {
                resolve(json)
            }
        })
        .catch(err => {
            reject(err)
        })
    })  
  }