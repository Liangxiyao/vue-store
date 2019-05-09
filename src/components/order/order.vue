<template>
    <div class="order">
        <m-header>
            <span slot="header-cont">我的订单</span>
        </m-header>
        <div class="mui-content myorder">
            <div class="tab-bar">
                <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted">
                    <a class="mui-control-item" :class="[currentState == 0?'cur':'']" href="javascript:;" @tap="_getOrderLists(0)"><span>全部</span></a>
                        <a class="mui-control-item" :class="[currentState == 1?'cur':'']" href="javascript:;" @tap="_getOrderLists(1)"><span>待支付</span></a>
                        <a class="mui-control-item" :class="[currentState == 5?'cur':'']" href="javascript:;" @tap="_getOrderLists(5)"><span>审核中</span></a>
                        <a class="mui-control-item" :class="[currentState == 2?'cur':'']" href="javascript:;" @tap="_getOrderLists(2)"><span>待发货</span></a>
                        <a class="mui-control-item" :class="[currentState == 3?'cur':'']" href="javascript:;" @tap="_getOrderLists(3)"><span>已发货</span></a>
                        <a class="mui-control-item" :class="[currentState == 4?'cur':'']" href="javascript:;" @tap="_getOrderLists(4)"><span>已完成</span></a>
                        <!-- <a class="mui-control-item" :class="[currentState == 10?'cur':'']" href="javascript:;" @tap="_getOrderLists(10)"><span>已取消</span></a> -->
                </div>
            </div>
            <order-lists :lists='orderList' v-if="orderList.length>0"></order-lists>
            <!-- 无内容 -->
            <div class="no-cont" v-else>
                <img class="icon" src="../../common/images/no-order.png" >
                <p class="tip">暂无相关订单</p>
                <a class="btn" href="">点击跳转</a>
            </div>
        </div>
    </div>

</template>
<script>
import mHeader from 'base/header/header'
import orderLists from './lists.vue'
import { apiOrderLists } from 'api/api'
import { GetQueryString } from "common/js/common";

export default {
    components:{
        mHeader,
        orderLists
    },
    data(){
        return{
            orderList:[],
            currentIndex:0
        }
    },
    created(){
        let getState = GetQueryString('state');
        if(getState){
            this.currentState = getState
            this._getOrderLists(this.currentState)
        }else{
            this._getOrderLists(0)
        }
    },
    methods:{
        _getOrderLists(n){
            this.currentState = n
            apiOrderLists({
                p:1,
                order_status:this.currentState
            }).then((result) => {
                if(result.status == 1){
                    this.orderList = result.data.list
                }
            }).catch((err) => {
                console.log(err)
            });
        }
    }
}
</script>
<style>
@import '../../common/css/goods.css';
.myorder.mui-content{padding-top:84px;}
.tab-bar{background-color:#fff;position:fixed;top:44px;}
.tab-bar .mui-segmented-control.mui-scroll-wrapper{height:40px;}
.tab-bar .mui-segmented-control.mui-segmented-control-inverted .mui-control-item{color:#666;font-size:14px;}
.tab-bar .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active,
.tab-bar .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.cur{color:#333;border:none;}
.tab-bar .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.cur span{display:inline-block;border-bottom:2px solid #00A43E;}
.myorder .main{top:84px;bottom:constant(safe-area-inset-bottom);bottom:env(safe-area-inset-bottom);}
.myorder .main .order-list{margin:15px;}
.myorder .hd .shop-name{font-weight:600;}
.goods-info-common .hd .state{color:#00A43E;font-size:13px;}
.pro-item .item-wrap{margin-bottom:15px;}
.myorder .goods-info-common .pro-img{width:70px;height:70px;}
.myorder .order-total{margin:0;}
.order-total,.order-groups-btn{text-align: right;margin-top:10px;}
.order-total{font-size:14px;margin-bottom:15px;}
.order-total .money{padding-left:6px;}
.order-total .money em{font-weight:600;font-size:15px}
</style>


