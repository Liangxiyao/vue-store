<template>
<div class="orderDetail">
    <m-header>
        <span slot="header-cont">订单详情</span>
    </m-header>
    <div class="mui-content" v-if="!loading">
        <div class="mui-scroll-wrapper main">
            <div class="mui-scroll">
                <div class="top-bg">
                    <span class="l-txt"><i class="icon"></i>{{details.status_msg}}</span>
                    <span class="r-txt fr">还剩10天24小时自动确认</span>
                </div>
                <div class="bd">
                    <div class="order-info">
                        <div class="logis" v-if="newLogistics.delivery_trace_new && newLogistics.delivery_trace_new.status">
                            <i class="icon pa"></i>
                            <div class="cont">
                                <div class="logis-state">{{newLogistics.delivery_trace_new.status}}</div>
                                <div class="date color6">{{newLogistics.delivery_trace_new.time}}</div>
                            </div>
                            <i class="mui-icon mui-icon-arrowright"></i>
                        </div>
                        <div class="buyer-info">
                            <i class="icon pa"></i>
                            <div class="cont">
                                <div class="buyer">{{details.profile.consignee}} <span class="phone">{{details.profile.mobile}}</span></div>
                                <div class="address color6">{{details.profile.region_name+details.profile.address}}</div>
                            </div>
                        </div>
                    </div>
                    <ul class="order-list" v-if="details.items">
                        <li class="item goods-info-common">
                            <div class="hd"><span class="shop-name">{{details.brand.brand_name}}</span></div>
                            <div class="pro-list">
                                <div class="wbox pro-item" v-for="item in details.items" :key="item.goods_id">
                                    <img class="pro-img" :src="item.pic" alt="">
                                    <div class="pro-info wbox-flex">
                                        <a :href="'goodsDetail?id='+item.goods_id" class="block">
                                            <span class="pro-name ofellipsis2">{{item.goods_name}}</span>
                                        </a>
                                        <p class="guige">{{item.sku_str}}</p>
                                        <div class="price-wrap clearFix">
                                            <span class="snPrice"><em>¥</em>{{item.unit_price}}</span>
                                            <span class="fr pro-num">x{{item.number}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="message">
                                    <input type="text" name="" id="" value="这里是留言" readonly/>
                                </div>
                                <div class="order-total">
                                    <span>共{{details.totalGoodsNum}}件商品</span><span class="money">合计：<em>¥{{details.order.total_price}}</em></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="order-desc">
                        <div class="list">
                            <div class="item">
                                订单编号：<span class="code-num" id="codeNum">{{details.order.notice_sn}}</span>
                                <textarea id="copyTxt" style="opacity:0;width:1px;height:1px;z-index:-1">{{details.order.notice_sn}}</textarea>
                                <div class="code-btn copy" id="codeBtn" @click="copyOrderId">复制</div>
                            </div>
                            <div class="item">
                                下单时间：<span>{{details.order.sendtime}}</span>
                            </div>
                            <div class="item" v-if="details.order.payway">
                                支付方式：<span>{{details.order.payway}}</span>
                            </div>
                            <div class="item" v-if="details.order.payed_time">
                                支付时间：<span>{{details.order.payed_time}}</span>
                            </div>
                            <div class="item" v-if="details.order.delivery">
                                配送方式：<span>{{details.order.delivery}}</span>
                            </div>
                        </div>

                        <div class="kefu bdt">
                            <a href=""><i class="icon"></i>联系客服</a>
                        </div>
                    </div>
                    <div class="order-pay-detail">
                        <div class="money-list">
                            <div class="item total-money">商品金额 <span class="fr">¥{{details.order.total_price}}</span></div>
                            <div class="item">运费<span class="fr">¥{{details.order.spreadMoney}}</span></div>
                            <div class="item">优惠<span class="fr">- ¥10</span></div>
                            <div class="item act-pay bdt">实付款<span class="fr" style="color:#00A43E;"><em style="font-size:13px;">¥</em>10</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bt-area" v-if="details.order">
            <order-groups-btn :status="details.order.order_status"></order-groups-btn>
        </div>
    </div>
</div>
</template>

<script>
import mHeader from 'base/header/header'
import { GetQueryString } from 'common/js/common'
import { apiOrderDeatil } from 'api/api'
import { apiLogistics } from 'api/api'
import OrderGroupsBtn from './orderGroupsBtn';
export default {
    components:{
        mHeader,
        OrderGroupsBtn
    },
    data() {
        return {
            details:{
                brand:{},
                profile:{},
                order:{},
                items:{}
            },
            logistics:[],
            newLogistics:{},
            orderId:GetQueryString('id')
        }
    },
    created(){   
       this._getOrderDetail()
       this._getLogistics()
    },
    updated () {
        
    },
    computed: {
        loading() {
            return this.$store.state.loading
        }
    },
    methods: {
        _getOrderDetail() {
            apiOrderDeatil({
                order_id:this.orderId
            }).then((result) => {
                console.log(result);
                
                if(result.status == 1){
                    this.details = result.data
                }
            }).catch((err) => {
                
            });
        },
        _getLogistics(){
            apiLogistics({
                order_id:this.orderId  
            }).then((result) => {
                if(result.status == 1){
                    this.logistics = result.data
                    if(this.logistics){
                        this.newLogistics = this.logistics[0]
                    }
                }   
            }).catch((err) => {
                
            });
        },
        copyOrderId(){
            var copyTxt = document.getElementById("copyTxt");	
            copyTxt.select(); // 选择对象
            document.execCommand("Copy"); 
            alert("已复制好，可贴粘。");
        }
    },
}
</script>

<style>
@import '../../common/css/goods.css';
.orderDetail .main{top:44px;bottom:50px;}
.orderDetail .icon{background: url(../../common/images/order-icon.png) no-repeat 0 -2px;background-size:29px;}
.orderDetail .bd{padding:15px;margin-top:-45px;}
.orderDetail .top-bg{width:100%;min-height:100px;background: url(../../common/images/order-bg.jpg) no-repeat top center;background-size:100%;color:#fff;font-size:16px;
line-height:20px;padding:25px 18px;}
.orderDetail .top-bg .icon{display:inline-block;vertical-align:top;margin-right:5px;width:25px;height:20px;}
.orderDetail .top-bg .iconfont{padding-right:5px;}
.orderDetail .top-bg .r-txt{font-size:12px;}
.orderDetail .order-info{background:#fff;font-size:15px;margin-bottom:15px;border-radius:5px;padding:15px;}
.orderDetail .order-info .address{font-size:13px;color:#666;line-height:18px;margin-top:3px;}
.orderDetail .order-info .logis,.orderDetail .order-info .buyer-info{padding:0 15px 0 20px;position:relative;}
.orderDetail .order-info .logis .icon,
.orderDetail .order-info .buyer-info .icon{top:0;left:-5px;width:20px;height:20px;background-position:0 -18px;background-size:22px;}
.orderDetail .order-info .mui-icon-arrowright{color:#999;font-size:20px;position:absolute;top:50%;margin-top:-10px;right:-10px}
.orderDetail .order-info .logis .logis-state{color:#333;font-weight:600;}
.orderDetail .order-info .logis{margin-bottom:20px;}
.orderDetail .order-info .buyer-info .icon{background-position:0 -41px;}
.orderDetail .message input{margin:0;font-size:13px;color:#ccc;background-color:#F0F0F0;height:35px;padding: 5px 10px;border:0;margin-bottom: 5px;}
.order-pay-detail{background-color:#fff;border-radius:5px;}
.order-pay-detail .coupon-enter{display:block;height:50px;line-height:50px;font-size:15px;padding:0 15px;}
.order-pay-detail .coupon-enter .rg{color:#999;font-size:13px;}
.order-pay-detail .coupon-enter .rg .icon-jiantou{font-size:16px;position: relative;top:1px;right:-2px;color:#ccc;}
.order-pay-detail .money-list{padding:15px 0;font-size:13px;color:#333;}
.order-pay-detail .money-list .item{line-height:24px;padding:0 15px;}
.order-pay-detail .money-list .total-money{font-size: 13px;color:#333;}
.orderDetail .order-pay-detail .money-list .act-pay{padding-top:15px;font-size:15px;line-height:20px;margin-top:10px;}
.orderDetail .bt-area{position:absolute;left:0;right:0;bottom:0;margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom);background:#fff;
height:50px;padding:10px 15px;z-index:10;text-align: right;}
.orderDetail .bt-area .btn{display:inline-block;width:85px;height:30px;line-height:30px;font-size:15px;text-align: center;border-radius:5px;margin-left:10px;
border:1px solid #ccc;color:#333;}
.orderDetail .bt-area .green{color:#00A43E;border-color:#00A43E;}
.order-desc{background-color:#fff;margin-bottom:15px;border-radius:5px;}
.order-desc .list{padding:10px 15px;line-height:30px;font-size:13px;color:#333;}
.order-desc .list span{color:#999;}
.order-desc .list .copy{display:inline-block;vertical-align:middle;width:40px;height:20px;line-height:19px;border:1px solid #666;padding:0;
font-size:12px;color:#666;text-align: center;border-radius:3px;}
.order-desc .kefu{text-align:center;font-size:13px;color:#333;line-height:50px;}
.order-desc .kefu .icon{display:inline-block;vertical-align: middle;width:30px;height:30px;background-position:0 -80px;background-size:28px;}
.order-total{text-align: right;margin-top:10px;}
.order-total{font-size:14px;margin-bottom:15px;}
.order-total .money{padding-left:6px;}
.order-total .money em{font-weight:600;font-size:15px}

</style>