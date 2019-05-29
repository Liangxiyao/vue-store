<template>
<div class="incomeLists"  v-if="lists.length">
    <div class="main-cont">
        <div class="item-temp">
            <ul class="main bdb">
                <li>
                    <span class="item-label">{{income.receivetransfer.name}}</span>
                    <span class="item-cont">￥{{income.receivetransfer.money}}</span>
                </li>
                <li>
                    <span class="item-label">{{income.receivecharge.name}}</span>
                    <span class="item-cont">￥{{income.receivecharge.money}}</span>
                </li>
                <li>
                    <span class="item-label">{{income.charge.name}}</span>
                    <span class="item-cont">￥{{income.charge.money}}</span>
                </li>
                <li>
                    <span class="item-label">{{income.syscharge.name}}</span>
                    <span class="item-cont">￥{{income.syscharge.money}}</span>
                </li>
            </ul>
            <div class="tit">
                <span class="item-label">{{income.total.name}}</span>
                <span class="item-cont">￥{{income.total.money}}</span>
            </div>
        </div>
    </div>
    <ul>
        <li class="item pr bdb" v-for="item in lists">
            <router-link tag="div" :to="`/surplusDetail/income/${item.id}`">
                <div class="">
                    <div>{{item.event}}</div>
                    <span class="time">{{item.ctime.replace(/\//g, '-')}}</span>
                </div>
                <div class="money">
                    <span class="num">
                        +{{item.money}}
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
            income: {
                total: {
                    money: '',
                    name: ''
                },
                syscharge: {
                    money: '',
                    name: ''
                },
                receivetransfer: {
                    money: '',
                    name: ''
                },
                charge: {
                    money: '',
                    name: ''
                },
                receivecharge: {
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
                type:'income'
            }).then((result) => {
                if(result.status == 1){
                    this.lists = result.data.list
                    this.income = result.data.income
                }else{
                    alert(result.msg)
                }
            }).catch((err) => {
                
            });
        }
    },
}
</script>