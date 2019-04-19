<template>
    <div class="order">
        <m-header>
            <span slot="header-cont">我的订单</span>
        </m-header>
        <div class="mui-content myorder">
            <div class="tab-bar">
                <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted">
                    <a class="mui-control-item mui-active" href="javascript:;"><span>全部</span></a>
                    <a class="mui-control-item" href="order1.html"><span>待支付</span></a>
                    <a class="mui-control-item" href="order2.html"><span>待发货</span></a>
                    <a class="mui-control-item" href="order3.html"><span>已完成</span></a>
                    <a class="mui-control-item" href="order4.html"><span>已取消</span></a>
                </div>
            </div>
            
        </div>
    </div>

</template>
<script>
import mHeader from 'base/header/header'
import { apiOrderLists } from 'api/api'

export default {
    components:{
        mHeader
    },
    data(){
        return{
            lists:[]
        }
    },
    created(){
        this.getOrderLists()
    },
    methods:{
        getOrderLists(){
            apiOrderLists(1).then((result) => {
                if(result.status == 1){
                    console.log(result.data)
                }
            }).catch((err) => {
                
            });
        }
    }
}
</script>
<style>
@import '../../common/css/goods.css';
.tab-bar{background-color:#fff;}
.tab-bar .mui-segmented-control.mui-segmented-control-inverted .mui-control-item{color:#666;font-size:14px;}
.tab-bar .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{color:#333;border:none;}
.tab-bar .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active span{display:inline-block;border-bottom:2px solid #00A43E;}
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
.order-groups-btn .btn{display:inline-block;width:85px;height:30px;line-height:30px;font-size:13px;color:#333;border:1px solid #ddd;border-radius:5px;margin-left:6px;text-align: center;}
.order-groups-btn .btn.green{border-color:#00A43E;color:#00A43E;}
.order-groups-btn .settimeout{font-weight:600;padding-left:3px;}

</style>


