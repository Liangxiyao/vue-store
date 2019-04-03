<template>
<div class="m-mask filter-content" :class="{show:show}">
	<div class="dialog-body">
		<i class="icon-close" @click="closeShowFn"></i>
		<div class="mui-scroll-wrapper " data-scroll="1">
			<div class="mui-scroll filter-groups" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
				<div class="scroll-cont">
					<dl class="item brand" v-if="brand">
						<dt class="tit">品牌筛选</dt>
						<dd class="list clearFix">
                            <span class="s-item" :class="{cur:currentBrandIndex==index}" 
                                                 v-for="(item,index) in brand" 
                                                 :data-id="item.id" 
                                                 @click="chooseBrandItem(index)">{{item.brand_name}}</span>
                        </dd>
					</dl>
					<dl class="item tag" v-if="tag">
						<dt class="tit">产品分类</dt>
						<dd class="list clearFix" >
                            <span class="s-item" :class="{cur:currentTagIndex==index}" 
                                                 v-for="(item,index) in tag" 
                                                 :data-id="item.id" 
                                                 @click="chooseTagItem(index)">{{item.tag_name}}</span>
                        </dd>
					</dl>
				</div>	
			</div>
		</div>
		<div class="dialog-btn bdt">
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
    props:{
        show:{
            type:Boolean,
            default:false
        },
        brand:{
            type:Array,
            default:[]
        },
        tag:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            currentBrandIndex:0,
            currentTagIndex:0,
            choosedSkuItem:{}
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
        chooseBrandItem(index){
            this.currentBrandIndex = index
        },
        chooseTagItem(index){
            this.currentTagIndex = index
        },
        sureFn(){

        },
    }
}
</script>

<style>
.m-mask{width:100%;height:100%;position:fixed;background-color:rgba(0,0,0,.5);top:120%;left:0;z-index:50;}
.m-mask.show{top:0}
.dialog-body{background-color:#fff;position:absolute;left:0;right:0;bottom:0;top:30%;z-index:51;border-radius:10px 10px 0 0;
margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom);-webkit-transform:translateY(500px);transform:translateY(500px);-webkit-transition:transform .3s;transition:transform .3s;}
.show .dialog-body{-webkit-transform:translateY(0);transform:translateY(0)}
.icon-close{position: absolute;top:10px;right:10px;width:30px;height:30px;background: url(../../common/images/icon2.png) no-repeat 0 -2px;background-size:35px;z-index: 100;}
.filter-content.show .dialog-body{top:50%;}
.filter-content .dialog-body .mui-scroll-wrapper{top:15px;padding-top:15px}
.filter-content .mui-scroll-wrapper{bottom:66px;top:20px;}
.filter-content .dialog-btn{position:absolute;bottom:0;left:0;right:0;padding:10px 15px;bottom: constant(safe-area-inset-bottom);bottom: env(safe-area-inset-bottom)}
.filter-content .dialog-btn .wrap{width:100%;border-radius:5px;overflow: hidden;}
.filter-content .dialog-btn .btn{display: block;width:50%;height:40px;line-height:40px;background: #f0f0f0;font-size:16px;color:#333;text-align: center;border-radius:0;}
.filter-content .dialog-btn .sure{color:#fff;background-color:#00a43e;}
.filter-groups{padding-right:15px;padding-left:5px;font-size:13px;}
.filter-groups .scroll-cont{padding-bottom:20px;}
.filter-groups .item{margin-bottom:20px;}
.filter-groups .item .tit{color:#999;line-height:13px;margin-bottom:15px;padding:0 10px;}
.filter-groups .item .s-item{float:left;color:#333;line-height:14px;padding:8px 15px;text-align: center;min-width:80px;margin-left:10px;margin-bottom:10px;
border-radius:5px;background-color:#f0f0f0;}
.filter-groups .item .s-item.cur{background-color:#e3f6eb;color:#009933;}

</style>

