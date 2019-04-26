import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        indexSku: {},
        orderState:0
    },
    //getters 相当于组件中的computed计算属性   
    getters: {
    },
    //修改状态的唯一途径，要使改变状态可被记录，必须commit一个mutations，mutations必须是同步的
    mutations: {
        changeSku(state, payload) {
            let data = Object.assign({},state.indexSku,payload)
            state.indexSku = data
        },
        resetSku(state, payload) {
            let data = Object.assign({},payload)
            state.indexSku = data
        },
        changeOrderState(state, payload) {
            state.orderState = payload
        }

    },
    //异步操作一般都要放在actions中，如定时器和ajax请求
    //异步操作产生结果，action提交的是mutations,而不是直接变更状态
    actions: {  
    }
})

export default store