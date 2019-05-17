<template>
<div class="branch">
    <m-header>
        <div class="tab-header" slot="header-cont">
            <ul class="mui-segmented-control" v-if="branch.number">
                <li class="mui-control-item " :class="[$route.path == '/mybranch'?'mui-active':'']" @click="go('mybranch')">
                    分店(<span>{{branch.number.shopNum}}</span>)
                </li>
                <li class="mui-control-item" :class="[$route.path == '/waitSure'?'mui-active':'']" @click="go('waitSure')">
                    待确认(<span>{{branch.number.unacceptNum}}</span>)
                </li>
            </ul>
        </div>
    </m-header>
    <keep-alive><router-view/></keep-alive>
</div>
</template>
<script>
import mHeader from 'base/header/header'
import { apiBranch } from 'api/api'
import BranchList from './branchList'
import WaitSure from './waitSure'
import { mapMutations } from 'vuex';
export default {
    components:{
        mHeader,
        BranchList,
        WaitSure
    },
    data(){
        return{
            branch:{},
        }
    },
    created(){
        this.getBranch()
    },
    methods:{
        ...mapMutations(['branchData']),
        getBranch(){
            apiBranch(1).then((result) => {
                console.log(result)
                if(result.status == 1){
                    this.branch = result.data
                    this.branchData(this.branch.list)    //提交mutations
                }
            }).catch((err) => {
                
            });
        },
        go(url){    //tab跳转
            this.$router.push(url)
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

</style>
