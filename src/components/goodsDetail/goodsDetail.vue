<template>
  <div class="">
    <div class="mui-content goodsDetail">
      <slider :lists="bannerImgs"></slider>
      <div class="goods-desc">
        <div class="name ofellipsis2">{{goodsInfo.goods_name}}</div>
        <div class="price-wrap clearFix">
          <span class="price">
            <em>￥</em>{{goodsInfo.price}}
          </span>
          <s class="old-price">
            <em>￥</em>{{goodsInfo.market_price}}
          </s>
          <span class="sale-num fr">月销售{{goodsInfo.monthSellNum}}笔</span>
        </div>
        <ul class="rules mui-row">
          <li class="mui-table-view-cell mui-col-xs-4">
            <i class="iconfont icon-rules"></i>官方正品保障
          </li>
          <li class="mui-table-view-cell mui-col-xs-4">
            <i class="iconfont icon-rules"></i>七天无理由退货
          </li>
          <li class="mui-table-view-cell mui-col-xs-4">
            <i class="iconfont icon-rules"></i>满199包邮
          </li>
        </ul>
      </div>
      <div class="sku-enter mui-table-view-cell">
        <a class="mui-navigate-right" href="javascript:;" @tap="dialogShow = true">选择商品规格</a>
      </div>
      <div class="details">
        <div class="tit">图文详情</div>
        <div class="cont">
          <img src="http://starokay.b0.upaiyun.com/star/editorImg/2017-11-07/5a0173a418ede.jpg">
        </div>
      </div>
      <div class="buy-wrap pr wbox">
        <div class="item togift">
          <i class="icon"></i>
          <span class="txt">送礼</span>
        </div>
        <div class="item addCart">
          <a href="shopCart.html">
            <i class="icon"></i>
            <span class="txt">购物车</span>
          </a>
        </div>
        <div class="btns-groups wbox-flex wbox">
          <a class="btn to-car wbox-flex" href="javascript:;" @tap="dialogShow = true">加入购物车</a>
          <a class="btn to-buy wbox-flex" href="javascript:;" @tap="dialogShow = true">立即购买</a>
        </div>
      </div>
    </div>
    <choose-sku :show='dialogShow' 
                :skuList='skuList'
                @closeDialog='closeDialog'></choose-sku>
  </div>
</template>
<script>
import Slider from "base/slider/slider"
import ChooseSku from "component/chooseSku/chooseSku";
export default {
  components: {
      Slider,
      ChooseSku
  },
  data(){
      return{
          dialogShow:false,
          goodsInfo:{},
          bannerImgs:[], //banner 图片
          skuList:[]
      }
  },
  watch:{
      goodsInfo(val){
          this.bannerImgs.push({src:val.imgs})
          this.skuList = val.sku
      }
  },
  created(){
      this._getGoodsList()
  },
  updated(){
      console.log(this.dialogShow)
  },
  methods:{
      _getGoodsList(){
          this.$get('api/shop/item',{main_goods_id:1})
          .then((result) => {
              let  info = result.data 
              if(info){
                  this.goodsInfo = info
              }
          }).catch((err) => {
              
          })
      },
      closeDialog(val){
          this.dialogShow = val
      }
  }
};
</script>

<style>
.goodsDetail-header .mui-title .mui-segmented-control{width:160px;margin:0 auto;opacity:0;transition:transform 1s;}
.goodsDetail-header.mui-active .mui-segmented-control{opacity:1;}
.goodsDetail-header .tab-header .mui-segmented-control{top:0}
.goodsDetail-header .mui-segmented-control .mui-control-item{color:#666;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{border:none;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active span{display:inline-block;border-bottom:2px solid #00A43E;color:#333;}
.goodsDetail-header .mui-segmented-control .mui-control-item{line-height:42px;}
.goodsDetail-header .mui-icon:before{display: block;width: 33px;height:33px;line-height:33px;background:rgba(255,255,255,.4);border-radius:50%;text-align: center;font-size:20px;}
.goodsDetail-header .mui-action-back:before{font-size:24px;}

.goodsDetail .mui-slider  .mui-slider-item{padding:0;padding-top:100%;}
.goodsDetail .mui-slider  .mui-slider-item img{position:absolute;top:0;left:0;-webkit-box-shadow:none;box-shadow:none;}
.goodsDetail .goods-desc,.sku-enter{background-color:#fff;padding:15px;}
.goodsDetail .goods-desc .name{font-size:15px;color:#333;margin-bottom:10px;}
.goodsDetail .goods-desc .price-wrap{margin-bottom:10px;font-size:12px;color:#ccc;}
.goodsDetail .goods-desc .price-wrap .price{font-size:20px;color:#333;font-weight:600;}
.goodsDetail .goods-desc .price-wrap .price em{font-size:17px;}
.goodsDetail .goods-desc .price-wrap .old-price{font-size:13px;padding-left:5px;}
.goodsDetail .rules{border-top:1px solid #ddd;font-size:12px;color:#333;}
.goodsDetail .rules .mui-table-view-cell{padding:13px 0 0 0;line-height:24px;}
.goodsDetail .rules .mui-table-view-cell:after{display: none;}
.goodsDetail .rules .mui-table-view-cell .iconfont{padding-right:2px;font-size:13px}
.goodsDetail .sku-enter{margin:10px auto;padding:15px;height:50px;}
.goodsDetail .sku-enter:after{display: none;}
.goodsDetail .sku-enter.mui-table-view-cell{line-height:20px;font-size:15px;color: #333;}
.goodsDetail .sku-enter.mui-table-view-cell .mui-navigate-right{margin-top:-15px;}
.goodsDetail .sku-enter.mui-table-view-cell .mui-navigate-right:after{font-size:20px;}
.goodsDetail .details{padding-bottom:60px;}
.goodsDetail .details .tit{background-color: #fff;height:50%;line-height:50px;padding:0 15px;font-size:15px;color:#333;position: relative;}
.goodsDetail .details .tit:before{display: inline-block;vertical-align:middle;content:'';width:2px;height:15px;background-color:#00a43e;margin-top:-4px;margin-right:10px;}
.goodsDetail-header.mui-bar .mui-icon{padding-top:6px;}

.buy-wrap{width: 100%;background:#fff;position:fixed;left:0;bottom:0;margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom);z-index:9;clear: both;padding:10px 10px 10px 0;}
.buy-wrap .btns-groups{border-radius:5px;overflow: hidden;}
.buy-wrap .btn{font-size:16px;height:40px;line-height:40px;background: #333;text-align: center;color:#fff;}
.buy-wrap .to-buy{background:#00A43E;color:#fff;}
.buy-wrap .item{width:13.5%;background: #fff;text-align: center;}
.buy-wrap .item .icon{display: block;width:22px;height:20px;background:url(../../common/images/icon-fixednav.png) no-repeat -5px -65px;background-size:60px;margin:0 auto;}
.buy-wrap .togift .icon{background: url(../../common/images/prise.png) no-repeat 0 0;background-size:22px;}
.buy-wrap .item .txt{font-size:11px;color:#333;display:block;height:12px;}

</style>

