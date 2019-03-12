<template>
<div class="m-mask" :class="{show:show}">
    <div class="filter-content">
        <i class="icon-close" @click="closeShowFn"></i>
        <div class="mui-scroll-wrapper ">
            <div class="mui-scroll filter-groups">
                <div class="scroll-cont">
                    <dl class="item">
                        <dt class="tit">品牌筛选</dt>
                        <dd class="list clearFix">
                            <span class="s-item cur">全部</span>
                            <span class="s-item">1111</span>
                            <span class="s-item">2222</span>
                            <span class="s-item">3333</span>
                            <span class="s-item">4444</span>
                        </dd>
                    </dl>
                    <dl class="item">
                        <dt class="tit">产品分类</dt>
                        <dd class="list clearFix">
                            <span class="s-item cur">全部</span>
                            <span class="s-item">姜力1</span>
                            <span class="s-item">姜力2</span>
                            <span class="s-item">姜力3</span>
                            <span class="s-item">姜力4</span>
                        </dd>
                    </dl>
                    <dl class="item">
                        <dt class="tit">产品分类</dt>
                        <dd class="list clearFix">
                            <span class="s-item cur">全部</span>
                            <span class="s-item">姜力1</span>
                            <span class="s-item">姜力2</span>
                            <span class="s-item">姜力3</span>
                            <span class="s-item">姜力4</span>
                        </dd>
                    </dl>
                    <dl class="item">
                        <dt class="tit">产品分类</dt>
                        <dd class="list clearFix">
                            <span class="s-item cur">全部</span>
                            <span class="s-item">姜力1</span>
                            <span class="s-item">姜力2</span>
                            <span class="s-item">姜力3</span>
                            <span class="s-item">姜力4</span>
                        </dd>
                    </dl>
                </div>	
            </div>
        </div>
        <div class="btns-groups">
            <div class="wrap wbox">
                <a class="wbox-flex btn reset" href="javascript:;">重置</a>
                <a class="wbox-flex btn sure" href="javascript:;">确定</a>
            </div>	
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:['show'],
    data(){
        return{
            
        }
    },
    created(){
        this.$nextTick(()=>{
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            })
        })
    },
    methods:{
        closeShowFn(){
            this.$emit('closeDialog',false)
        },
    }
}
</script>

<style>
.m-mask{width:100%;height:100%;position:fixed;background-color:rgba(0,0,0,.5);top:100%;left:0;z-index:50;}
.m-mask.show{top:0}
.filter-content{background-color:#fff;position:fixed;left:0;right:0;bottom:0;z-index:51;margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom);
min-height:400px;max-height:475px;-webkit-transform:translateY(500px);transform:translateY(500px);-webkit-transition:transform .3s;transition:transform .3s;}
.show .filter-content{-webkit-transform:translateY(0);transform:translateY(0)}
.icon-close{position: absolute;top:5px;right:5px;width:30px;height:30px;background: url(../index/icon2.png) no-repeat 0 -2px;background-size:35px;z-index: 100;}
.filter-content .mui-scroll-wrapper{bottom:66px;top:20px;}
.filter-content .btns-groups{position:absolute;bottom:0;left:0;right:0;border-top: 1px solid #ddd;padding:10px 15px;margin-bottom: constant(safe-area-inset-bottom);margin-bottom: env(safe-area-inset-bottom)}
.filter-content .btns-groups .wrap{width:100%;border-radius:5px;overflow: hidden;}
.filter-content .btns-groups .btn{display: block;width:50%;height:40px;line-height:40px;background: #f0f0f0;font-size:16px;color:#333;text-align: center;}
.filter-content .btns-groups .sure{color:#fff;background-color:#00a43e;}
.filter-groups{padding-right:15px;font-size:13px;box-sizing: border-box;}
.filter-groups .item{margin-bottom:10px;}
.filter-groups .item .tit{color:#999;line-height:13px;margin-bottom:15px;padding:0 15px;}
.filter-groups .item .s-item{float:left;color:#333;line-height:14px;padding:8px 0;text-align: center;min-width:80px;margin-left:15px;margin-bottom:10px;
border-radius:5px;background-color:#f0f0f0;}
.filter-groups .item .s-item.cur{background-color:#e3f6eb;color:#009933;}

</style>

