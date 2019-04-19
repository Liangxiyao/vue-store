<template>
<div class="shopManage">
    <m-header>
        <span slot="header-cont">店铺管理</span>
        <a slot="header-right" class="mui-btn-link mui-pull-right operate" href="javascript:;">营业执照</a>
    </m-header>
    <div class="mui-content">
        <div class="mui-shop_img">
            <div class="mui-card-shopBox">
                <dl class="mui-dl"  v-if="shopData.info">
                    <dt class="fl pr">
                        <img v-if="shopData.info.logo === null || shopData.info.logo===''" src="static/images/logo.png" alt="默认图">
                        <img v-else :src="shopData.info.logo" alt="图片">  
                        <span></span>
                    </dt>
                    <dd class="ofellipsis" v-if="">{{shopData.info.shop_name?shopData.info.shop_name:''}}</dd>
                    <dd>{{shopData.info.levelname}}</dd>
                </dl>
            </div>
            <div class="statistics" v-if="shopData.statistics">
                <div class="mui-achievement" >
                    <p>今日业绩（元）</p>
                    <h4>{{shopData.statistics.actualAmount}}</h4>
                </div>
                <div class="mui-dayBox">
                    <ul>
                        <li><p>今日订单数：<span>{{shopData.statistics.orderNumbers}}</span></p></li>
                        <li><p>今日浏览量：<span>{{shopData.statistics.views}}</span></p></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mui-content_jiu mui-contBox">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"  v-for="item in shopData.shopmodule" :key="item.name">
                    <a :href="item.name">
                        <span class="mui-icon2" :class="`mui-icon2-${item.name}`">
                            <span class="mui-badge" v-if="item.name == 'mybranch' && mybranch" >{{mybranch}}</span>
                            <span class="mui-badge" v-if="item.name == 'orderdeal' && orderdeal" >{{orderdeal}}</span>
                        </span>
                        <div class="mui-media-body">{{item.text}}</div>
                    </a>
                </li>
            </ul> 
        </div>
    </div>
    <m-footer></m-footer>
</div>
</template>
<script>
import mHeader from "base/header/header"
import mFooter from "base/footer/footer"
import { apiShopManage ,apiBranch } from "api/api"

export default {
    components:{
        mHeader,
        mFooter
    },
    data(){
        return{
            shopData:{},
            mybranch:0,
            orderdeal:2 
        }
    },
    computed: {
        
    },
    created(){
        this._getShopInfo()
        this.getBranch()
    },
    methods:{
        _getShopInfo(){
            apiShopManage().then((result) => {
                if(result.status == 1){
                    this.shopData = result.data
                    console.log(this.shopData.info)
                }else if(result.status == 99){
                    alert('请登录')
                    window.location.href = '/login'
                }else{
                    alert(result.msg)
                }
            }).catch((err) => {
                
            });
        },
        getBranch(){
            apiBranch(1).then((result) => {
                if(result.status == 1){
                    this.branchNum = result.data.number.unacceptNum
                }else{
                    alert(result.msg)
                }
            }).catch((err) => {
                
            });
        }
    }
    
}
</script>
<style>
.mui-shop_img{background: #fff; width: 100%;padding-top:10px}
.mui-card-shopBox{ width: 92%; margin: 0 auto; height: 100px;background: url(../../common/images/shopbg.png) no-repeat;
 background-size: 100% 100%; border-radius: 6px;box-shadow: 4px 4px 16px #ddd;color:#fff;padding:15px;}
.mui-card-shopBox .mui-dl{margin-top:5px}
.mui-card-shopBox .mui-dl dt{width: 60px; height: 60px;background: #fff; border-radius: 50%; padding: 2px; margin-right: 10px;}
.mui-card-shopBox .mui-dl dt img{width:100%;height:100%;}
.mui-card-shopBox .mui-dl dd{height:37px;line-height:37px; font-size: 18px;font-weight: 600; }
.mui-card-shopBox .mui-dl dd:last-child{line-height: 20px; font-size:15px;font-weight: 100; opacity: .7; }
.mui-card-shopBox .mui-dl dt span{width:18px; height: 18px; background: url(../../common/images/v.png) no-repeat;background-size: 100%; position: absolute;bottom: 0; right:10px; z-index: 9;}
.mui-shop_img .mui-achievement{text-align: center; margin: 0 15px; padding: 15px 0px; border-bottom: 1px solid #eee; font-size: 18px;}
.mui-shop_img .mui-achievement p{font-size: 14px;}
.mui-shop_img .mui-achievement h4{font-size: 28px; color: #009d40; margin-top: 5px; font-weight: 600;}
.mui-shop_img .mui-dayBox{ margin: 0 15px;padding: 15px 0;}
.mui-shop_img .mui-dayBox ul{width:100%;overflow: hidden;}
.mui-shop_img .mui-dayBox ul li{width:50%; float: left; text-align: center;}
.mui-shop_img .mui-dayBox ul li:last-child{ border-left: 1px solid #eee;}
.mui-shop_img .mui-dayBox ul li span{ color: #333;font-weight: 600;}
.mui-content_jiu .mui-contBox .mui-grid-view.mui-grid-9{background: #fff; padding: 15px 0;}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon2{display: block; width: 75px; height: 75px;  margin: 0 auto;  background: url(../../common/images/icon02.png) no-repeat; background-size: 100%;position: relative; background-size:230px; background-position: 0 0;}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon2 .mui-badge {font-size: 10px; line-height: 1.4;position: absolute; top: 2px; right: 0; margin-left: -10px; padding: 1px 6px; color: #fff;background: #00a43e;border-radius: 100px;box-shadow: 0px 1px 8px #81c49a;}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon2-share{background-position: -74px -74px;}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon2-statistics{background-position: -148px 0px;}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon2-mybranch{background-position: 0px -74px;}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon2-orderdeal{background-position: -74px 0px;}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon2-car{background-position: 0px -148px;}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon2-myaccount{background-position: -155px -74px;}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{border:none; padding: 2px 0;}
.mui-content_jiu .mui-grid-view.mui-grid-9{border:none; background: #fff;margin:15px 0 80px;}

</style>

