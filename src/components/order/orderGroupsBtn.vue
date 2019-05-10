<template>
<div class="order-groups">
    <div class="order-groups-btn" v-if="status == 1">
        <span class="btn"  @click="closeOrder">取消订单</span>
        <router-link to="" class="btn green">付款<span class="settimeout">29:59</span></router-link>
    </div>
    <div class="order-groups-btn" v-if="status == 2">
        <router-link to="/index" class="btn">再次购买</router-link>
    </div>
    <div class="order-groups-btn" v-if="status == 3">
        <router-link :to="{path:'/logistics',query:{orderId:orderId}}" class="btn">查看物流</router-link>
        <span class="btn green"  @click.native="orderConfirm">确认收货</span>
    </div>
    <div class="order-groups-btn" v-if="status == 4">
        <router-link to="" class="btn">再次购买</router-link>
        <router-link to="" class="btn">申请售后</router-link>
    </div>
    <!-- <div class="order-groups-btn" v-if="status == 10">
        <router-link to="/index" class="btn">再次购买</router-link>
       <span class="btn"  @click="closeOrder">删除订单</span>
    </div> -->
</div> 
</template>
<script>
import { apiCloseOrder,apiOrderConfirm } from 'api/api';
export default {
    props:['status','orderId'],
    data() {
        return {

        }
    },
    methods: {
        //关闭订单
        closeOrder() {
             console.log(this.orderId)
            apiCloseOrder({
                order_id:this.orderId
            }).then((result) => {
                if(result.status == 1){
                    alert('取消成功')
                }else{
                    alert(result.msg)
                }
                
            }).catch((err) => {
                
            });
        },
        orderConfirm(){
            alert('调用支付接口')
        }
    }
}
</script>

<style >
.order-groups-btn .btn{display:inline-block;width:85px;height:30px;line-height:30px;font-size:13px;color:#333;border:1px solid #ddd;border-radius:5px;margin-left:6px;text-align: center;}
.order-groups-btn .btn.green{border-color:#00A43E;color:#00A43E;}
.order-groups-btn .settimeout{font-weight:600;padding-left:3px;}
</style>