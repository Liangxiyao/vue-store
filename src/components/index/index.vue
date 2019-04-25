<template>
  <div class="index">
    <header class="mui-bar mui-bar-nav index-header">
        <a class="mui-pull-left logo">
            <img src="static/images/logo.png">
        </a>
        <h1 class="mui-title">姜力品牌</h1>
        <a class="m-icon-news mui-pull-right cur" href="systemMessage.html"></a>
    </header>
    <div class="mui-content m-index">
        <slider :lists="bannerList"></slider>
      
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
                    <div class="mui-media-body">转发推广</div>
                </a>
            </li>
            <li class="mui-table-view-cell m-media mui-col-xs-4">
                <a href="#">
                    <span class="m-icon m-icon3"></span>
                    <div class="mui-media-body">订单管理</div>
                </a>
            </li>
        </ul>
        <goods-list :lists="goodsList" :dialogLock='dialogLock' @dialogFn='dialogFn' @showItemFn='showItemFn'></goods-list>
        <!-- <div class="m-recomand-list clearFix">
            <div class="m-title">
                <span class="tit">推荐商品</span>
                <div class="filter-info">
                    <div class="filter-btn fr" @click="dialogShow = !dialogShow">
                        <span class="txt">筛选</span>
                        <i class="icon-filter"></i>
                    </div>
                    <div class="filtered-list fr">
                        <!-- <span class="item">试用装 <i class="icon-del"></i></span>
                        <span class="item">试用装 <i class="icon-del"></i></span> 
                    </div>
                </div>
            </div>
            <goods-list :lists="goodsList"></goods-list>
        </div> -->
    </div>
    <m-footer></m-footer>
    <filter-dialog  @closeDialog="closeDialog" 
                    :show="dialogLock"
                    :brand="brandList"
                    :tag="tagList"
                    @showItemFn='showItemFn'
                    @dialogFn="dialogFn"
                    ></filter-dialog>
</div>
</template>
<script>
import Slider from "base/slider/slider"
import mFooter from "base/footer/footer"
import GoodsList from "base/goodsList/goodsList"
import FilterDialog from "base/filter/filter"  
import {apiIndexInfo,apiIndexGoodsList} from "api/api"
import storage from 'common/js/storage';

export default {
  components: { 
    Slider,
    mFooter,
    GoodsList,
    FilterDialog,
  },
  data(){
      return{
          dialogLock:false,
          goodsList:[],
          bannerList:[],
          brandList:[],
          tagList:[],
      }
  },
  created(){
      this._getGoodsList()
      this._getIndexData()
  },
  computed:{
      sku(){
          return this.$store.state.indexSku
      }
  },
  methods:{
    _getIndexData(){
        apiIndexInfo().then((result) => {
            if(result.status == 1){
                let data = result.data
                if(data.banner.length){
                    this.bannerList = data.banner
                }
                if(data.brand.length){
                    this.brandList = data.brand
                }
                if(data.tag.length){
                    this.tagList = data.tag
                }
            }else{
                alert(result.msg)
            }
            
        }).catch((err) => {
            console.log(err)
        })
    },
    _getGoodsList(data){
        apiIndexGoodsList(data).then((result) => {
            if(result.status == 1){
                let lists = result.data
                if(lists != -1){
                this.goodsList = lists.list
                }else{
                    alert('没有数据')
                }
            }else{
                alert(result.msg)
            }  
        }).catch((err) => {
            console.log(err)
        })
    },
    dialogFn(val){
        this.dialogLock = val
    },
    closeDialog(val){
        this.dialogLock = false
    },
    showItemFn(val){
        this.dialogLock = false
        let data = {
            brand_id:val.brand?val.brand.id:'',
            tag_id:val.tag?val.tag.id:''
        }
        this._getGoodsList(data)
        
    },
  }
}
</script>
<style lang="" scope>
.m-index{padding-bottom:60px;max-width: 640px;margin:0 auto;}
.mui-bar{background-color:rgba(255,255,255,1);margin:0 auto;}
.mui-bar-nav{-webkit-box-shadow:none;box-shadow:none;padding:0 15px;}
.mui-bar-nav .logo{width:30px;height: 30px;margin-top:7px;}
.mui-bar-nav .mui-title{color:#000;font-weight:600;font-size:18px; }
.mui-bar-nav.mui-bar .mui-icon{font-size:28px;color:#353535;margin-top:-2px;margin-left:-20px;}
.mui-bar .mui-btn-link{color: #333;font-size: 14px;}
.mui-bar-nav .m-icon-news{width:22px;height: 22px;background: url(../../common/images/icon2.png) no-repeat -5px -85px;background-size:30px;margin-top:11px;position:relative;}
.mui-bar-nav .m-icon-news.cur:after{content: '';position: absolute;right:-4px;top:-4px;width:8px;height:8px;background-color:#00a43e;border-radius:50%;}
.mui-pull-caption{font-size:13px}
.mui-spinner{width:16px;height:16px;}
.index-header .mui-title{text-align: left;margin-left: 10px;}

.mui-grid-view.m-center-nav{background-color:#fff;border:none;margin-top:-10px;margin-bottom:10px;}
.mui-grid-view.m-center-nav .mui-table-view-cell{border:none;padding:6px 15px;}
.mui-grid-view.m-center-nav .m-icon{display: block;width:35px;height:35px;background: url(../../common/images/icon1-index.png) no-repeat -5px -5px;background-size:45px;margin:0 auto;}
.mui-grid-view.m-center-nav .m-icon2{background-position-y:-50px;}
.mui-grid-view.m-center-nav .m-icon3{background-position-y:-95px;}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{font-size:13px;}


</style>