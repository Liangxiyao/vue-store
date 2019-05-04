<template>
    <div class="myself">
        <m-header class="mui-bar-transparent" :gobackBtn='false'>
            <span slot="header-cont" class="header-cont">我的</span>
            <a slot="header-right" class="mui-icon  mui-pull-right iconfont  icon-shezhi" href="javascript:;"></a>
        </m-header>
        <div class="mui-content">
            <dl class=" mui-dl">
                <dt class="fl"><img src="/static/images/logo.png" /></dt>
                <dd class="ofellipsis">小雪是谁</dd>
                <dd>查看并编辑个人信息</dd>
            </dl>
            <div class="mui-order">
                <a href="/order">
                    <h4>我的订单</h4>
                    <i class="iconfont icon-jiantou fr"></i>
                </a>
                <ul class="mui-grid-view">
                    <li class="mui-orderBox fl">
                        <a  href="order?state=1">
                            <span class="mui-icon-order mui-icon-order_1"></span>
                            <div class="mui-media-body">待支付</div>
                        </a>
                    </li>
                    <li class="mui-orderBox fl">
                        <a href="order?state=5">
                            <span class="mui-icon-order mui-icon-order_6"></span>
                            <div class="mui-media-body">审核中</div>
                        </a>
                    </li>
                    <li class="mui-orderBox fl">
                        <a href="order?state=2">
                            <span class="mui-icon-order mui-icon-order_2"></span>
                            <div class="mui-media-body">待发货</div>
                        </a>
                    </li>
                    <li class="mui-orderBox fl">
                        <a href="order?state=3">
                            <span class="mui-icon-order mui-icon-order_3"></span>
                            <div class="mui-media-body">已发货</div>
                        </a>
                    </li>
                    <li class="mui-orderBox fl">
                        <a href="order?state=4">
                            <span class="mui-icon-order mui-icon-order_4"></span>
                            <div class="mui-media-body">已完成</div>
                        </a>
                    </li>
                    <!-- <li class="mui-orderBox fl">
                        <a href="order?state=10">
                            <span class="mui-icon-order mui-icon-order_5"></span>
                            <div class="mui-media-body">已取消</div>
                        </a>
                    </li> -->
                </ul>
            </div>
            <div class="mui-card">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="mui-icon-nav icon-01 fl"></span>我的信息
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right"><span class="mui-icon-nav icon-02 fl"></span>常用地址</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="mui-icon-nav icon-03 fl"></span>我的卡券
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="mui-icon-nav icon-04 fl"></span>我的授权
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="mui-icon-nav icon-05 fl"></span>我的送礼
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="mui-icon-nav icon-06 fl"></span>联系客服
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <m-footer></m-footer>
    </div>
</template>
<script>
import mHeader from 'base/header/header'
import mFooter from "base/footer/footer"

export default {
    components:{
        mHeader,
        mFooter
    },
    data(){
        return{
            
        }
    }
}
</script>
<style>
.myself .mui-content{padding-top:0}
.mui-title .header-cont{opacity:0;transition:all .2s;}
.mui-active .header-cont{opacity:1;}
.myself .mui-bar.mui-bar-transparent .icon-shezhi {display: block; font-size: 20px;color:#fff;padding:12px 10px;transition:all .2s;}
.mui-bar.mui-bar-transparent.mui-active .icon-shezhi{color:#333}
.mui-dl {width: 100%;height: 145px;background: url(../../common/images/meback.jpg) no-repeat 0 center;background-size: 100% 100%;padding:40px 15px 15px;color:#fff;}
.mui-dl dt img{width: 60px; height: 60px;background: #fff; border-radius: 50%; padding: 2px; margin-right: 10px;}
.mui-dl dd{line-height:37px; font-size: 18px;font-weight: 600; }
.mui-dl dd:last-child{line-height: 20px; font-size:15px;font-weight: 100; opacity: .7; }
.mui-order{ padding:12px 15px; background: #fff; margin: 0px 15px; margin-top: -24px;border-radius: 6px; overflow: hidden;}
.mui-order a{width: 100%; display: block;}
.mui-order a:active{color: #333;}
.mui-order a h4{ color: #333;font-size: 16px;font-weight: 600; height: 34px; line-height: 34px; display: inline-block;}
.mui-order a .icon-jiantou{font-size: 18px; color: #ccc; margin-top:8px;margin-right: -5px;}
.mui-grid-view{padding: 20px 0 10px; overflow: hidden;}
.mui-orderBox{width: 20%; color: #333; font-size: 14px; text-align: center;}
.mui-orderBox .mui-icon-order{display: block; width:26px; height: 30px; margin: 0 auto; background: url(../../common/images/iocn01.png) no-repeat; background-size:164px; background-position: 0 0;}
.mui-orderBox .mui-icon-order_2{background-position: -43px 0px;}
.mui-orderBox .mui-icon-order_3{width:30px; background-position: -76px 0px;}
.mui-orderBox .mui-icon-order_4{background-position: -113px 0px;}
.mui-orderBox .mui-icon-order_5{background-position: -113px -38px;}
.mui-orderBox .mui-icon-order_6{background-position: -113px -76px;}
.mui-card{padding: 6px 0; background: #fff; margin: 15px 15px 80px;border-radius: 5px; overflow: hidden;box-shadow: none;}
.mui-navigate-right:after{font-size: 22px;color: #ccc;right: 10px;}
.mui-table-view-cell{padding: 12px 15px;line-height: 23px;}
.mui-table-view-cell .mui-navigate-right .mui-icon-nav{display: block; width:35px; height: 24px; margin: 0 auto; background: url(../../common/images/iocn01.png) no-repeat; background-size:164px; background-position: 0px -37px;}
.mui-table-view-cell:after{left: 50px; background: #ddd;}
.mui-table-view-cell>a:not(.mui-btn){color: #333; font-size: 15px;}
.mui-table-view-cell .mui-navigate-right .icon-02{background-position: 0px -75px;}
.mui-table-view-cell .mui-navigate-right .icon-03{background-position: 0px -115px;}
.mui-table-view-cell .mui-navigate-right .icon-04{background-position: 0px -152px;}
.mui-table-view-cell .mui-navigate-right .icon-05{background-position: 0px -191px;}
.mui-table-view-cell .mui-navigate-right .icon-06{background-position: 0px -227px;}
.mui-table-view-cell>a:not(.mui-btn).mui-active{background: #fff;}

</style>


