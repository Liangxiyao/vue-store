<template>
<div class="logistics">
    <m-header>
        <span slot="header-cont">物流信息</span>
    </m-header>
    <div class="mui-content">
        <div class="hd">
            <div class="item">快递公司：{{logistics[0].delivery}}</div>
            <div class="item">快递单号：{{logistics[0].delivery_sn}}</div>
            <div class="item">快递电话：<span class="green"></span></div>
        </div>
        <div class="bd">
            <ul class="lists" v-if="logistics">
                <li class="item" v-for="item in logistics" :key="item.id">
                    <div class="text" >{{item.delivery_trace_new.status}}</div>
                    <div class="date">{{item.delivery_trace_new.time}}</div>
                    <!-- <div class="date">2019-01-20<span class="time">21:20:20</span> </div>-->
                </li>
            </ul>
            <div v-else>暂无物流信息</div>
        </div>
    </div>
</div>
</template>

<script>
import mHeader from 'base/header/header'
import { apiLogistics } from 'api/api';
export default {
    props: {
        orderId: {
            type: String,
            default: ''
        },
    },
    components:{
        mHeader
    },
    data() {
        return {
            logistics:[
                {
                    delivery:'',
                    delivery_sn:'',
                    delivery_trace_new:{}
                }
            ]
        }
    },
    created(){
        this._getLogistics()
    },
    methods: {
        _getLogistics() {
            apiLogistics({
                order_id:this.$route.query.orderId
            }).then((result) => {
                console.log(result)
                if(result.status == 1){
                    this.logistics = result.data
                }
            }).catch((err) => {
                
            });
        }
    },
};
</script>

<style >
.logistics .hd{background-color:#fff;padding:10px 14px;line-height:20px;font-size:13px;color:#333;margin-bottom:15px;}
.logistics .hd .green{color:#00A43E;}
.logistics .bd{padding:20px 15px;background-color:#fff;font-size:13px;color:#999;line-height:18px;}
.logistics .bd .date{font-size:12px;margin-top:3px;}
.logistics .bd .date .time{padding-left:5px;}
.logistics .bd .item{border-left:1px dashed #ccc ;padding:0 0 20px 15px;position:relative;}
.logistics .bd .item:before{content:'';position:absolute;top:0;left:-4px;width:8px;height:8px;border-radius:50%;background-color:#ccc;}
.logistics .bd .item .text{position:relative;top:-3px;}
.logistics .bd .item:first-of-type:before{width:12px;height:12px;background: url(../../common/images/order-icon.png) no-repeat -4px -79px;background-size:20px;left:-6px;border-radius:0;}
.logistics .bd .item:first-of-type .text{color:#333;}
.logistics .bd .item:last-of-type{border-left:0;}

</style>