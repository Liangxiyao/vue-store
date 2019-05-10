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
import SystemInfo from 'component/systemInfo/system'
import SystemLists from 'component/systemInfo/systemLists'

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
import OrderDetail from 'component/order/orderDetail'
import Logistics from 'component/order/logistics'

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
            path: '/goodsDetail/:id',
            name: 'goodsDetail',
            component: GoodsDetail,
            props:true
        },
        {
            path: '/shopCart',
            name: 'shopCart',
            meta:{redirectLogin:true},
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
            path: '/systemMessage',
            name: 'systemInfo',
            component: SystemInfo
        },
        {
            path: '/systemLists',
            name: 'systemLists',
            component: SystemLists
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
        },
        {
            path: '/orderDetail/:id',
            name: 'orderDetail',
            component: OrderDetail,
            props:true
        },
        {
            path: '/logistics',
            name: 'logistics',
            component: Logistics
        }

    ]
})
