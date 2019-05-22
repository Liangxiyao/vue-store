<template>
<div class="myBank">
    <m-header><span slot="header-cont">我的银行卡</span></m-header>
    <div class="mui-content">
        <ul class="lists">
            <li class="item">
                <img class="bank-bg" src="../..//common/images/zhaoshang.png" >
                <div class="bank-info wbox">
                    <div class="pic"><img  src="../../common/images/bank.png" ></div>
                    <div class="info wbox-flex">
                        <h3 class="name">{{bank.bankname}}</h3>
                        <div class="types">储蓄卡</div>
                        <div class="cardNum"><span class="txt">*******</span> {{bank.cardno.substr(bank.cardno.length-4)}}</div>
                    </div>	
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import mHeader from "base/header/header";
import { apiMybank } from 'api/api';

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
            }
        }
    },
    created () {
        this.getMybrank()
    },
    computed: {
        cardNo() {
            let str = this.bank.cardno
            console.log(str)
            //return str.substr(0,4) 
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
        }
    },
    
}
</script>

<style>
.myBank{margin:15px auto;max-width:640px;padding:15px;}
.myBank .item{margin-bottom:15px;position:relative;}
.myBank .item .bank-bg{width:100%;height:1%;}
.myBank .item .bank-info{position:absolute;top:0;left:0;width:100%;height:100%;padding:15px;color:#fff;}
.myBank .item .bank-info .pic{width:20%;height:0;padding-top:20%;border-radius:50%;margin-right:15px;position: relative;}
.myBank .item .bank-info .pic img{position: absolute;top:0;right:0;bottom:0;left:0;}
.myBank .item .bank-info .info{overflow:hidden;display: -webkit-flex;display: flex;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content: space-around;
align-content: space-around;flex-direction: row;}
.myBank .item .bank-info .name{font-size:18px;width:100%;}
.myBank .item .bank-info .types{font-size:12px;width:100%;color:rgba(255,255,255,.5);margin-top:-10px;}
.myBank .item .bank-info .cardNum{font-size:23px;color:#fff;}
.myBank .item .bank-info .cardNum .txt{color:rgba(255,255,255,.5);position:relative;top:4px;}

</style>