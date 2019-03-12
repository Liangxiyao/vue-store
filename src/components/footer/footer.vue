<template>
  <nav class="mui-bar mui-bar-tab footer-nav">
    <a class="mui-tab-item mui-active" href="component/index/index.html">
      <span class="mui-icon m-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </a>
    <a class="mui-tab-item" href="component/shopManage/shopManage.html">
      <span class="mui-icon m-icon-set"></span>
      <span class="mui-tab-label">店铺管理</span>
    </a>
    <a class="mui-tab-item" href="component/shopCart/shopCart.html">
      <span class="mui-icon m-icon-cart">
        <i class="icon-num">55</i>
      </span>
      <span class="mui-tab-label">购物车</span>
    </a>
    <a class="mui-tab-item" href="component/myself/myself.html">
      <span class="mui-icon m-icon-mine"></span>
      <span class="mui-tab-label">我的</span>
    </a>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style>
.footer-nav{background-color: #fff;-webkit-box-shadow: 0 -1px 10px #dcdce6;
    box-shadow: 0 -1px 10px #dcdce6;margin-bottom: constant(safe-area-inset-bottom);margin-bottom: env(safe-area-inset-bottom)}
.mui-bar-tab .mui-tab-item{color:#333;}
.footer-nav .mui-icon{width: 20px;height:20px;background: url(../footer/icon-fixednav.png) no-repeat -5px -5px;background-size:60px;}
.footer-nav .m-icon-set{background-position-y:-35px;}
.footer-nav .m-icon-cart{background-position-y:-65px;}
.footer-nav .m-icon-mine{background-position-y:-95px;}
.footer-nav .mui-tab-item.mui-active{color:#00a43e;font-weight:600;}
.footer-nav .mui-tab-item.mui-active .mui-icon{background-position-x:-35px;}
.footer-nav .m-icon-cart{position:relative;}
.footer-nav .m-icon-cart .icon-num{position: absolute;top:-5px;left:10px;padding:3px 4px 2px 4px;line-height:10px;
background-color:#00a43e;color:#fff;font-size:12px;border-radius:10px;}
</style>


