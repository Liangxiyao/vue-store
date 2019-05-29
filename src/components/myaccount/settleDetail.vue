<template>
<div class="settleDetail">
    <m-header><span slot="header-cont">提现详情</span></m-header>
    <div class="mui-content mui-resultBox">
        <div class="mui-cashBank">
            <div class="mui-banklist">
                <P>提现金额</P><span>{{detail.settle_money_formate}}</span>
            </div>
            <div class="mui-banklist">
                <P>提现到</P><span>{{detail.bankname}}(尾号{{detail.cardNo}})</span>
            </div>
            <div class="mui-result">
                <P>处理进度</P>
                <ul>
                    <li id="payment" class="payment">
                        <i class="iconfont icon-ched"></i>
                        <div class="protext">提交申请</div>
                        <div class="time">{{ctime}}</div>
                    </li>
                    <li id="process" :class="[detail.status==0?'procolor':'']" >
                        <i class="iconfont icon-ched"></i>
                        <div class="protext">处理中</div>
                        <div class="time">{{dealtime}}</div>
                    </li>
                    <li id="not" :class="[detail.status==0?'notcolor':'']">
                        <i class="iconfont icon-ched"></i>
                        <div class="protext">到账成功</div>
                        <div class="time">预计7个工作日到账</div>
                    </li>
                </ul>
            </div>
            <div class="mui-banklist">
                <P>创建时间</P><span>{{ctime}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import mHeader from 'base/header/header';
import { apiSettleDetail } from 'api/api';

export default {
    props:['id'],
    components: {
        mHeader,
    },
    data() {
        return {
            detail: {}
        }
    },
    activated() {
        this._getSettleDetail()
    },
    computed:{
        ctime(){
            if(!this.detail.ctime){
                return '';
            }
            return this.detail.ctime.replace(/\//g, '-')
        },
        dealtime(){
            if(!this.detail.dealtime){
                return '';
            }
            return this.detail.dealtime.replace(/\//g, '-')
        }
    },
    methods: {
        _getSettleDetail() {
            apiSettleDetail({
                settle_id:this.id
            }).then((result) => {
                if(result.status == 1){
                    this.detail = result.data         
                }
            }).catch((err) => {
                
            });
        }
    },
}
</script>

<style>
.mui-cashBank{position: relative;margin:15px;background-color: #fff;padding:15px 25px 25px;font-size:14px;border-radius:6px;}
.mui-cashBank .mui-banklist{ font-size:14px; margin: 12px 0;}
.mui-cashBank .mui-banklist p{display: inline-block; width: 30%;}
.mui-result{overflow: hidden;}
.mui-result p{ float: left;width: 30%;}
.mui-result ul{ float: left;}
.mui-result ul li{height:60px;position: relative;padding:0 15px; border-left: 1px solid #00a43e;color:#999;}
.mui-result ul li .protext{ color: #00a43e;}
.mui-result ul li .icon-ched,.mui-result ul .not .icon-ched{color: #00a43e; font-size: 20px; position: absolute; top:0; left:-10px; }
.mui-result ul li .icon-ched:before{background: #fff;}
.mui-result ul li:last-of-type {border-left:0; height: 40px;}
.mui-result ul .procolor {border-color:#ccc;}
.mui-result ul .notcolor .protext{color: #333;}
.mui-result ul .notcolor .icon-ched{color: #ccc; }

</style>