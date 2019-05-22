<template>
<div class="upgradeDetail">
    <m-header>
        <span slot="header-cont">自助升级</span>
    </m-header>
    <div class="mui-content transfer-to-agent" >
        <div class="hd">
            <img class="photo" :src="branchDetailData.headimgurl" >
            <p class="name">{{branchDetailData.name}}</p>
            <p class="level">{{branchDetailData.levelname}}</p>
        </div>
        <div class="bd">
            <ul class="upgrade-details">
                <li>
                    <span class="tit">当前状态</span>
                    <span class="cont">{{branchDetailData.status_str}}</span>
                </li>
                <li>
                    <span class="tit">升级级别</span>
                    <span class="cont">{{branchDetailData.afterLevelname}}</span>
                </li>
                <li>
                    <span class="tit">现直属上级</span>
                    <span class="cont"><img class="photo" :src="branchDetailData.nowParentHeadimgurl" >{{branchDetailData.nownParent}}</span>
                </li>
                <li>
                    <span class="tit">升级后直属上级</span>
                    <span class="cont"><img  class="photo" :src="branchDetailData.afterParentHeadimgurl" >{{branchDetailData.afterParent}}</span>
                </li>
                <li>
                    <span class="tit">提交时间</span>
                    <span class="cont">{{branchDetailData.ctime}}</span>
                </li>
                <li>
                    <span class="tit">升级打款截图</span>
                    <span class="cont"><img class="pic" src="../../common/images/portrait.png" ></span>
                </li>
            </ul>
        </div>	
        <div class="upgrade-details-btns bdt">
            <div class="wrap wbox">
                <span class="wbox-flex btn refuse" @click="refuse">拒绝</span>
                <span class="wbox-flex btn sure" @click="agree">通过</span>
            </div>	
        </div>
    </div>
    <van-dialog v-model="dialogShow" title="拒绝理由" show-cancel-button confirm-button-text='提交'  @confirm='confirm(detail.id)' :before-close="beforeClose">
        <textarea class="reason" placeholder="请输入拒绝理由" v-model="reason"></textarea>
    </van-dialog>
</div>
</template>
<script>
import mHeader from 'base/header/header'
import { apiAcceptShopDetail,apiRefuseUpgrade} from 'api/api'
import { mapGetters } from 'vuex';
export default {
    components:{
        mHeader,  
    },
    data() {
        return {
            detail: {},
            dialogShow:false,
            reason:''
        }
    },
    computed: {
        ...mapGetters(['branchDetailData'])
    },
    created(){
        console.log(this.branchDetailData);
        
    },
    methods: {
        refuse(){
            this.dialogShow = true;
        },
        agree(){
            alert('同意')
        },
        confirm(id){
            if(!this.reason){
                alert('请输入拒绝理由')
            }else{
                apiRefuseUpgrade({
                    id:id
                }).then((result) => {
                    console.log(result)
                    if(result.status == 1){
                        this.dialogShow = false
                    }else{
                        this.dialogShow = false
                        alert(result.msg)
                    }
                }).catch((err) => {
                    
                });
            }
        },
        beforeClose(action, done){ 
            if(action == 'confirm'){
                done(false)
            }else{
                done()
            }
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

.van-dialog__header{padding:22px 0;font-size:18px}
.van-dialog__content{background-color:#f0f0f0;}
.van-dialog__content{padding:0;}
.van-dialog__content .reason{padding:15px;height:120px;}
.van-dialog__content .reason::placeholder{font-size:15px;color:#ccc}
.van-dialog__footer{padding:15px;}
.van-dialog .van-button{height:40px;line-height:38px;border: 1px solid #ccc;border-radius:5px}
.van-dialog .van-dialog__cancel{margin-right:10px}
.van-dialog .van-dialog__confirm{background-color:#00a43e;color:#fff;border-color: #00a43e;}
</style>