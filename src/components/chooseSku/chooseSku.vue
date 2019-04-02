<template>
 <div class="m-mask" :class="{show:show}">
	<div class="sku-dialog">
		<i class="icon-close" @click="closeShowFn"></i>
		<div class="hd wbox">
		    <div class="img">
		        <img src="http://starokay.b0.upaiyun.com/star/goods/2017-12-05/5a2658f4b2e4f.jpg_thumb" alt="">        
		    </div> 
		    <div class="content wbox-flex">
		        <div class="price-wrap"> 
		             <span class="price">¥250</span>
					 <s class="old-price">¥330</s>
		        </div>
		        <div class="sku-dtips">已选择: 
		              <span id="skuTipsContent1627207" class="showsku">包装规格:500ml&nbsp;</span>
		        </div>
		    </div> 
		</div>
		<div class="line"><p></p></div>
		<div class="mui-scroll-wrapper bd">
			<div class="mui-scroll filter-groups">
				<div class="scroll-cont" >
					<dl class="item"  v-if="skuList.length != 0" v-for="list in skuList" >
						<dt class="tit" :data-id="list.sku_id">{{list.sku_str}}</dt>
						<dd class="list clearFix">
							<span class="s-item" :class="{cur:currentSkuIndex==index}"
                                    v-for="(item,index) in list.sku_list" 
                                    :key="item.skuv_id"
                                    :data-sid="item.skuv_id"
                                    @click="chooseSkuItem(index)"
                                    >{{item.sku_value_str}}</span>
						</dd>
					</dl>
					<dl class="buy-num">
						<dt class="tit fl">购买数量</dt>
						<dd class="wrap fr">
							<span id="cut" class="cut no">-</span>
							<input id="goodsNum" class="fl num"  type="text" readonly="readonly" value="1" />
							<span id="add" class="add">+</span>
						</dd>
					</dl>
				</div>	
			</div>
		</div>		
		<div class="dialog-btn">
			<div class="btn sure-btn">确定</div>	
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
        skuList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            currentSkuIndex:0
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
        chooseSkuItem(index){
            this.currentSkuIndex = index
        },
        closeShowFn(){    
            this.$emit('closeDialog',false)
        },
    }
}
</script>

<style>
.m-mask{width:100%;height:100%;position:fixed;background-color:rgba(0,0,0,.5);top:100%;left:0;z-index:50;}
.m-mask.show{top:0}
.sku-dialog{background-color:#fff;position:fixed;left:0;right:0;bottom:0;z-index:51;margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom);
min-height:400px;max-height:475px;-webkit-transform:translateY(500px);transform:translateY(500px);-webkit-transition:transform .3s;transition:transform .3s;}
.show .sku-dialog{-webkit-transform:translateY(0);transform:translateY(0)}
.icon-close{position: absolute;top:5px;right:5px;width:30px;height:30px;background: url(../../common/images/icon2.png) no-repeat 0 -2px;background-size:35px;z-index: 100;}
.sku-dialog .hd{width:100%;padding:15px;}
.sku-dialog .hd .img{margin-top:-30px;margin-right:10px;background-color:#fff;z-index:10;
-webkit-border-radius:5px;border-radius:5px;width:100px;height:100px;overflow: hidden;}
.sku-dialog .hd .img img{width:100%;height:100%;display:block;-webkit-border-radius:4px;border-radius:4px;}
.sku-dialog .hd .content{overflow:hidden;display: -webkit-flex;display: flex;-webkit-flex-wrap: wrap;flex-wrap: wrap;
-webkit-align-content: space-between;align-content: space-between;flex-direction:row;margin-top:10px;}
.sku-dialog .hd .content .price-wrap{font-size:20px;width:100%;}
.sku-dialog .hd .content .price-wrap .old-price{color:#ccc;font-size:15px;padding-left:5px;}
.sku-dialog .hd .content .sku-dtips{color:#333;font-size:15px;margin-bottom:10px;}
.sku-dialog .hd .content .sku-dtips span{padding-left:5px}
.sku-dialog .line{padding:0 15px;}
.sku-dialog .line p{width:100%;height:15px;border-top:1px solid #ddd;}
.sku-dialog .mui-scroll-wrapper{top:102px;bottom:62px;padding-top:15px;}
.dialog-btn{position:absolute;bottom:0;left:0;right:0;padding:10px 15px;text-align: center;font-size:15px;color:#fff;border-top:1px solid #ddd;}
.dialog-btn .btn{width:100%;height:40px;line-height:40px;background-color:#00A43E;border-radius:5px;}
.sku-dialog .filter-groups .item .tit{font-size:15px;color:#333;}
.sku-dialog .buy-num{border-top:1px solid #ddd;margin-left:15px;padding-top:15px;clear:both;overflow: hidden;margin-bottom:15px;line-height:30px;}
.sku-dialog .buy-num .tit{font-size:15px;color:#333;}
.sku-dialog .buy-num .wrap{height:28px;line-height:27px;border:1px solid #ccc;border-radius:2px;box-sizing: border-box;}
.sku-dialog .buy-num span{float:left;padding:0 10px;text-align: center;color:#333;font-size:16px;}
.sku-dialog .buy-num .cut{line-height:27px;}
.sku-dialog .buy-num .no{color:#ccc;}
.sku-dialog .buy-num .num{width:40px;height:100%;line-height:100%;border: none;font-size:14px;line-height:25px;text-align: center;}
.filter-groups{padding-right:15px;font-size:13px;box-sizing: border-box;}
.filter-groups .item{margin-bottom:10px;}
.filter-groups .item .tit{color:#999;line-height:13px;margin-bottom:15px;padding:0 15px;}
.filter-groups .item .s-item{float:left;color:#333;line-height:14px;padding:8px 0;text-align: center;min-width:80px;margin-left:15px;margin-bottom:10px;
border-radius:5px;background-color:#f0f0f0;}
.filter-groups .item .s-item.cur{background-color:#e3f6eb;color:#009933;}

</style>

