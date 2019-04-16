import { get, post } from "./http"

export const apiIndexInfo = p => post('api/index/index', p)

export const apiIndexGoodsList = p => post('api/index/goodslist', p)

export const apiGoodsDetail = p => post('api/shop/item', p)

export const apiShopCartList = p => post('api/Shopcart/lists', p)

export const apiShopCartNum = p => post('api/Shopcart/sysCart', p)

export const apiRegcode = p => post('api/Login/regcode', p)

export const apiRegister = p => post('api/Login/reg', p)

export const apiLoginByPass = p => post('api/Login/loginByPass', p)

export const apiGetFindCode = p => post('api/Login/getFindCode', p)

export const apiVarifyFindPassCode = p => post('api/Login/varifyFindPassCode', p)

export const apiResetPass = p => post('api/Login/resetPass', p)

export const apiGetLoginCode = p => post('api/Login/getLoginCode', p)

export const apiLoginByCode = p => post('api/Login/loginByCode', p)

export const apiShopManage = p => post('api/Agent/index', p)
