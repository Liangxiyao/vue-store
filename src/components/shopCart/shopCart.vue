<template>
    <div class="shopCart">
        <m-header>
            <span slot="header-cont">购物车</span>
            <a slot="header-right" class="mui-btn-link mui-pull-right operate" href="javascript:;" @tap="editStateFn">{{editState?'完成':'管理'}}</a>
        </m-header>
        <div class="mui-content shopCart-lists">
            <div id="cartList">
                <!-- 购物车模板 -->
                <div class="temp goods-info-common" v-for="(lists,index) in goodsLists" :key="index">
                    <div class="hd pr">
                        <span class="group-choose"><i class="icon-choose iconfont" :class="[lists.groupChed?'icon-ched':'']" @click="groupChoose"></i></span>
                        <img v-if="lists.brand.logo" :src="lists.brand.logo" alt="">
                        <span class="shop-name">{{lists.brand.brand_name}}</span>
                    </div>
                    <!-- 单个商品 -->
                    <div class="pro-item pr mui-table-view-cell" v-for="(item,i) in lists.list" :key="i">
                        <div class="mui-slider-handle">
                            <span class=" item-choose">
                                <i class="icon-choose iconfont" :class="[item.itemChed?'icon-ched':'']"                                                                
                                                                @click="itemChoose(item)"
                                                                ></i>
                            </span>
                            <div class="wbox pdl">
                                <div class="pr">
                                    <img class="pro-img" :src="item.imgs" alt="">
                                    <div class="mask-img" v-if=""><img src="/static/images/shouwan.png"></div>
                                </div>
                                <div class="pro-info wbox-flex ">
                                    <a :href="'/goodsDetail?id='+item.goods_id" class="block">
                                        <span class="pro-name ofellipsis2">{{item.goods_name}}</span>
                                    </a>
                                    <p class="guige" :data-brandid="item.brand_id">{{item.sku_str}}</p>
                                    <div class="price-wrap clearFix">
                                        <span class="snPrice"><em>¥</em>{{item.price}}</span>
                                        <num-control :good="item"></num-control>
                                    </div>
                                </div>
                            </div>
                        </div>	
                        <div class="mui-slider-right mui-disabled item-delete"><i class="iconfont icon-delete mui-btn"></i></div>
                    </div>
                </div>
            </div>
            <div class="btfixed-area sure-pay-area pr">
                <div class="pr fl all-choose-wrap">
                    <span class="all-choose-btn"><i class="icon-choose iconfont"></i></span>
                    <span class="all-choose-txt">全选</span>
                </div>
                <div class="right-btn fr toPay">
                    <a href="javascript:;" id="cart-account">去结算({{goodsNumber}})</a>
                </div>
                <div class="left-price fr total">
                    <span>合计<i class="need-money" style="" id="need-money"><em>￥</em>{{goodsTotalPrice}}</i></span>
                </div>
                
            </div>
            <div class="btfixed-area all-operate-area" v-if="editState">
                <div class="pr fl all-choose-wrap">
                    <span class="all-choose-btn"><i class="icon-choose iconfont"></i></span>
                    <span class="all-choose-txt">全选</span>
                </div>
                <div class="right-btn fr delete">
                    <a href="javascript:;" id="cart-del">删除</a>
                </div>
                <!-- <div class="right-btn fr collection">
                    <a href="javascript:;"  id="cart-add-collect">添加到我喜欢</a>
                </div> -->
            </div>
        </div>
        <m-footer></m-footer>
    </div>
</template>
<script>
import mHeader from "base/header/header"
import mFooter from "base/footer/footer"
import {apiShopCartList} from "api/api"
import NumControl from "base/numControl/numControl"

