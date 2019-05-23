<template>
<div class="branch">
    <m-header>
        <div class="tab-header" slot="header-cont">
            <ul class="mui-segmented-control" v-if="branch.number">
                <li class="mui-control-item " :class="[active==1?'active':'']" @click="go('/mybranch',1)">
                    分店(<span>{{branch.number.shopNum}}</span>)
                </li>
                <li class="mui-control-item" :class="[active==2?'active':'']" @click="go('/waitSure',2)">
                    待确认(<span>{{branch.number.unacceptNum}}</span>)
                </li>
            </ul>
        </div>
    </m-header>
    <router-view></router-view>
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
            active:1
        }
    },
    created(){
        this.getBranch()
    },
    methods:{
        ...mapMutations(['branchData']),
        getBranch(){
            apiBranch({
                p:1
            }).then((result) => {
                console.log(result)
                if(result.status == 1){
                    this.branch = result.data
                    this.branchData(this.branch.list)    //提交mutations
                }
            }).catch((err) => {
                
            });
        },
        go(url,cur){    //tab跳转
            this.$router.push(url)
            this.active = cur
        }
    }
}
</script>

<style>
/* tab-header */
.mui-title{height:100%;}
.mui-title .tab-header .mui-segmented-control{border:1px solid #999;border-radius:5px;}
.tab-header .mui-segmented-control .mui-control-item{width:95px;height:28px;line-height:28px;font-size:13px;color:#000;border:none;}
.tab-header .mui-segmented-control .mui-control-item.active{background-color:#333;color:#fff;}

</style>
