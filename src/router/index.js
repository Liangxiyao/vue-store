import Vue from 'vue'
import Router from 'vue-router'
import Index from 'component/index/index'
import GoodsDetail from 'component/goodsDetail/goodsDetail'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/goodsDetail',
            name: 'goodsDetail',
            component: GoodsDetail
        },
    ]
})