export default {
    components:{
        mHeader,
        mFooter,
        NumControl
    },
    data(){
        return{
            goodsLists:[],
            // goodsNumber:0,
            goodsTotalPrice:0,
            editState:false,
            text:'管理',
        }
    },
    computed:{
        goodsNumber(){
            let count = 0;
            this.goodsLists.map(group => {
                group.list.map(item=>{
                    if(item.itemChed){
                        count += parseInt(item.number)
                    }
                })
            })
            return count
        }
    },
    created(){
        this._getShopCartLists()
    },
    methods:{
        _getShopCartLists(){
            apiShopCartList().then((result) => {
                console.log(result)
                if(result.lists.length){
                    let lists = result.lists
                    lists.map(group=>{    //加选中状态后的数据
                        if(!group.ched){
                            group.groupChed = false   
                        }
                        // console.log(group)
                         group.list.map(item=>{
                             if(!item.ched){
                                 item.itemChed = false
                             }
                         })                      
                    })
                    this.goodsLists = lists
                }
            }).catch((err) => {
                
            });
        },
        editStateFn(){
            this.editState = !this.editState
        },
        itemChoose(val){
            console.log(val)
            val.itemChed = !val.itemChed
            console.log()
            // if(val.itemChed){
            //     this.goodsNumber++
            //     //this.goodsTotalPrice = parseFloat(val.price * val.number).toFixed(2);
            // }else{
            //     this.goodsNumber--
            // }
        },
        groupChoose(){

        },
        

        
    }
}
</script>
<style>
.group-choose,.item-choose,.all-choose-btn{width:30px;height:40px;line-height:40px;text-align: center;position:absolute;top:50%;left:0;z-index: 5;
-webkit-transform: translateY(-50%);transform: translateY(-50%);text-align: center;}
.iconfont.icon-choose{font-size:18px;color:#999;}
.iconfont.icon-ched{color:#00A43E;}
.shopCart-lists{margin:15px;padding-bottom:85px;}
.shopCart-lists .shop-name{padding-left:30px;}
.shopCart-lists .goods-info-common{padding:0;}
.shopCart-lists .goods-info-common .pro-item{padding:0;}
.shopCart-lists .goods-info-common .pro-info{padding-right:10px;}
.goods-info-common{border-radius:5px;background-color:#fff;margin-bottom:15px;overflow: hidden;color:#333;font-size:13px;padding:0 15px;} 
.goods-info-common .hd{font-size:14px;font-weight:600;line-height:50px;height:50px;font-size:15px;color:#333;}
.goods-info-common .hd .shop-name img{width:25px;height:25px;border-radius:20px;position:relative;top:12px;left:-3px;margin-right:5px;}
.goods-info-common .pro-item{margin-bottom:15px;}
.goods-info-common .pro-img{width:80px;height:80px;margin-right:9px;}
.goods-info-common .mask-img{position:absolute;top:0;left:0;z-index:2;width:80px;height:80px;background-color:rgba(0,0,0,.5);border-radius:5px;text-align: center;}
.goods-info-common .mask-img img{width:50px;height:50px;margin:15px auto;}
.goods-info-common .pro-info{display: -webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;
-webkit-align-content: space-between;align-content: space-between;}
.goods-info-common .pro-info .block{width:100%;}
.goods-info-common .pro-info .pro-name{line-height:16px;margin-bottom:4px;}
.goods-info-common .pro-info .guige{font-size:12px;color:#999;margin-bottom:4px;}
.goods-info-common .price-wrap{width:100%;}
.goods-info-common .snPrice{font-size:16px;color:#333;}
.goods-info-common .snPrice em{font-size:13px;}
.goods-info-common .mui-table-view-cell:after,.goods-info-common .mui-table-view:after{display:none;}
.goods-info-common .mui-table-view-cell .item-delete{width:50px;}
.goods-info-common .mui-table-view-cell>.mui-slider-right>.mui-btn{padding:0;width:50px;}
.item-delete .icon-delete{background:#333;color:#fff;}
.item-delete .icon-delete:before{content:'\e60e';position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;font-size:20px;text-align: center;}

/* 底部固定 */
.btfixed-area{width:100%;height:50px;line-height:50px;position: fixed;bottom:50px;left:0;font-size:15px;background:#fff;z-index:8;
margin-bottom: constant(safe-area-inset-bottom);margin-bottom: env(safe-area-inset-bottom);}
.btfixed-area .all-choose-wrap{margin-left:8px;}
.btfixed-area .all-choose-txt{padding-left:30px;font-size:14px;color:#333;}
.btfixed-area .left-price{font-size:16px;margin-right:10px;}
.btfixed-area .left-price .need-money{color:#00a43e;font-size:16px;font-weight:600;}
.btfixed-area .left-price .need-money em{font-size:13px;}
.btfixed-area .right-btn{height:34px;line-height:34px;margin-top:8px;margin-right:15px;border-radius:5px;overflow: hidden;}
.btfixed-area .right-btn a{display:block;font-size:15px;text-align:center;padding:0 15px;background:#00a43e;color:#fff;}
.all-operate-area .delete a{background-color:#333;color:#fff;}


</style>


