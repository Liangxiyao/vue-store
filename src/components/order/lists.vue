<template>
    <div class="mui-scroll-wrapper main">
        <div class="mui-scroll">
            <ul class="order-list" v-if="lists.length>0">
                <li class="item goods-info-common" v-for="shop in lists" :key="shop.order_id">
                    <div class="hd"><span class="shop-name">星咖旗舰店</span><span class="state fr">{{shop.order_state}}</span></div>
                    <div class="pro-item">						
                        <div class="wbox item-wrap" v-for="item in lists.items">
                            <img class="pro-img" :src="item.pic" alt="">
                            <div class="pro-info wbox-flex ">
                                <a :href="'orderDetail?id='+item.order_id" class="block">
                                    <span class="pro-name ofellipsis2">{{item.goods_name}}</span>
                                </a>
                                <p class="guige">{{item.24瓶/箱}}</p>
                                <div class="price-wrap clearFix">
                                    <span class="snPrice"><em>¥</em>{{item.total_price}}</span>
                                    <span class="fr pro-num">x{{item.number}}</span>
                                </div>
                            </div>
                        </div>		
                        <div class="order-total">
                            <span>共{{shop.totalGoodsNum}}件商品</span><span class="money">合计：<em>¥{{shop.total_price}}</em></span>
                        </div>
                        <div class="order-groups-btn" v-if="lists.order_status == 1">
                            <a href="" class="btn">取消订单</a>
                            <a href="" class="btn green">付款<span class="settimeout">29:59</span></a>
                        </div>
                        <div class="order-groups-btn" v-if="lists.order_status == 2">
                            <a href="" class="btn">取消订单</a>
                            <a href="" class="btn green">付款<span class="settimeout">29:59</span></a>
                        </div>
                        <div class="order-groups-btn" v-if="lists.order_status == 3">
                            <a href="" class="btn">取消订单</a>
                            <a href="" class="btn green">付款<span class="settimeout">29:59</span></a>
                        </div>
                        <div class="order-groups-btn" v-if="lists.order_status == 4">
                            <a href="" class="btn">取消订单</a>
                            <a href="" class="btn green">付款<span class="settimeout">29:59</span></a>
                        </div>
                        <div class="order-groups-btn" v-if="lists.order_status == 5">
                            <a href="" class="btn">取消订单</a>
                            <a href="" class="btn green">付款<span class="settimeout">29:59</span></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


