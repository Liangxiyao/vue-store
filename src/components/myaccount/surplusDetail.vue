<template>
<div class="loanDetail">
    <m-header><span slot="header-cont">贷款详情</span></m-header>
    <div class="mui-content">
        <div class="main-cont">
            <div class="item-temp">
                <div class="tit bdb">
                    <span class="item-label">入账金额(元)</span>
                    <span class="item-cont green">+{{detail.money}}</span>
                </div>
                <ul class="main">
                    <li>
                        <span class="item-label">当前状态</span>
                        <span class="item-cont">{{detail.status_str}}</span>
                    </li>
                    <li>
                        <span class="item-label">转账代理</span>
                        <span class="item-cont"><img class="photo" :src="detail.headimgurl" >{{detail.name}}</span>
                    </li>
                    <li>
                        <span class="item-label">订单编号</span>
                        <span class="item-cont green"><router-link tag="span" to="">{{detail.order_id}} <i class="iconfont icon-jiantou"></i></router-link></span>
                    </li>
                    <li>
                        <span class="item-label">创建时间</span>
                        <span class="item-cont">{{detail.ctime && detail.ctime.replace(/\//g, '-')}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import mHeader from 'base/header/header'
import { apiSurplusDetail } from 'api/api';

export default {
    props:['id'],
    components: {
        mHeader,
    },
    data() {
        return {
            detail:{}
        }
    },
    activated() {
        this._getDetail();
    },
    methods: {
        _getDetail(){
            apiSurplusDetail({
                id:this.id
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

<style scoped>
.loanDetail .main-cont{margin:15px;}
.item-temp{background-color:#fff;border-radius:5px;margin-bottom:15px;font-size:13px;color:#999;}
.item-temp .tit{line-height:25px;padding:15px;}
.item-temp .tit .item-cont{font-size:20px;}
.item-temp .main{padding:20px 15px;}
.item-temp .main li{line-height:25px;margin-bottom:15px;}
.item-temp .main li:last-of-type{margin-bottom:0;}
.item-temp .item-cont{float:right;color:#333;}
.item-temp .photo{width:25px;height:25px;border-radius:50%;vertical-align:top;margin-right:5px;}
.item-temp  .green{color:#00A43E;}
.item-temp .icon-jiantou{position:relative;top:1px;right:-2px;color:#ccc;}

</style>