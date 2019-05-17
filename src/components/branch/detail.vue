<template>
<div class="upgradeDetail">
    <m-header>
        <span slot="header-cont">自助升级</span>
    </m-header>
    <div class="mui-content transfer-to-agent" >
        <div class="hd">
            <img class="photo" :src="detail.headimgurl" >
            <p class="name">{{detail.name}}</p>
            <p class="level">{{detail.levelname}}</p>
        </div>
        <div class="bd">
            <ul class="upgrade-details">
                <li>
                    <span class="tit">当前状态</span>
                    <span class="cont">{{detail.bind_status_str}}</span>
                </li>
                <li>
                    <span class="tit">升级级别</span>
                    <span class="cont">品牌特约经销商</span>
                </li>
                <li>
                    <span class="tit">现直属上级</span>
                    <span class="cont"><img class="photo" src="../../common/images/portrait.png" >小阿三</span>
                </li>
                <li>
                    <span class="tit">升级后直属上级</span>
                    <span class="cont"><img  class="photo" src="../../common/images/portrait.png" >李四</span>
                </li>
                <li>
                    <span class="tit">提交时间</span>
                    <span class="cont">2019-01-10 12:20:30</span>
                </li>
                <li>
                    <span class="tit">升级打款截图</span>
                    <span class="cont"><img class="pic" src="../../common/images/portrait.png" ></span>
                </li>
            </ul>
        </div>	
        <div class="upgrade-details-btns bdt">
            <div class="wrap wbox">
                <a class="wbox-flex btn refuse" href="javascript:;">拒绝</a>
                <a class="wbox-flex btn sure" href="javascript:;">通过</a>
            </div>	
        </div>
    </div>
</div>
</template>
<script>
import mHeader from 'base/header/header'
import { apiAcceptShopDetail,} from 'api/api';
export default {
    components:{
        mHeader
    },
    data() {
        return {
            detail: {}
        }
    },
    created(){
        this._getAcceptDetail()
    },
    methods: {
        _getAcceptDetail() {
            apiAcceptShopDetail({
                //agent_id:this.$route.params.id
                agent_id:474116
            }).then((result) => {
                console.log(result)
                if(result.status == 1){
                    this.detail = result.data
                }
            }).catch((err) => {
                
            });
        }
    },
    
}
</script>

<style >
.transfer-to-agent .hd{text-align:center;padding:20px 15px;background-color:#f0f0f0;}
.transfer-to-agent .hd .photo{width:60px;height:60px;border-radius:50%;overflow:hidden;}
.transfer-to-agent .hd .name{margin-top:10px;font-size:15px;color:#333;}
.transfer-to-agent .hd .level{font-size:12px;color:#999;}
.transfer-to-agent .bd{background-color:#fff;padding:20px 15px;border-radius:10px 10px 0 0;}
.upgrade-details{padding-bottom:80px;}
.upgrade-details li{margin-bottom:12px;font-size:13px;color:#333;line-height:25px;height:25px}
.upgrade-details .tit{float:left;width:105px;color:#999;font-size:13px;}
.upgrade-details .photo{width:25px;height:25px;border-radius:50%;margin-right:5px;}
.upgrade-details .pic{max-width:100px;}
.upgrade-details-btns{position:fixed;bottom:0;left:0;right:0;padding:10px 15px;bottom: constant(safe-area-inset-bottom);bottom: env(safe-area-inset-bottom)}
.upgrade-details-btns .wrap{width:100%;border-radius:5px;overflow: hidden;}
.upgrade-details-btns .btn{display: block;width:50%;height:40px;line-height:40px;background: #333;font-size:16px;color:#fff;text-align: center;}
.upgrade-details-btns .sure{background-color:#00a43e;}
.mui-popup{width:80%;border-radius:6px;}
.mui-popup-inner{padding:0;}
.mui-popup-inner:after{display:none;}
.mui-popup-title{line-height:65px;}
.mui-popup-title+.mui-popup-text{display:none;}
.mui-popup-input{background-color:#f0f0f0;}
.mui-popup-input textarea{margin:0;padding:15px;font-size:15px;height:120px;}
.mui-popup-input textarea::-webkit-input-placeholder{font-size:15px;color:#ccc;}
.mui-popup-buttons{padding:15px;background-color:#fff;height:auto;}
.mui-popup-buttons .mui-popup-button{height:40px;line-height:40px;border:1px solid #ccc;margin-right:10px;border-radius:5px;font-size:15px;color:#333;}
.mui-popup-buttons .mui-popup-button.mui-popup-button-bold{margin:0;font-weight:500;color:#fff;background-color:#00A43E;border-color:#00A43E;}

.mui-segmented-control{background-color:#fff;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item{position:relative;color:#666;font-size:14px;line-height:45px;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{border:0;color:#333;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active:after{content:'';position:absolute;bottom:0px;left:50%;margin-left:-14px;
width:28px;height:2px;background-color:#00A43E;color:#fff;}
.agent-list .mui-scroll-wrapper,.agent-list .hd{top:104px;}


</style>