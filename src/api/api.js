import { get, post } from "./http"

export const apiIndexInfo = p => post('api/index/index', p)

export const apiIndexGoodsList = p => post('api/index/goodslist', p)

export const apiGoodsDetail = p => get('api/shop/item', p)

export const apiShopCartList = p => post('api/Shopcart/lists', p)

export const apiShopCartNum = p => post('api/Shopcart/sysCart', p)

export const apiGetRegcode = p => post('api/Login/regcode', p)