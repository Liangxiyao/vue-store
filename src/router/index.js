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

//店铺管理
import Myshop from 'component/myshop/myshop'
import MyAccount from 'component/myaccount/myaccount'
import Recharge from 'component/myaccount/recharge'
import DoCharge from 'component/myaccount/doCharge'
import Branch from 'component/branch/branch'
import BranchList from 'component/branch/branchList'
import WaitSure from 'component/branch/waitSure'
import UnacceptList from 'component/branch/unacceptList'
import UpgradeShop from 'component/branch/upgradeShop'

 //订单
import Order from 'component/order/order'  

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
        {
            path: '/myshop',
            name: 'myshop',
            component: Myshop
        },
        {
            path: '/myaccount',
            name: 'myAccount',
            component: MyAccount
        },
        {
            path: '/recharge',
            name: 'recharge',
            component: Recharge
        },
        {
            path: '/doCharge',
            name: 'doCharge',
            component: DoCharge
        },
        {
            path: '/mybranch',
            name: 'branch',
            component: Branch,
            redirect:'/branchList',
            children: [
                {
                    path: '/branchList',
                    name: 'branchList',
                    component: BranchList
                },
                {
                    path: '/waitSure',
                    name: 'waitSure',
                    component: WaitSure,
                    redirect: '/unacceptList',
                    children: [
                        {
                            path: '/unacceptList',
                            name: 'unacceptList',
                            component: UnacceptList
                        },
                        {
                            path: '/upgradeShop',
                            name: 'upgradeShop',
                            component: UpgradeShop
                        }    
                    ]
                }
            ]
        },
        {
            path: '/order',
            name: 'order',
            component: Order
        }

    ]
})
