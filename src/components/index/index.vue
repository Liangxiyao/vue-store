<template>
  <div class="index">
    <header class="mui-bar mui-bar-nav index-header">
        <a class="mui-pull-left logo">
            <img src="../index/logo.png">
        </a>
        <h1 class="mui-title">姜力品牌</h1>
        <a class="m-icon-news mui-pull-right cur" href="systemMessage.html"></a>
    </header>
    <div class="mui-content m-index">

        <slider></slider>
      
        <ul class="mui-table-view mui-grid-view mui-grid-9 m-center-nav">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <span class="m-icon m-icon1"></span>
                    <div class="mui-media-body">我的电铺</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <span class="m-icon m-icon2"></span>
                    <div class="mui-media-body">发货追踪</div>
                </a>
            </li>
            <li class="mui-table-view-cell m-media mui-col-xs-4">
                <a href="#">
                    <span class="m-icon m-icon3"></span>
                    <div class="mui-media-body">鉴别真伪</div>
                </a>
            </li>
        </ul>
        <div class="m-recomand-list clearFix">
            <div class="m-title">
                <span class="tit">推荐商品</span>
                <div class="filter-info">
                    <div class="filter-btn fr" @click="dialogShow = !dialogShow">
                        <span class="txt">筛选</span>
                        <i class="icon-filter"></i>
                    </div>
                    <div class="filtered-list fr">
                        <!-- <span class="item">试用装 <i class="icon-del"></i></span>
                        <span class="item">试用装 <i class="icon-del"></i></span> -->
                    </div>
                </div>
            </div>
            <ul class="list-wrap clearFix">
                <li class="item mui-pull-left">
                    <div class="hd">
                        <a href="/goodsDetail">
                            <img src="http://starokay.b0.upaiyun.com/star/goods/2018-12-07/5c0a12a0c7a50.jpg">
                        </a>
                    </div>
                    <div class="dec">
                        <p class="ofellipsis name">全秘精油唇膏</p>
                        <p class="price">
                            <span><em>￥</em>108.00</span>
                            <s class="old-price"><em>￥</em>200</s>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <m-footer></m-footer>
    <filter-dialog :show="dialogShow" @closeDialog="closeDialog"></filter-dialog>
</div>
</template>
<script>
import Slider from "component/slider/slider.vue"
import mFooter from "component/footer/footer.vue"
import FilterDialog from "component/filter/filter.vue"
export default {
  components: {
    Slider,
    mFooter,
    FilterDialog
  },
  data(){
      return{
          dialogShow:false
      }
  },
  updated(){

  },
  methods:{
      closeDialog(val){
          this.dialogShow = val
      }
  }
};
</script>
<style lang="">
.m-index{padding-bottom:60px;max-width: 640px;margin:0 auto;}
.mui-bar{background-color:rgba(255,255,255,1);margin:0 auto;}
.mui-bar-nav{-webkit-box-shadow:none;box-shadow:none;padding:0 15px;}
.mui-bar-transparent{background-color:rgba(255,255,255,0);}
.mui-bar-transparent.mui-active{-webkit-box-shadow: 0 -1px 10px #dcdce6;box-shadow: 0 -1px 10px #dcdce6;}
.mui-bar-nav .logo{width:30px;height: 30px;margin-top:7px;}
.mui-bar-nav .mui-title{color:#000;font-weight:600;font-size:18px; }
.mui-bar-nav.mui-bar .mui-icon{font-size:28px;color:#353535;margin-top:-2px;margin-left:-20px;}
.mui-bar .mui-btn-link{color: #333;font-size: 14px;}
.mui-bar-nav .m-icon-news{width:22px;height: 22px;background: url(../index/icon2.png) no-repeat -5px -85px;background-size:30px;margin-top:11px;position:relative;}
.mui-bar-nav .m-icon-news.cur:after{content: '';position: absolute;right:-4px;top:-4px;width:8px;height:8px;background-color:#00a43e;border-radius:50%;}
.mui-pull-caption{font-size:13px}
.mui-spinner{width:16px;height:16px;}
.index-header .mui-title{text-align: left;margin-left: 10px;}

.mui-grid-view.m-center-nav{background-color:#fff;border:none;margin-top:-10px;margin-bottom:10px;}
.mui-grid-view.m-center-nav .mui-table-view-cell{border:none;padding:6px 15px;}
.mui-grid-view.m-center-nav .m-icon{display: block;width:35px;height:35px;background: url(../index/icon1-index.png) no-repeat -5px -5px;background-size:45px;margin:0 auto;}
.mui-grid-view.m-center-nav .m-icon2{background-position-y:-50px;}
.mui-grid-view.m-center-nav .m-icon3{background-position-y:-95px;}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{font-size:13px;}

.m-recomand-list{background-color:#fff;width:100%;}
.m-recomand-list .m-title{height:45px;line-height:20px;padding:13px 15px;}
.m-recomand-list .m-title .tit{font-size:16px;font-weight:600;color:#333;}
.m-recomand-list .list-wrap{padding-right:10px;}
.m-recomand-list .list-wrap .item{width:50%;padding:0 0 15px 15px;margin-right:-5px;}
.m-recomand-list .item .hd{width:100%;overflow: hidden;margin-bottom:10px;}
.m-recomand-list .item .hd a{display:block;width:100%;padding:50% 0;position:relative;border-radius:5px;overflow: hidden;}
.m-recomand-list .item .hd img{position:absolute;top:0;left:0;height:100%;}
.m-recomand-list .item .dec{padding:0 2px;}
.m-recomand-list .item .dec .name{font-size:14px;color:#333;margin-bottom:10px;line-height:14px;}
.m-recomand-list .item .dec .price{font-size:16px;color:#333;line-height:16px;}
.m-recomand-list .item .dec .price em{font-size:13px;}
.m-recomand-list .item .dec .price .old-price{font-size:11px;color:#999;padding-left:5px;}
.m-recomand-list .filter-info{float:right;width:80%;}
.m-recomand-list .filtered-list{max-width:90%;overflow: hidden;height: 25px;}
.m-recomand-list .filter-btn{font-size:12px;}
.m-recomand-list .filter-btn .icon-filter{display:inline-block;vertical-align: middle;font-size:0;width:15px;height:20px;
background: url(../index/icon2.png) no-repeat -11px -45px;background-size:40px;}
.m-recomand-list .filtered-list .item{float:right;height:20px;line-height:20px;padding:0 5px;
border:1px solid #ddd;border-radius:3px;font-size:12px;color:#666;margin-right:5px;}
.m-recomand-list .filtered-list .item .icon-del{float: right;width:15px;height:18px;background: url(../index/icon2.png) no-repeat -3px -2px;background-size:26px;}

</style>