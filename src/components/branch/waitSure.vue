<template>
    <div class="mui-content branchStore waitSure">
        <div class="tab-bar">
            <ul id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted" v-if="waitSure.number">
                <li class="mui-control-item mui-active" @click="go('unacceptShop')"><span>开店确认({{waitSure.number.unacceptShopNum}})</span></li>
                <li class="mui-control-item" @click="go('upgradeShop')"><span>升级确认({{waitSure.number.upgradeShopNum}})</span></li>
            </ul>
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
            <!-- <keep-alive><router-view/></keep-alive> -->
            <m-lists :lists='lists'></m-lists>
        </div>
    </div>
</template>
<script>
import {apiWaitSureList} from 'api/api';
import { mapState,mapMutations } from 'vuex';
import mLists from './lists';
export default {
    components: {
        mLists
    },
    data(){
        return{
            waitSure:{},
            lists:[]
        }
    },
    created(){
        this._getWaitList()
    },
    methods:{
        ...mapMutations(['waitSureData']),
        _getWaitList(){
            apiWaitSureList().then((result) => {
                console.log(result)
                if(result.status == 1){
                    this.waitSure = result.data
                    this.lists = result.data.upgradeShop
                    this.waitSureData(this.waitSure)
                }
            }).catch((err) => {
                
            });
        },
        go(url){    //tab切换
            this.lists = this.waitSure[url]
        }
    }
}
</script>
<style>
.waitSure .mui-segmented-control{background-color:#fff;}
.waitSure .mui-segmented-control.mui-segmented-control-inverted .mui-control-item{position:relative;color:#666;font-size:14px;line-height:45px;}
.waitSure .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{border:0;color:#333;}
.waitSure .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active:after{content:'';position:absolute;bottom:0px;left:50%;margin-left:-14px;
width:28px;height:2px;background-color:#00A43E;color:#fff;}
.waitSure .agent-list .mui-scroll-wrapper,.waitSure .agent-list .hd{top:104px;}

</style>


