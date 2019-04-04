import axios from "axios"

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.post['oid'] = 'oqWNv1VQsDLa7R6FMEBRG8m-yWIE'

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                let json = response.data
                if (json.status == 1) {
                    resolve(response.data.data)
                }
            }, err => {
                reject(err)
            })
    })
}

export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,
            { params: params })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
  }