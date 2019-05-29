<template>
<van-popup v-model="show" position="bottom" class="filterDialog" :close-on-click-overlay="false">
    <i class="icon-close" @click="close"></i>
    <div class="filter-groups  loan-filter">
        <div class="scroll-cont">
            <dl class="item">
                <dt class="tit">选择日期</dt>
                <dd class="list wbox date-wrap">
                    <button id='startDate' @click="dateTime(0)" type="button" class="mui-btn wbox-flex">{{startDate?startDate:'请选择开始时间'}}</button>
                    <span style="">至</span>
                    <button id='endDate' @click="dateTime(1)"  type="button" class="mui-btn wbox-flex">{{endDate?endDate:'请选择结束时间'}}</button>
                </dd>
            </dl>
            <dl class="item">
                <dt class="tit">贷款类型</dt>
                <dd class="list clearFix">
                    <span class="s-item"  v-for="(item,index) in lists" :class="{cur:activeItem==index}" @click="activeItem = index">{{item.event}}</span>
                </dd>
            </dl>
        </div>	
    </div>
    <div class="dialog-btn bdt">
        <div class="wrap wbox">
            <span class="wbox-flex btn reset" @click="reset">重置</span>
            <span class="wbox-flex btn sure" >确定</span>
        </div>
    </div>
    <van-datetime-picker 
            :class="{show:dateShow}" 
            v-model="currentDate" 
            type="date" 
            :min-date="minDate" 
            :title="title"
            @confirm='confirmDate'/>
</van-popup>
</template>

<script>
export default {
    props:['show','lists'],
    data() {
        return {
            //isShow:this.show,
            dateShow:false,
            currentDate: new Date(),
            minDate:new Date(),
            title:'',
            startDate:'',
            endDate:'',
            status:0,   //保存当前点击的是哪个日期框
            activeItem:0
        }
    },
    methods: {
        close(){
            console.log(this.show);
            
        },
        dateTime(num) {
            if(num==1){
                if(this.startDate == ''){
                    returnz
                }else{
                    let date = this.startDate.split('-')
                    this.minDate = new Date(date) //设置结束日期的开始时间                  
                }

            }
            this.status = num
            this.dateShow = true;
            this.title = '请选择时间'
        },
        confirmDate(value){
            let strDate = '';
            strDate += value.getFullYear()+"-"
            strDate += value.getMonth()+1+"-";
            strDate += value.getDate();
            
            if(this.status == 0){
                this.startDate =  strDate
            }else if(this.status == 1){
                this.endDate =  strDate
            }
            
            this.dateShow = false
        },
        reset(){
            this.startDate = ''
            this.endDate = ''
            this.activeItem = 0
        }
    },
}
</script>

<style>
.filterDialog{border-radius:10px 10px 0 0;top:50%;overflow: hidden;}
.icon-close{position: absolute;top:10px;right:8px;width:30px;height:30px;background: url(../../common/images/icon2.png) no-repeat 0 0;background-size:35px;z-index: 100;}
.filterDialog .dialog-btn{position:absolute;bottom:0;left:0;right:0;padding:10px 15px;bottom: constant(safe-area-inset-bottom);bottom: env(safe-area-inset-bottom)}
.filterDialog .dialog-btn .wrap{width:100%;border-radius:5px;overflow: hidden;}
.filterDialog .dialog-btn .btn{display: block;width:50%;height:40px;line-height:40px;background: #f0f0f0;font-size:16px;color:#333;text-align: center;border-radius:0;}
.filterDialog .dialog-btn .sure{color:#fff;background-color:#00a43e;}
.filter-groups{font-size:13px;padding:15px;margin-top:20px}
.filter-groups .item{margin-bottom:10px;}
.filter-groups .item .tit{color:#999;line-height:13px;margin-bottom:15px;}
.filter-groups .item .s-item{float:left;color:#333;line-height:14px;padding:8px 15px;text-align: center;min-width:80px;margin-bottom:10px;margin-right:10px;
border-radius:5px;background-color:#f0f0f0;}
.filter-groups .item .s-item.cur{background-color:#e3f6eb;color:#009933;}

.loan-filter .item{margin-bottom:25px;}
.dialog-body .loan-filter .item .tit{color:#999;}
.date-wrap span{display:inline-block;width:35px;text-align:center;line-height:33px;font-size:13px;}
.date-wrap .mui-btn{border-color:#ddd;}

.van-picker{transform:translateY(100%);position: absolute;top: 0;bottom: 0;width: 100%;background: #fff;z-index:999;transition:all .3s}
.van-picker.show{transform:translateY(0);}
</style>