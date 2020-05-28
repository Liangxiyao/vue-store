<template>
<div class="m-mask chooseSku" :class="{show:show}">
	<div class="dialog-body">
		<i class="icon-close"  @click="closeShowFn"></i>
		<div class="hd wbox">
		    <div class="img" v-if="skuDialog.imgs">
		        <img  :src="skuDialog.imgs[0]" alt="">        
		    </div> 
		    <div class="content wbox-flex">
		        <div class="price-wrap"> 
		            <span class="price">¥{{skuDialog.price}}</span>
					      <s class="old-price">¥{{skuDialog.market_price}}</s>
		        </div>
		        <div class="sku-dtips">已选择: 
		            <span class="showsku" v-for="sku in selectedSkuItem">{{sku}}</span>
		        </div>
		    </div> 
		</div>
		<div class="mui-scroll-wrapper bd" data-scroll="1">
			<div class="mui-scroll filter-groups" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
				<div class="scroll-cont">
					<dl class="item"  v-if="dialogInfo" v-for="list in dialogInfo" :key="list.sku_id">
						<dt class="tit" :data-id="list.sku_id">{{list.sku_str}}</dt>
						<dd class="list clearFix">
							<span class="s-item" :class="[currentId==item.skuv_id?'cur':'']"
                                    v-for="(item,index) in list.sku_list" 
                                    :key="item.skuv_id"
                                    :data-sid="item.skuv_id"
                                    @click="chooseSkuItem(item)"
                                    >{{item.sku_value_str}}</span>
						</dd>
					</dl>
					<dl class="buy-item buy-num bdt">
						<dt class="tit fl">购买数量</dt>
						<dd class="wrap fr">
							<span id="cut" class="btn cut" :class="{'no':buyNum >= 1}" @click="numCut()">-</span>
							<input class="fl num goodsNum" type="text" readonly="readonly" v-model="buyNum">
							<span id="add" class="btn add" @click="numAdd()">+</span>
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
        skuDialog:{
            type:Object,
            default:{}
        }
    },
    data(){
        return{
            currentId:0,
            dialogInfo:{},
            buyNum:1,
            selectedSkuItem:[] //选择的sku
        }
    },
    watch:{
        skuDialog(val){         
            this.dialogInfo = val.sku
            this.buyNum = val.canbuy
        }
    },
    updated(){
        this.$nextTick(()=>{
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            })
        })
    },
    methods:{
        chooseSkuItem(item){
            this.currentId = item.skuv_id
        },
        numAdd(){
            this.buyNum++
        },
        numCut(){
            this.buyNum--
            if(this.buyNum < 1){
                this.buyNum = 1
            }
        },
        closeShowFn(){    
            this.$emit('toggleDialog',false)
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
.dialog-body .hd{width:100%;padding:15px;position:relative;}
.dialog-body .hd:after{content:'';position:absolute;bottom:0;left:15px;right:15px;height: 1px;-webkit-transform: scaleY(.5);transform: scaleY(.5);background-color: #ddd;}
.dialog-body .hd .img{margin-top:-30px;margin-right:10px;background-color:#fff;z-index:10;
-webkit-border-radius:5px;border-radius:5px;width:100px;height:100px;overflow: hidden;}
.dialog-body .hd .img img{width:100%;height:100%;display:block;-webkit-border-radius:4px;border-radius:4px;}
.dialog-body .hd .content{overflow:hidden;display: -webkit-flex;display: flex;-webkit-flex-wrap: wrap;flex-wrap: wrap;
-webkit-align-content: space-between;align-content: space-between;flex-direction:row;margin-top:10px;}
.dialog-body .hd .content .price-wrap{font-size:20px;width:100%;}
.dialog-body .hd .content .price-wrap .old-price{color:#ccc;font-size:15px;padding-left:5px;}
.dialog-body .hd .content .sku-dtips{color:#333;font-size:15px;margin-bottom:10px;}
.dialog-body .hd .content .sku-dtips span{padding-left:5px}
.dialog-body .mui-scroll-wrapper{top:102px;bottom:62px;padding-top:15px;}
.dialog-btn{position:absolute;bottom:0;left:0;right:0;padding:10px 15px;text-align: center;font-size:15px;color:#fff;}
.dialog-btn:before{position: absolute;right: 0;top:-1px;left:0;height: 1px;content: '';-webkit-transform: scaleY(.5);transform: scaleY(.5);background-color: #ddd;}
.dialog-btn .btn{width:100%;height:40px;line-height:40px;background-color:#00A43E;border-radius:5px;}
.dialog-body .filter-groups .item .tit{font-size:15px;color:#333;}
.dialog-body .buy-item{margin-left:10px;padding-top:15px;clear:both;overflow: hidden;line-height:30px;}
.dialog-body .buy-item .tit{font-size:15px;color:#333;}
.dialog-body .buy-item .wrap{height:28px;line-height:27px;border:1px solid #ccc;border-radius:2px;box-sizing: border-box;}
.dialog-body .buy-item .btn{float:left;padding:0 10px;text-align: center;color:#333;font-size:16px;}
.dialog-body .buy-item .cut{line-height:27px;}
.dialog-body .buy-item .no{color:#ccc;}
.dialog-body .buy-item .num{width:40px;height:100%;border: none;font-size:14px;line-height:25px;text-align: center;padding:0;}
.filter-groups{padding-right:15px;padding-left:5px;font-size:13px;box-sizing: border-box;}
.filter-groups .scroll-cont{padding-bottom:20px;}
.filter-groups .item{margin-bottom:10px;}
.filter-groups .item .tit{color:#999;line-height:13px;margin-bottom:15px;padding:0 10px;}
.filter-groups .item .s-item{float:left;color:#333;line-height:14px;padding:8px 15px;text-align: center;min-width:80px;margin-left:10px;margin-bottom:10px;
border-radius:5px;background-color:#f0f0f0;}
.filter-groups .item .s-item.cur{background-color:#e3f6eb;color:#009933;}


</style>

