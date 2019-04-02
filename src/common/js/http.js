import axios from "axios"

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
      axios.get(url,{
        params:params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
  }