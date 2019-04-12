import Vue from 'vue'
import Router from 'vue-router'
import Register from 'component/user/register'
import Login from 'component/user/login'
import Index from 'component/index/index'
import GoodsDetail from 'component/goodsDetail/goodsDetail'
import ShopCart from 'component/shopCart/shopCart'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/register',
        },
        {
            path: '/register',
            name: '/register',
            component: Register
        },
        {
            path: '/login',
            name: '/login',
            component: Login
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
