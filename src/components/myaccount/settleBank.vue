<template>
    <div class="recharge">
        <m-header>
            <span slot="header-cont">提现</span>
        </m-header>
        <div class="mui-content">
            <div class="mui-refunBox">
                <p>提现金额</p>
                <div class="mui-refunMoney">
                    <em>￥</em><input type="number" placeholder="输入提现金额" value="" v-model="money" @input="checkMoney"/>
                </div>
                <div class="mui-money">可提现金额：{{availableMoney}}<span class="allMoneyBtn">全部提现</span></div>
            </div>
            <div class="mui-refunConter">
                <div class="mui-card">
                    <h1>到账银行卡</h1>
                    <dl class="mui_bankBox">
                        <dt><img src="../../common/images/bank.png" /></dt>
                        <dd>招商银行(尾号8899)</dd>
                        <dd>预计7个工作日到账</dd>
                    </dl>
                </div>
                <div class="sure-pay">
                    <input type="button" class="btn" :class="{active:btnActive}" @click="toPay" value="确认提现">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mHeader from 'base/header/header'
import {apiSettleBank} from 'api/api'
import { mapState } from 'vuex';
import storage from 'common/js/storage'

export default {
    components:{
        mHeader
    },
    data(){
        return{
            money:'',
            btnActive:false,
            payType:'4'
        }
    },
    computed: {
        availableMoney(){
            return localStorage.getItem('availableMoney')
        }
    },
    methods:{
        
        checkMoney(){
            console.log(typeof Number(this.availableMoney))
            console.log(Number(this.money) > Number(this.availableMoney));
            
            let res = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/
            if(this.money != ''){
                if(res.test(this.money)){
                    this.btnActive = true;
                }else{
                    this.btnActive = false;
                    alert('金额输入有误')
                    return;
                }
            }else{
                this.btnActive = false;
                return;
            }
            if(Number(this.money) > Number(this.availableMoney)){
                this.btnActive = false;
                alert('超出最大金额')
                return;
            }
        },
        toPay(){
            if(!this.btnActive){
                return;
            }
            let data = {
                money:this.money,
                payment_id:this.payType
            }
            this._getPay(data)  //去支付
        },
        _getPay(data){
            apiSettleBank(data).then((result) => {
                console.log(result)
                if(result.status == 1){
                    let jdkdata = {
                        "appId": result.orderStr.appid,     //公众号名称，由商户传入
                        "timeStamp": result.orderStr.timestamp,         //时间戳，自1970年以来的秒数
                        "nonceStr": result.orderStr.noncestr, //随机串
                        "package": result.orderStr.package,
                        "signType": result.orderStr.signType,         //微信签名方式：
                        "paySign": result.orderStr.sign //微信签名
                    }
                    this.callpay(jdkdata)   //支付接口
                    
                }
            }).catch((err) => {
                
            });
        },
        onBridgeReady(data) {
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', 
                data,
                function (res) {
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        sessionStorage.removeItem("orderDetail");
                        window.location.href = "success_pay.html";
                    } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                        alert("确定要取消支付吗？");
                       
                    } else {// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                        alert(JSON.stringify(res));
                        alert(res.err_msg);
                        
                    }
                }
            );

        },
        callpay: function (data) {
            if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                }
            } else {
                this.onBridgeReady(data);
            }
        }
    }
    
}
</script>

<style>
.mui-refunBox{background: #fff; width: 100%; padding: 20px 15px;}
.mui-refunBox p{font-size: 18px; color: #333;}
.mui-refunBox .mui-refunMoney em{font-size: 34px; color: #333; line-height: 55px; display: inline-block; float: left;}
.mui-refunBox .mui-refunMoney input{width: 80%; border:none; font-size: 30px;padding: 15px 4px 0;margin-bottom: 0px;}
.mui-refunBox .mui-refunMoney input::-webkit-input-placeholder {color: #aab2bd;font-size:20px;}
input::-webkit-input-placeholder {color: #999;font-size: 14px;}
.mui-refunConter .mui-card{box-shadow:none;border-radius:5px;margin:15px;}
.mui-refunConter h1,.mui-share .mui-shopBox h1{ font-size: 15px; line-height: 46px; text-indent: 15px; position: relative;}
.mui-refunConter h1:after{ position: absolute;  right: 0;  top:45px;left: 0px; height: 1px;  content: ''; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #ddd;}
.mui-refunConter .mui-table-view-cell:after{ height: 0;}
.mui-refunConter .mui-table-view-cell.mui-radio input[type=radio] {left:auto; right: 0px;  top: 50%; margin-top: -12px;}
.mui-refunConter .sure-pay{margin-top:20px;padding:0 15px;}
.mui-refunConter .sure-pay .btn{width:100%;;height:45px;background-color:#00A43E;padding:0;border:none;
color:#fff;font-size:16px;border-radius:5px;text-align: center;opacity:.4;}
.mui-refunConter .sure-pay .btn.active{opacity:1;}
.mui-radio input[type=radio]:before {color: #999; font-size: 22px;}
.mui-radio input[type=radio]:checked:before{content: '\e442';color: #00a43e; font-size: 22px;}
.mui-refunBox .mui-money{width:100%; line-height:45px;height: 30px; font-size:14px; color:#666; display:inline-block; position:relative;}
.mui-refunBox .mui-money:after{ position: absolute;  right: 0;  top:0px;left: 0px; height: 1px;  content: ''; -webkit-transform: scaleY(.5);  transform: scaleY(.5); background-color: #ddd;}
.mui-refunBox .mui-money .allMoneyBtn{color:#333;border:1px solid #333; padding:1px 4px; border-radius:4px; margin-left:5px;}
.mui_bankBox{ padding:10px 15px;}
.mui_bankBox dt img{width:23px; height:23px; float:left;}
.mui_bankBox dd{font-size:15px; color:#000; margin-left:30px; line-height:23px;}
.mui_bankBox dd:last-child{color:#666; font-size:12px;}
</style>

