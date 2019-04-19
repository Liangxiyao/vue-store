<template>
<div class="myshop">
    <m-header>
        <span slot="header-cont">我的店铺</span>
        <a slot="header-right" class="mui-btn-link mui-pull-right operate" href="javascript:;">分享店铺</a>
    </m-header>
    <div class="mui-content">
        <div class="top-hd wbox pr">
            <div class="pic">
                <img src="static/images/portrait.png" />
            </div>
            <div class="cont wbox-flex">
                <div class="name">我的姜力小店</div>
                <div class="level">大区合作伙伴</div>		
            </div>	
            <a href="companyIdent.html" class="iconfont icon-yyzz pa"></a>
        </div>
        <!-- <goods-list :lists="goodsList" :dialogLock='dialogLock' @dialogFn='dialogFn'></goods-list> -->
    </div>
    <!-- <filter-dialog  @closeDialog="closeDialog" 
                    :show="dialogLock"
                    :brand="brandList"
                    :tag="tagList"></filter-dialog> -->
</div>
</template>

<script>
import mHeader from "base/header/header"
import GoodsList from "base/goodsList/goodsList";
import FilterDialog from "base/filter/filter";


export default {
    components:{
        mHeader,
        GoodsList,
        FilterDialog
    }
    
}
</script>

<style>
.myshop .top-hd{width:100%;background: url(../../common/images/shopbg.png) no-repeat center 0;background-size:100%;color:#fff;padding:20px 15px;}
.myshop .top-hd .pic{width:60px;height:60px;border-radius:50%;overflow:hidden;margin-right:10px;border:2px solid #fff;}
.myshop .top-hd .cont{display: -webkit-flex;display: flex;-webkit-flex-wrap: wrap;flex-wrap: wrap;
-webkit-align-content: space-between;align-content: space-between;font-size:12px;padding:5px 0;}
.myshop .top-hd .name{width:100%;font-size:18px;}
.myshop .m-recomand-list{margin-top:10px;}
.myshop .icon-yyzz{bottom:13px;right:15px;color:#fff;}
</style>


