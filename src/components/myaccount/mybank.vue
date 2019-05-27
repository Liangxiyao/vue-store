<template>
<div class="myBank">
    <m-header><span slot="header-cont">我的银行卡</span></m-header>
    <div class="mui-content">
        <ul class="lists">
            <li class="item">
                <img class="bank-bg"  :src="'/static/images/'+kind+'.png'" >
                <div class="bank-info wbox">
                    <div class="pic"><img  :src="`/static/images/icon-${kind}.png`" ></div>
                    <div class="info wbox-flex">
                        <h3 class="name">{{bank.bankname}}</h3>
                        <div class="types">储蓄卡</div>
                        <div class="cardNum"><span class="txt">*******</span> {{cardNo}}</div>
                    </div>	
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import mHeader from "base/header/header";
import { apiMybank, apiBanklist } from 'api/api';

export default {
    components: {
        mHeader,
    },
    data() {
        return {
            bank: {
                bank_id:'',
                bankname:'',
                cardno:'',
            },
            kind:'',
        }
    },
    watch: {
        bank(newValue, oldValue) {
            let id = newValue.bank_id
            switch(id){
                case '9':
                    this.kind = 'gongshang';
                    break;
                case '10':
                    this.kind = 'jianshe';
                    break;
                case '11':
                    this.kind = 'zhaoshang';
                    break;
                case '12':
                    this.kind = 'nongye';
                    break;
                case '13':
                    this.kind = 'jiaotong';
                    break;
                case '14':
                    this.kind = 'zhongxin';
                    break;
                case '15':
                    this.kind = 'pufa';
                    break;
                case '16':
                    this.kind = 'minsheng';
                    break;
                case '17':
                    this.kind = 'pingan';
                    break;
                case '18':
                    this.kind = 'zhanghang';
                    break;
                case '19':
                    this.kind = 'youzheng';
                    break;
                case '20':
                    this.kind = 'xingye';
                    break;
                case '21':
                    this.kind = 'huaxia';
                    break;
            }
        }
    },
    created () {
        this.getMybrank()
    },
    computed: {
        cardNo() {
            let str = this.bank.cardno
            return str.substr(str.length-4)
        }
    },
    methods: {
        getMybrank() {
            apiMybank().then((result) => {
                if(result.status == 1){
                    console.log(result)
                    this.bank = result.data
                }
            }).catch((err) => {
                
            });
        },
        getBankList(){
            apiBanklist().then((result) => {
                if(result){

                }
            }).catch((err) => {
                
            });
        }
    },
    
}
</script>

<style>
.myBank{margin:0 auto;max-width:640px;padding:59px 15px 15px 15px;}
.myBank .mui-content{padding-top:0}
.myBank .item{margin-bottom:15px;position:relative;}
.myBank .item .bank-bg{width:100%;height:1%;}
.myBank .item .bank-info{position:absolute;top:0;left:0;width:100%;height:100%;padding:15px;color:#fff;}
.myBank .item .bank-info .pic{width:55px;height:55px;border-radius:50%;margin-right:15px;position: relative;background: #fff;padding:10px;}
.myBank .item .bank-info .info{overflow:hidden;display: -webkit-flex;display: flex;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content: space-around;
align-content: space-around;flex-direction: row;}
.myBank .item .bank-info .name{font-size:18px;width:100%;}
.myBank .item .bank-info .types{font-size:12px;width:100%;color:rgba(255,255,255,.5);margin-top:-10px;}
.myBank .item .bank-info .cardNum{font-size:23px;color:#fff;}
.myBank .item .bank-info .cardNum .txt{color:rgba(255,255,255,.5);position:relative;top:4px;}

</style>