import { get, post } from "./http"
import { Loading } from "vant";

export const apiIndexInfo = p => post('/api/index/index', p)

export const apiIndexGoodsList = p => post('/api/index/goodslist', p,{showLoading:false})

export const apiGoodsDetail = p => post('/api/shop/item', p)

export const apiShopCartList = p => post('/api/Shopcart/lists', p)

export const apiShopCartNum = p => post('/api/Shopcart/sysCart', p)

export const apiRegcode = p => post('/api/Login/regcode', p)

export const apiRegister = p => post('/api/Login/reg', p)

export const apiLoginByPass = p => post('/api/Login/loginByPass', p)

export const apiGetFindCode = p => post('/api/Login/getFindCode', p)

export const apiVarifyFindPassCode = p => post('/api/Login/varifyFindPassCode', p)

export const apiResetPass = p => post('/api/Login/resetPass', p)

export const apiGetLoginCode = p => post('/api/Login/getLoginCode', p)

export const apiLoginByCode = p => post('/api/Login/loginByCode', p)

export const apiShopManage = p => post('/api/Agent/index', p)    //店铺管理 start

export const apiBranch = p => post('/api/Agent/shoplist', p)

export const apiAccountInfo = p => post('/api/Account/info', p)

export const apiRecharge = p => post('/api/charge/pay', p)

export const apiSettleBank = p => post('/api/Account/settleBank', p)

export const apiSettleMoney = p => post('/api/Account/getSettleMoney', p)

export const apiSettleList = p => post('/api/Account/settleList', p)

export const apiSettleDetail = p => post('/api/Account/settleDetail', p)

export const apiSurplusList = p => post('/api/Account/surplusList', p)

export const apiFilterMap = p => post('/api/Account/filterMap', p)

export const apiSurplusDetail = p => post('/api/Account/surplusDetail', p)

export const apiOrderLockList = p => post('/api/Account/orderLockList', p)

export const apiMybank = p => post('/api/user/bank', p)

export const apiBanklist = p => post('/api/user/banklist', p)

export const apiWaitSureList = p => post('/api/Agent/unaccept', p)

export const apiAcceptShopDetail = p => post('/api/Agent/unacceptShopDetail', p)

export const apigradeShopDetail = p => post('/api/Agent/upgradeDetail', p)

export const apiRefuseUpgrade = p => post('/api/Agent/refuseUpgrade', p)

export const apiAcceptUpgrade = p => post('/api/Agent/acceptUpgrade', p)

export const apiOrderLists = p => post('/api/order/lists', p)

export const apiOrderDeatil = p => post('/api/order/orderDetail', p)

export const apiLogistics = p => post('/api/order/deliveryList', p)

export const apiCloseOrder = p => post('/api/order/closeOrder', p)

export const apiOrderConfirm = p =>post('/api/order/apiOrderConfirm', p)

export const apiSystemMsg = p => post('/api/msg/index', p)

export const apiMsgLists = p => post('/api/msg/lists', p)

export const apiOrderStatics = p => post('/api/data/orderStatics', p)


