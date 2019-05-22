<template>
<div class="doCharge">
    <m-header>
        <span slot="header-cont">分店贷款转账</span>
    </m-header>
    <div class="mui-content transfer">
        <!-- 可输入的搜索框 -->
        <div class="search-input">
            <input type="search" class="mui-input-clear" id="input" placeholder="">
            <i class="iconfont icon-shibai "></i>
        </div>
        <!-- 主内容 -->
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <div class="hd">
                    <div class="tit">可转账贷款金额（元）</div>
                    <div class="money">25462.5</div>
                    <div class="tip">*锁定金额79800元，保证金应交30000元，实交30000元</div>
                </div>
                <div class="bd">
                    <div class="search-replace mui-table-view-cell">
                        <i class="iconfont icon-search"></i>
                        <span>搜索分店</span>
                    </div>
                    <ul class="main">
                        <li class="mui-table-view-cell mui-radio mui-left">
                            <input name="radio" type="radio">
                            <div class="person-info wbox">
                                <img class="photo" src="static/images/id2.png">
                                <div class="cont wbox-flex">
                                    <p class="name">张三</p>
                                    <p class="txt">官方合作伙伴</p>
                                </div>
                                <span class="days fr">1年11天</span>
                            </div>
                        </li>
                        <li class="mui-table-view-cell mui-radio mui-left">
                            <input name="radio" type="radio">
                            <div class="person-info wbox">
                                <img class="photo" src="static/images/id2.png">
                                <div class="cont wbox-flex">
                                    <p class="name">张三</p>
                                    <p class="txt">官方合作伙伴</p>
                                </div>
                                <span class="days fr">1年11天</span>
                            </div>
                        </li>
                    </ul>
                    <!--这里放置真实显示的DOM内容-->
                </div>
            </div>
        </div>
        <div class="bt-area">
            <button type="button" class="btn">转账</button>
        </div>
    </div>
</div>
</template>
<script>
import mHeader from 'base/header/header'

export default {
    components:{
        mHeader
    }    
}
</script>
<style>
.transfer .hd{background-color:#fff;padding:20px 15px;text-align: center;font-size:13px;}
.transfer .hd .money{font-size:32px;color:#00A43E;margin-top:12px;}
.transfer .hd .tip{font-size:12px;color:#999;margin-top:15px;}
.transfer .bd{margin:15px;background-color:#fff;border-radius:5px;overflow:hidden;}
.transfer .bd .search-replace{text-align: center;font-size:13px;color:#999;height:50px;line-height:48px;padding:0;}
.transfer .bd .search-replace .icon-search{font-size:18px;position:relative;top:2px;}

.transfer .mui-scroll-wrapper{top:44px;bottom:60px;}
.transfer .bd .mui-table-view-cell.mui-radio.mui-left{padding:10px 15px 10px 38px;background-color:#fff;}
.transfer .bd .mui-table-view-cell:after{left:0;background-color:#ddd;}
.transfer .bd .mui-radio input[type=radio]{width:20px;height:20px;left:10px;top:17px;}
.transfer .bd .mui-radio input[type=radio]:before{font-size:20px;}
.transfer .bd .mui-radio input[type=radio]:checked:before{color:#00A43E;}
.transfer .bd .person-info{display: -webkit-flex;display: flex;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content: space-around;
    align-content: space-around;flex-direction: row;font:12px/15px PingFang-SC-Medium;color:#999;}
.transfer .bd .photo{width:30px;height:30px;border-radius:50%;margin-right:10px;margin-top:5px;}
.transfer .bd .name{font-size:13px;color:#333;}
.transfer .bd .txt{font-size:11px;margin-top:5px;}
.transfer .bd .days{line-height:35px;}
.transfer .bt-area{position:fixed;left:0;right:0;background-color:#fff;bottom:0;bottom: constant(safe-area-inset-bottom);bottom: env(safe-area-inset-bottom);
padding:10px 15px;z-index:10;}
.transfer .bt-area .btn{background:#00A43E;width:100%;height:40px;border-radius:5px;color:#fff;}


</style>


