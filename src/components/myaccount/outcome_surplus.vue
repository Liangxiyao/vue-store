<template>
<div class="outcomeLists" v-if="lists.length">
    <div class="main-cont">
        <div class="item-temp">
            <ul class="main bdb">
                <li>
                    <span class="item-label">{{outcome.orderdown.name}}</span>
                    <span class="item-cont">￥{{outcome.orderdown.money}}</span>
                </li>
                <li>
                    <span class="item-label">{{outcome.dotransfer.name}}</span>
                    <span class="item-cont">￥{{outcome.dotransfer.money}}</span>
                </li>
                <li>
                    <span class="item-label">{{outcome.docharge.name}}</span>
                    <span class="item-cont">￥{{outcome.docharge.money}}</span>
                </li>
            </ul>
            <div class="tit">
                <span class="item-label">{{outcome.total.name}}</span>
                <span class="item-cont">￥{{outcome.total.money}}</span>
            </div>
        </div>
    </div>
    <ul>
        <li class="item pr bdb" v-for="item in lists" >
            <router-link tag="div" :to="`/surplusDetail/outcome/${item.id}`">
                <div class="">
                    <div>{{item.event}}</div>
                    <span class="time">{{item.ctime.replace(/\//g, '-')}}</span>
                </div>
                <div class="money">
                    <span class="num">
                        -{{item.money}}
                    </span>
                    <i class="iconfont icon-jiantou"></i>
                </div>
            </router-link>
        </li>
    </ul>
</div>
</template>

<script>
import { apiSurplusList } from 'api/api';
export default {
    data() {
        return {
            lists: [],
            outcome: {
                total: {
                    money: '',
                    name: '支出总计'
                },
                orderdown: {
                    money: '',
                    name: '下单扣除余额'
                },
                dotransfer: {
                    money: '',
                    name: ''
                },
                docharge: {
                    money: '',
                    name: ''
                }
            },
        }
    },
    created () {
        this._getSurplusList()
    },
    methods: {
        _getSurplusList(){
            apiSurplusList({
                p:1,
                type:'outcome'
            }).then((result) => {
                if(result.status == 1){
                    this.lists = result.data.list
                    this.outcome = result.data.outcome
                }
            }).catch((err) => {
                
            });
        }
    },
}
</script>

<style>

</style>