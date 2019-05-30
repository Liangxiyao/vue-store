<template>
<div class="surplusList">
    <m-header>
        <span slot="header-cont">贷款余额记录</span>
        <span slot="header-right" class="mui-btn-link mui-pull-right filterBtn" @click="filter">筛选<i class="iconfont icon-triangle"></i></span>
    </m-header>
    <div class="mui-content branchStore  loanLists">
        <div class="tab-bar">
            <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted">
                <span class="mui-control-item" 
                :class="{'mui-active':cur==index}" 
                v-for="(item,index) in tabTitle"
                @click="tabChange(index)"
                >{{item}}</span>
            </div>
        </div>
        <div class="bd">
            <keep-alive>
                <component :is="tabView"></component>
            </keep-alive>
        </div>
    </div>
    <filter-dialog :show='showDialog' :lists='filterItem' @closeDialog='closeDialog' ref="filter"></filter-dialog>
</div>
</template>

<script>
import mHeader from 'base/header/header'
import all_surplus from './all_surplus'
import income_surplus from './income_surplus'
import outcome_surplus from './outcome_surplus'
import filterDialog from './filter';
import { apiFilterMap } from 'api/api';

export default {
    components: {
        mHeader,
        all_surplus,
        income_surplus,
        outcome_surplus,
        filterDialog
    },
    data() {
        return {
            tabTitle:['全部记录','收入记录','支出记录'],
            tabArr:['all_surplus','income_surplus','outcome_surplus'],
            tabView: 'all_surplus',
            cur:0,
            showDialog:false, //筛选弹窗
            currentDate: new Date(),
            filterItem:[]
        }
    },
    methods: {
        tabChange(index) {
            this.cur = index
            this.tabView = this.tabArr[index]
        },
        _getFilterItem(){
            apiFilterMap().then((result) => {
                if(result.status == 1){
                    this.filterItem = [{type:'all',event:'全部'},...result.data.income, ...result.data.outcome]           
                }
                
            }).catch((err) => {
                
            });
        },
        filter(){
            this._getFilterItem()
            this.showDialog = true

        },
        closeDialog(){

            this.showDialog = false
        }
    },
}
</script>

<style>
.mui-segmented-control{background-color:#fff;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item{position:relative;color:#666;font-size:14px;line-height:45px;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{border:0;color:#333;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active:after{content:'';position:absolute;bottom:0px;left:50%;margin-left:-14px;
width:28px;height:2px;background-color:#00A43E;color:#fff;}


.mui-bar .filterBtn{margin-right:-5px;}
.mui-bar .filterBtn.cur{color:#00A43E;}
.loanLists .icon-triangle{color:#999;vertical-align:middle;}
.filterBtn.cur .icon-triangle{color:#00A43E;}
.loanLists .bd{margin-top:10px;}
.loanLists .bd .item{padding:15px;padding-right:120px;font-size:15px;color:#333;background-color:#fff;}
.loanLists .bd .item:last-of-type:after{display:none;}
.loanLists .bd .time{font-size:12px;color:#999;}
.loanLists .bd .money{position:absolute;right:12px;top:50%;line-height:40px;margin-top:-20px;}
.loanLists .bd .money .iconfont{color:#ccc;}
.loanLists .bd .money .num{font-size:18px;}
.loanLists .bd .money .num.green{color:#00A43E;}

.main-cont{margin:15px;}
.item-temp{background-color:#fff;border-radius:5px;margin-bottom:15px;font-size:13px;color:#666;}
.item-temp .tit{line-height:20px;padding:15px;}
.item-temp .tit .item-cont{font-size:16px;}
.item-temp .main{padding:15px;}
.item-temp .main li{line-height:26px;margin-bottom:5px;}
.item-temp .main li:last-of-type{margin-bottom:0;}
.item-temp .item-cont{float:right;color:#333;}
.item-temp .photo{width:25px;height:25px;border-radius:50%;vertical-align:top;margin-right:5px;}
.item-temp .green{color:#00A43E;}
.item-temp .icon-jiantou{position:relative;top:1px;right:-2px;color:#ccc;}
</style>