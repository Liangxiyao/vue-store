<template>
<ul v-if="lists.length">
    <li class="item pr bdb" v-for="item in lists">
        <router-link tag="div" to="/surplusDetail">
            <div class="">
                <div>{{item.event}}</div>
                <span class="time">2019-01-20 04:20:20</span>
            </div>
            <div class="money">
                <span class="num" :class="{green:item.beforemoney < item.aftermoney}">
                    {{item.beforemoney < item.aftermoney?'+'+item.money:'-'+item.money}}
                </span>
                <i class="iconfont icon-jiantou"></i>
            </div>
        </router-link>
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
        }
    },
}
</script>

<style>

</style>