<template>
    <div class="mui-scroll-wrapper main">
        <div class="mui-scroll">
            <ul class="order-list" v-if="lists.length">
                <li class="item goods-info-common" v-for="shop in lists" :key="shop.order_id">
                    <div class="hd">
                        <span class="shop-name" v-if="shop.brand != null">{{shop.brand.brand_name}}</span>
                        <span class="state fr">{{shop.order_state}}</span>
                    </div>
                    <div class="pro-item">						
                        <div class="">
                            <!-- <router-link  class="wbox item-wrap" :to="{path:'/orderDetail',query:{id:item.order_id}}" v-for="(item,index) in shop.items" :key="index"> -->
                            <!-- <router-link  class="wbox item-wrap" :to="{name:'orderDetail',params:{id:item.order_id}}" v-for="(item,index) in shop.items" :key="index"> -->
                            
                            <router-link  class="wbox item-wrap" :to="'orderDetail/'+item.order_id" v-for="(item,index) in shop.items" :key="index">
                                <img class="pro-img" :src="item.pic" alt="">
                                <div class="pro-info wbox-flex ">                               
                                    <span class="pro-name ofellipsis2 block">{{item.goods_name}}</span>                               
                                    <p class="guige">{{item.sku_str}}</p>
                                    <div class="price-wrap clearFix">
                                        <span class="snPrice"><em>¥</em>{{item.total_price}}</span>
                                        <span class="fr pro-num">x{{item.number}}</span>
                                    </div>
                                </div>
                            </router-link>
                        </div>		
                        <div class="order-total">
                            <span>共{{shop.totalGoodsNum}}件商品</span><span class="money">合计：<em>¥{{shop.total_price}}</em></span>
                        </div>
                        <order-groups-btn :status="shop.order_status"></order-groups-btn>
                        <!-- <div class="order-groups-btn" v-if="shop.order_status == 1">
                            <a href="" class="btn">取消订单</a>
                            <a href="" class="btn green">付款<span class="settimeout">29:59</span></a>
                        </div>
                        <div class="order-groups-btn" v-if="shop.order_status == 2">
                            <a href="" class="btn">再次购买</a>
                        </div>
                        <div class="order-groups-btn" v-if="shop.order_status == 3">
                            <a href="" class="btn">查看物流</a>
                            <a href="" class="btn green">确认收货</a>
                        </div>
                        <div class="order-groups-btn" v-if="shop.order_status == 4">
                            <a href="" class="btn">再次购买</a>
                            <a href="" class="btn">申请售后</a>
                        </div>
                        <div class="order-groups-btn" v-if="shop.order_status == 10">
                            <a href="" class="btn">再次购买</a>
                            <a href="" class="btn">删除订单</span></a>
                        </div> -->
                    </div>
                    <div class="order-groups-btn" v-if="shop.order_status == 1">
                        <a href="" class="btn">取消订单</a>
                        <a href="" class="btn green">付款<span class="settimeout">29:59</span></a>
                    </div>
                    <div class="order-groups-btn" v-if="shop.order_status == 2">
                        <a href="" class="btn">再次购买</a>
                    </div>
                    <div class="order-groups-btn" v-if="shop.order_status == 3">
                        <a href="" class="btn">查看物流</a>
                        <a href="" class="btn green">确认收货</a>
                    </div>
                    <div class="order-groups-btn" v-if="shop.order_status == 4">
                        <a href="" class="btn">再次购买</a>
                        <a href="" class="btn">申请售后</a>
                    </div>
                    <div class="order-groups-btn" v-if="shop.order_status == 10">
                        <a href="" class="btn">再次购买</a>
                        <a href="" class="btn">删除订单</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import OrderGroupsBtn from './orderGroupsBtn.vue'
export default {
    props:{
        lists:{
            type:Array,
            default:[]
        },
    },
    components:{
        OrderGroupsBtn
    },
    created(){
        this.$nextTick(()=>{
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.008
            })
        })
    },
    data(){
        return{

        }
    }
}
</script>
<style>
.myorder .main{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);}
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
.order-groups-btn .btn{display:inline-block;width:85px;height:30px;line-height:30px;font-size:13px;color:#333;border:1px solid #ddd;border-radius:5px;margin-left:6px;text-align: center;}
.order-groups-btn .btn.green{border-color:#00A43E;color:#00A43E;}
.order-groups-btn .settimeout{font-weight:600;padding-left:3px;}
</style>




