<template>
<div class="order-groups">
    <div class="order-groups-btn" v-if="status == 1">
        <a href="" class="btn">取消订单</a>
        <a href="" class="btn green">付款<span class="settimeout">29:59</span></a>
    </div>
    <div class="order-groups-btn" v-if="status == 2">
        <a href="" class="btn">再次购买</a>
    </div>
    <div class="order-groups-btn" v-if="status == 3">
        <a href="" class="btn">查看物流</a>
        <a href="" class="btn green">确认收货</a>
    </div>
    <div class="order-groups-btn" v-if="status == 4">
        <a href="" class="btn">再次购买</a>
        <a href="" class="btn">申请售后</a>
    </div>
    <div class="order-groups-btn" v-if="status == 10">
        <a href="" class="btn">再次购买</a>
        <a href="" class="btn">删除订单</span></a>
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