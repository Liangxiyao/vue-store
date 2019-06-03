<template>
<div class="mui-content">
    <ul class="results-date">
        <li :class="{active:num==0}" @click="_getOrderStatics('week',0)"><span class="results-border">7天</span></li>
        <li :class="{active:num==1}" @click="_getOrderStatics('month',1)"><span>30天</span></li>
        <li :class="{active:num==2}" @click="_getOrderStatics('threeMonth',2)"><span>90天</span></li>
    </ul>
    <div class="results-line">
        <div class="line" id="myChart" ></div>
    </div>
    <div class="results-list">
        <ul>
            <li class="results-li">
                <p>{{data.orderNums}}</p>
                <span>成交订单(个)</span>
                <img src="../../common/images/results.png">
            </li>
            <li>
                <p>{{data.totalMoney}}</p>
                <span>总业绩(元)</span>
            </li>
        </ul>
    </div>
    <div class="results-order">
        <table class="results-cont" v-if="data.orderlist.length">
            <tr class="results-title">
                <th class="left">订单号</th>
                <th class="center">下单时间</th>
                <th class="right">金额(元)</th>
            </tr>
            <tr class="lists" v-for="(item,index) in data.orderlist">
                <td class="left  bdb">{{item.notice_sn}}</td>
                <td class="center  bdb">{{item.ctime}}</td>
                <td class="right  bdb">{{item.money}}</td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import { apiOrderStatics } from 'api/api';
export default {
    data() {
        return {
            myChart: {},
            num:0,
            data:{
                daysMoney:[],
                daysOrder:[],
                orderNums:0,
                orderlist:[],
                totalMoney:0
            }
        }
    },
    created () {
        this._getOrderStatics('week',0)   
    },
    mounted () {
        window.onresize = () => {
            this.myChart.resize();
        }
    },
    methods: {
        _getOrderStatics(time,num){
            this.num = num
            apiOrderStatics({
                time:time
            }).then((result) => {
                if(result.status == 1){
                    this.data = result.data
                    let xData = []
                    let seriesData = []
                    this.data.daysMoney.forEach((val,index)=>{
                        xData.push(val.date)
                        seriesData.push(val.money)
                    })
                    this.echartsData({
                        xData,
                        seriesData
                    })
                }
            }).catch((err) => {
                
            });
        },
        echartsData({xData,seriesData}){
           this.myChart = this.$echarts.init(document.getElementById('myChart'))
           this.myChart.setOption({
                title: { text: '' },
                itemStyle: {
                    color: '#00a43e'
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#999999'// x轴字体的颜色
                                }
                            },
                    axisTick:{
                            show:false,
                            lineStyle:{color:'#999999'}    // x轴刻度的颜色
                            },
                    axisLine:{
                            show:false,
                            lineStyle:{color:'#999999'}    // x轴坐标轴颜色
                        },
                    data: xData
                },
                yAxis: {
                    axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#999999'// x轴字体的颜色
                                }
                            },
                    axisTick:{
                            show:false,
                            lineStyle:{color:'#999999'}    // x轴刻度的颜色
                            },
                    axisLine:{
                            show:false,
                            lineStyle:{color:'#999999'}    // x轴坐标轴颜色
                        },
                    type: 'value'
                },
                series: [     
                    {
                        name:'业绩',
                        type:'line',
                        stack: '总量',
                        data:seriesData
                    }
                ]
            });
        }
    },
}
</script>

<style>

</style>