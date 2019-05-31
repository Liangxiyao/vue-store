<template>
<ul v-if="lists.length">
    <li class="item pr bdb" v-for="item in lists">
        <div @click="routerTo(item)">
            <div class="">
                <div>
                    <img class="pic" v-if="item.type == 'receivetransfer' || item.type == 'docharge'" 
                                    :src="item.agentinfo.headimgurl" alt="">
                    {{item.event}}
                </div>
                <span class="time">{{item.ctime.replace(/\//g, '-')}}</span>
            </div>
            <div class="money">
                <span class="num" :class="{green:item.beforemoney < item.aftermoney}">
                    {{item.beforemoney < item.aftermoney?'+'+item.money:'-'+item.money}}
                </span>
                <i class="iconfont icon-jiantou"></i>
            </div>
        </div>
    </li>
</ul>
</template>

<script>
import { apiSurplusList } from 'api/api';
export default {
    data() {
        return {
            lists: []
        }
    },
    created () {
        this._getSurplusList()
    },
    methods: {
        _getSurplusList(){
            apiSurplusList({
                p:1
            }).then((result) => {
                if(result.status == 1){
                    this.lists = result.data.list
                }
            }).catch((err) => {
                
            });
        },
        routerTo(item){
            //income代表减，outcome代表加        
            let status = item.beforemoney < item.aftermoney?'income':'outcome'
            this.$router.push({
                name:'surplusDetail',
                params:{
                    status:status,
                    id:item.id
                }
            })
        }
    },
}
</script>

<style>

</style>