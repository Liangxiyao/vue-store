<template>
<div class="branch">
    <m-header>
        <div class="tab-header" slot="header-cont">
            <div class="mui-segmented-control" v-if="branch.number">
                <router-link class="mui-control-item mui-active" to="/branchList">分店(<span>{{branch.number.shopNum}}</span>)</router-link>
                <router-link class="mui-control-item" to="/waitSure">待确认(<span>{{branch.number.unacceptNum}}</span>)</router-link>
            </div>
        </div>
    </m-header>
    <!-- <branch-list :lists='branch.list'></branch-list>
    <wait-sure :lists='waitList'></wait-sure> -->
    <keep-alive><router-view :lists="branch"/></keep-alive>
</div>
</template>
<script>
import mHeader from 'base/header/header'
import { apiBranch } from 'api/api'
import BranchList from './branchList'
import WaitSure from './waitSure'
export default {
    components:{
        mHeader,
        BranchList,
        WaitSure
    },
    data(){
        return{
            branch:{}
        }
    },
    created(){
        this.getBranch()
    },
    methods:{
        getBranch(){
            apiBranch(1).then((result) => {
                console.log(result)
                if(result.status == 1){
                    this.branch = result.data
                }
            }).catch((err) => {
                
            });
        }
    }
}
</script>

<style>
/* tab-header */
.mui-title{height:100%;}
.mui-title .tab-header .mui-segmented-control{border:1px solid #999;border-radius:5px;}
.tab-header .mui-segmented-control .mui-control-item{width:95px;height:28px;line-height:28px;font-size:13px;color:#000;border:none;}
.tab-header .mui-segmented-control .mui-control-item.router-link-active,
.tab-header .mui-segmented-control .mui-control-item.mui-active{background-color:#333;color:#fff;}
.agent-list .hd{position:absolute;top:59px;left:15px;right:15px;height:50px;line-height:31px;z-index:999;background-color:#ffff;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);border-radius:5px 5px 0 0;overflow:hidden;}
.agent-list .left{width:30%;padding:10px 0 10px 10px;text-align: left;}
.agent-list .center{width:40%;padding:10px 5px;text-align: center;}
.agent-list .right{width:30%;padding:10px 10px 10px 0;text-align: right;}
.agent-list .hd th{font-size:13px;color:#999;font-weight:normal;}
.agent-list .mui-scroll-wrapper{top:59px;bottom:40px;bottom:constant(safe-area-inset-bottom);bottom:env(safe-area-inset-bottom);}
.agent-list .row td{position:relative;}
.agent-list .row td:after{position: absolute;right: 0;bottom: 0;left:0;height: 1px;content: '';
-webkit-transform: scaleY(.5);transform: scaleY(.5);background-color: #ddd;}
.agent-list .row:last-of-type td:after{height:0;}
.agent-list .main{margin:0 15px;background-color:#fff;border-radius:5px;padding-top:50px;}
.agent-list .main .table td{line-height:30px;height:30px;font-size:12px;vertical-align:middle;}
.agent-list .main .table .photo{width:30px;height:30px;margin-right:5px;}
.agent-list .main .table .right .btn{display:inline-block;width:50px;line-height:25px;text-align:center;font-size:12px;color:#fff;background-color:#00A43E;border-radius:5px;}

</style>
