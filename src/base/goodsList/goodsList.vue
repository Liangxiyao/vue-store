<template>
<div class="m-recomand-list clearFix">
    <div class="m-title">
        <span class="tit">推荐商品</span>
        <div class="filter-info">
            <div class="filter-btn fr" @click="dialogShow">
                <span class="txt">筛选</span>
                <i class="icon-filter"></i>
            </div>
            <div class="filtered-list fr">
                <span class="item" v-if="itemList.brand" @click="deleteItem('brand')"> {{itemList.brand.brand_name}} <i class="icon-del"></i></span>
                <span class="item" v-if="itemList.tag" @click="deleteItem('tag')">{{itemList.tag.tag_name}} <i class="icon-del"></i></span>
            </div>
        </div>
    </div>
            
    <ul class="list-wrap clearFix">
        <li class="item mui-pull-left" v-for="item in lists" :key="item.main_goods_id">
            <div class="hd">
                <a :href="'/goodsDetail?id='+item.main_goods_id">
                    <img :src="item.pics">
                </a>
            </div>
            <div class="dec">
                <p class="ofellipsis name">{{item.goods_name}}</p>
                <p class="price">
                    <span><em>￥</em>{{item.price}}</span>
                    <s class="old-price"><em>￥</em>{{item.market_price}}</s>
                </p>
            </div>
        </li>
    </ul>
</div>  
</template>

<script>
import storage from 'common/js/storage';

export default {
    props:{
        lists:{
            type:Array,
            default:[]
        },
        dialogLock:{
            type:Boolean,
            default:false
        },
        itemList:{
            type:Object,
            default:{}
        }
    },
    data(){
        return{
            
        }
    },
    methods:{   
        dialogShow(){
            this.$emit('dialogFn',!this.dialogLock)
        },
        deleteItem(type){
            delete this.itemList[type]
            //this.itemList[type] = null
            this.$emit('showItemFn',this.itemList)
            this.$store.commit('changeSku',this.itemList)
        },
    }
}
</script>

<style>
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
background: url(../../common/images/icon2.png) no-repeat -11px -45px;background-size:40px;}
.m-recomand-list .filtered-list .item{float:right;height:20px;line-height:20px;padding:0 5px;
border:1px solid #ddd;border-radius:3px;font-size:12px;color:#666;margin-right:5px;}
.m-recomand-list .filtered-list .item .icon-del{float: right;width:15px;height:18px;background: url(../../common/images/icon2.png) no-repeat -3px -2px;background-size:26px;}

</style>

