<template>
<div class="settleList">
    <m-header class="bdb"><span slot="header-cont">提现记录</span></m-header>
    <div class="mui-content" v-if="lists.length">
        <router-link tag="div" class="mui-record-list bdb" v-for="item in lists" :key="item.id" :to="'/settleDetail/'+item.id" >
            <div class="mui-record-left">
                <p>提现到银行卡</p>
                <span>{{item.ctime.replace(/\//g, '-')}}</span>
            </div>
            <div class="mui-record-right mui-record-height">
                <span class="status">{{item.status_msg}}</span>
                <em>￥{{item.settle_money}}</em>
            </div>
            <i class="iconfont icon-jiantou fr"></i>
        </router-link>
    </div>
</div>
</template>

<script>
import mHeader from 'base/header/header';
import { apiSettleList } from 'api/api';

export default {
    components: {
        mHeader,
    },
    data() {
        return {
            lists: []
        }
    },
    created () {
        this._getSettleList()
    },
    methods: {
        _getSettleList() {
            apiSettleList({
                p:1
            }).then((result) => {
                if(result.status == 1){
                    this.lists = result.data.list
                }
            }).catch((err) => {
                
            });
        }
    },
}
</script>

<style >
.settleList .mui-content{background-color: #fff;padding-top:0}
.settleList .mui-record-list{padding:15px;width: 100%;position:relative;overflow: hidden;}
.settleList .mui-record-list:last-of-type::after{display:none;}
.settleList .mui-record-list .mui-record-left{width: 55%; float: left; }
.settleList .mui-record-list .mui-record-left p{font-size: 15px;  color:#333; line-height: 20px;}
.settleList .mui-record-list .mui-record-left span{font-size: 12px; color:#999999;}
.settleList .mui-record-list .mui-record-right{width: 35%; float: right; text-align:right; margin-right: 15px; line-height: 43px;}
.settleList .mui-record-list .mui-record-right .status{display: block; color: #33b665;font-size: 12px;}
.settleList .mui-record-list .mui-record-right em{color: #333; font-size: 16px;display: block;}
.settleList .mui-record-list .icon-jiantou{position: absolute; right: 10px;  top: 50%;margin-top: -10px; color: #ccc;}
.settleList .mui-record-list .mui-record-height{line-height: 20px;}

</style>