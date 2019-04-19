<template>
    <div class="mui-content branchStore">
        <div class="tab-bar">
            <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted">
                <a class="mui-control-item mui-active" href="/unacceptList"><span>开店确认(222)</span></a>
                <a class="mui-control-item" href="/upgradeShop"><span>升级确认(222)</span></a>
            </div>
        </div>
        <div class="agent-list">
            <div class="hd">
                <table width="100%">
                    <tr class="row">
                        <th class="left">店名</th>
                        <th class="center">评级</th>
                        <th class="right" style="padding-right:20px;">操作</th>
                    </tr>
                </table>
            </div>
            <keep-alive><router-view :lists="lists"/></keep-alive>
            <!-- <m-lists :data="lists"></m-lists> -->
        </div>
    </div>
</template>
<script>
import {apiWaitSureList} from 'api/api';

export default {
    data(){
        return{
            lists:[]
        }
    },
    created(){
        this._getWaitList()
    },
    methods:{
        _getWaitList(){
            apiWaitSureList().then((result) => {
                console.log(result)
                if(result.status == 0){
                    this.lists = result.data.unacceptShop
                }
            }).catch((err) => {
                
            });
        }
    }
}
</script>
<style>
.mui-segmented-control{background-color:#fff;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item{position:relative;color:#666;font-size:14px;line-height:45px;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{border:0;color:#333;}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active:after{content:'';position:absolute;bottom:0px;left:50%;margin-left:-14px;
width:28px;height:2px;background-color:#00A43E;color:#fff;}
.agent-list .mui-scroll-wrapper,.agent-list .hd{top:104px;}

</style>


