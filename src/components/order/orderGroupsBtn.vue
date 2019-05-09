<template>
<div class="order-groups">
    <div class="order-groups-btn" v-if="status == 1">
        <router-link to="" class="btn">取消订单</router-link>
        <router-link to="" class="btn green">付款<span class="settimeout">29:59</span></router-link>
    </div>
    <div class="order-groups-btn" v-if="status == 2">
        <router-link to="" class="btn">再次购买</router-link>
    </div>
    <div class="order-groups-btn" v-if="status == 3">
        <router-link to="/logistics" class="btn">查看物流</router-link>
        <router-link to="" class="btn green">确认收货</router-link>
    </div>
    <div class="order-groups-btn" v-if="status == 4">
        <router-link to="" class="btn">再次购买</router-link>
        <router-link to="" class="btn">申请售后</router-link>
    </div>
    <div class="order-groups-btn" v-if="status == 10">
        <router-link to="" class="btn">再次购买</router-link>
        <router-link to="" class="btn">删除订单</span></router-link>
    </div>
</div> 
</template>

<script>
    export default {
        props:['status']
    }
</script>

<style >
.order-groups-btn .btn{display:inline-block;width:85px;height:30px;line-height:30px;font-size:13px;color:#333;border:1px solid #ddd;border-radius:5px;margin-left:6px;text-align: center;}
.order-groups-btn .btn.green{border-color:#00A43E;color:#00A43E;}
.order-groups-btn .settimeout{font-weight:600;padding-left:3px;}
</style>