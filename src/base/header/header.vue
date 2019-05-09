<template>
<header class="mui-bar mui-bar-nav">
	<!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" v-if="gobackBtn" href="javascript:history.go(-1);"></a> -->
    <span class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back()"  v-if="gobackBtn" ></span>
	<h1 class="mui-title"><slot name="header-cont"></slot></h1>
	<!-- <a class="mui-btn-link mui-pull-right operate" href="javascript:;">管理</a> -->
    <slot name="header-right"></slot>
</header>
</template>
<script>
export default {
    props:{
        gobackBtn:{
            type:Boolean,
            default:true
        }
    }
}
</script>
<style>
.mui-bar{background-color:rgba(255,255,255,1);margin:0 auto;}
.mui-bar-nav{-webkit-box-shadow:none;box-shadow:none;padding:0 15px;}
.mui-bar-transparent{background-color:rgba(255,255,255,0);}
.mui-bar-transparent.mui-active{-webkit-box-shadow: 0 -1px 10px #dcdce6;box-shadow: 0 -1px 10px #dcdce6}
.mui-bar-nav .logo{width:30px;height: 30px;margin-top:7px;}
.mui-bar-nav .mui-title{color:#000;font-weight:600;font-size:18px; }
.mui-bar-nav.mui-bar .mui-icon{font-size:28px;color:#353535;padding-top:8px;padding-bottom:8px;margin-left:-20px}
.mui-bar .mui-btn-link{color: #333;font-size: 14px;}
.mui-bar-nav .m-icon-news{width:22px;height: 22px;background: url(../../common/images/icon2.png) no-repeat -5px -85px;background-size:30px;margin-top:11px;position:relative;}
.mui-bar-nav .m-icon-news.cur:after{content: '';position: absolute;right:-4px;top:-4px;width:8px;height:8px;background-color:#00a43e;border-radius:50%;}
</style>
