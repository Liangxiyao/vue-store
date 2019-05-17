import { get, post } from "./http"

export const apiIndexInfo = p => post('/api/index/index', p)

export const apiIndexGoodsList = p => post('/api/index/goodslist', p)

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

export const apiWaitSureList = p => post('/api/Agent/unaccept', p)

export const apiAcceptShopDetail = p => post('/api/Agent/unacceptShopDetail', p)

export const apiOrderLists = p => post('/api/order/lists', p)

export const apiOrderDeatil = p => post('/api/order/orderDetail', p)

export const apiLogistics = p => post('/api/order/deliveryList', p)

export const apiCloseOrder = p => post('/api/order/closeOrder')

export const apiOrderConfirm = p =>post('/api/order/apiOrderConfirm')

export const apiSystemMsg = p => post('/api/msg/index', p)

export const apiMsgLists = p => post('/api/msg/lists', p)


