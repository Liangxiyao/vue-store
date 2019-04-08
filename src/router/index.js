import Vue from 'vue'
import Router from 'vue-router'
import Index from 'component/index/index'
import GoodsDetail from 'component/goodsDetail/goodsDetail'
import ShopCart from 'component/shopCart/shopCart'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index',
            meta: {
                keepAlive: true 
            }
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
        {
            path: '/shopCart',
            name: 'shopCart',
            component: ShopCart
        },
    ]
})
