import Vue from 'vue'
import Router from 'vue-router'
import Register from 'component/user/register'
import Login from 'component/user/login'
import CodeLogin from 'component/user/codeLogin'
import ForgetPwd from 'component/user/forgetPwd'
import SetNewPwd from 'component/user/setNewPwd'
import Index from 'component/index/index'
import GoodsDetail from 'component/goodsDetail/goodsDetail'
import ShopCart from 'component/shopCart/shopCart'
import ShopManage from 'component/shopManage/shopManage'
import Myself from 'component/myself/myself'


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
            path: '/codeLogin',
            name: '/codeLogin',
            component: CodeLogin
        },
        {
            path: '/forgetPwd',
            name: '/forgetPwd',
            component: ForgetPwd
        },
        {
            path: '/setNewPwd',
            name: '/setNewPwd',
            component: SetNewPwd
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
        {
            path: '/shopManage',
            name: 'shopManage',
            component: ShopManage
        },
        {
            path: '/myself',
            name: 'myself',
            component: Myself
        },
    ]
})
