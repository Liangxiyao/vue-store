<template>
<div class="statist">
    <m-header>
        <div class="tab-header" slot="header-cont">
            <ul class="mui-segmented-control">
                <li class="mui-control-item " :class="[active==0?'mui-active':'']" @click="tabChange(0,'orderStatics')">
                    业绩
                </li>
                <li class="mui-control-item" :class="[active==1?'mui-active':'']" @click="tabChange(1,'viewSttatics')">
                    访客
                </li>
            </ul>
        </div>
    </m-header>
    <keep-alive>
        <component :is="tabView"></component>
    </keep-alive>

</div>
</template>

<script>
import mHeader from 'base/header/header'
import orderStatics from './orderStatics'
import viewStatics from './viewStatics'

export default {
    components: {
        mHeader,
        orderStatics,
        viewStatics
    },
    data() {
        return {
            tabView: 'orderStatics',
            active:0,
            tabArr:['orderStatics','viewStatics'],
        }
    },
    methods: {
        tabChange(index,tabname) {
            this.active = index   
            this.tabView = this.tabArr[index]
        },


    },
}
</script>

<style>
@import '../../common/css/tabHeader';

.results-date{width: 100%; background: #fff;position: fixed;display:flex;z-index:10;}
.results-date li{flex:1;height: 45px;line-height: 45px;text-align: center;}
.results-date .active span{display: inline-block;border-bottom: 2px solid #00a43e;}
.results-line{width: 100%;display: table;margin-top: 10px;}
.results-line .line { width: 100%; float: left;height: 200px;}
.results-list{margin:15px; background: #00a43e; border-radius: 8px; overflow: hidden; color: #fff;}
.results-list{margin:15px; background: #00a43e; border-radius: 8px; overflow: hidden; color: #fff;}
.results-list ul li{width: 50%; float: left; padding:14px 0; text-align: center;color: #fff; font-size: 13px; position: relative;}
.results-list ul li p{color: #fff; font-size: 18px; line-height: 30px;}
.results-list ul li img{width: 80px;position: absolute;left:0;bottom: 0;}
.results-list ul .results-li{border-right: 1px solid #33b665;}
.results-order {margin: 15px;background: #fff;border-radius: 8px;overflow: hidden;}
.results-cont{font-size:13px;color:#333;width:100%;}
.results-title{box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);  padding:15px 0;}
.results-title th{color:#999;padding:15px 0;font-weight:500}
.results-cont .lists  td{padding:10px 0;line-height:30px;}
.results-cont .lists .left{ text-align: left;padding-left: 10px;}
.results-cont .lists .center{text-align: center;}
.results-cont .lists .right{text-align: right;padding-right: 10px;}

</style>