import Vue from 'vue'
import Router from 'vue-router'

const Register = () => import('component/user/register')
const Login = () => import('component/user/login')
const CodeLogin = () => import('component/user/codeLogin')
const ForgetPwd = () => import('component/user/forgetPwd')
const SetNewPwd = () => import('component/user/setNewPwd')

const Index = () => import('component/index/index2')
const GoodsDetail = () => import('component/goodsDetail/goodsDetail')
const ShopCart = () => import('component/shopCart/shopCart')
const ShopManage = () => import('component/shopManage/shopManage')
const Myself = () => import('component/myself/myself')
const SystemInfo = () => import('component/systemInfo/system')
const SystemLists = () => import('component/systemInfo/systemLists')

//店铺管理
const Myshop = () => import('component/myshop/myshop')

//分店
const Branch = () => import('component/branch/branch')
const BranchList = () => import('component/branch/branchList')
const WaitSure = () => import('component/branch/waitSure')
const UpgradeShop = () => import('component/branch/upgradeShop')
const UnacceptShop = () => import('component/branch/unacceptShop')
const MybranchDetail = () => import('component/branch/detail')


 //订单
const Order = () => import('component/order/order')
const OrderDetail = () => import('component/order/orderDetail')
const Logistics = () => import('component/order/logistics')

//我的账户
const MyAccount = () => import('component/myaccount/myaccount')
const Recharge = () => import('component/myaccount/recharge')
const DoCharge = () => import('component/myaccount/doCharge')
const MyBank = () => import('component/myaccount/mybank')
const BindBank = () => import('component/myaccount/bindBank')
const SettleBank = () => import('component/myaccount/SettleBank')
const SettleList = () => import('component/myaccount/settleList')
const SettleDetail = () => import('component/myaccount/settleDetail')
const SurplusList = () => import('component/myaccount/surplusList')
const SurplusDetail = () => import('component/myaccount/surplusDetail')

//数据统计
const Statistics = () => import('component/statistics/statistics')


Vue.use(Router)

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index',
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
            path: '/settleBank',
            name: 'settleBank',
            component: SettleBank
        },
        {
            path: '/settleList',
            name: 'settleList',
            component: SettleList
        },
        {
            path: '/settleDetail/:id',
            name: 'settleDetail',
            component: SettleDetail,
            props:true
        },
        {
            path: '/bindBank',
            name: 'bindBank',
            component:BindBank
        },
        {
            path: '/myBank',
            name: 'myBank',
            component:MyBank
        },
        {
            path: '/surplusList',
            name: 'surplusList',
            component:SurplusList
        }, 
        {
            path: '/surplusDetail/:status/:id',
            name: 'surplusDetail',
            component: SurplusDetail,
            props:true
        }, 
        {
            path: '/mybranch',
            name: 'branch',
            component: Branch,
            children: [
                {
                    path: '',
                    name: 'branchList',
                    component: BranchList
                },
                {
                    path: '/waitSure',
                    name: 'waitSure',
                    component: WaitSure,
                    children: [
                        {
                            path: '',
                            name:'unacceptShop',
                            component:UnacceptShop,
                        },
                        {
                            path: 'upgradeShop',
                            name:'upgradeShop',
                            component:UpgradeShop
                        },
                        
                    ]
                }
            ]
        },
        {
            path: '/waitSure/detail/:id',
            name:'MybranchDetail',
            component: MybranchDetail,
        },
        {
            path: '/unacceptDetail/:id',
            name: 'unacceptDetail',
            component: MybranchDetail
        },
        {
            path: '/upgradeDetail/:id',
            name: 'upgradeDetail',
            component: MybranchDetail
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
        },
        {
            path: '/orderDetail/:id',
            name: 'orderDetail',
            component: OrderDetail,
        },
        {
            path: '/logistics',
            name: 'logistics',
            component: Logistics
        },
        {
            path: '/statistics',
            name: 'statistics',
            component:Statistics
        },



        {path:'*',component:()=> import('component/notFound/notFound')}

    ]
})
// router.beforeEach((to, from, next) => { 
//     next()
//     console.log(to);
//     console.log(from);
// })


export default router
