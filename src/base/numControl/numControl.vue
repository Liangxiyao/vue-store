<template>
    <div class="fr edit-cont ">
        <span class="btn cut" :class="{no:good.number<=1}" @click="cutCount">-</span>
        <input class="pro-num" type="text"  v-model="good.number" 
                                            @focus="focusFn($event.target.value)"                                            
                                            @blur="inputFn($event.target.value)">
        <span class="btn add" @click="addCount">+</span>
    </div>
</template>
<script>
import {apiShopCartNum} from "api/api"
export default {
    props:{
        good:{
            type:Object,
        }
    },
    data(){
        return{
           oldNum:this.good.number
        }
    },
    computed:{
        number(val){
            if(this.good.number <=0 ){
                this.good.number = 1
            }
        }
    },
    methods:{
        addCount(){
             if(!this.good.number){
                this.$set(this.good,"number",1); //此处需要$set设置，否则不会触发视图层更新
            }else{ 
                if(this.good.MaxNum && this.good.number >= this.good.MaxNum){ //最大购买量
                    alert('超出最大购买数量')
                    this.good.number = this.good.MaxNum
                    return;
                }
                this.good.number++;
                let data = {
                    id:this.good.id,
                    goods_id:this.good.goods_id,
                    number:this.good.number
                }
                this._getShopCartNum(data)
            }
            
        },
        cutCount(){    
            if(this.good.number <= 1){
                this.good.number = 1
            }else{
                this.good.number--
                let data = {
                    id:this.good.id,
                    goods_id:this.good.goods_id,
                    number:this.good.number
                }
                this._getShopCartNum(data)
            }          
        },
        focusFn(val){
            this.oldNum = val
        },
        keyupFn(val){
            this.good.number = val.replace(/[^\d]/g,'')
        },
        inputFn(val){  
            if(~~val < 1){
                this.good.number = 1
            }else{
                this.good.number = ~~val
                if(this.good.MaxNum && this.good.number >= this.good.MaxNum){ //最大购买量
                    alert('超出最大购买数量')
                     this.good.number = this.oldNum
                    return;
                }
                
                let data = {
                    id:this.good.id,
                    goods_id:this.good.goods_id,
                    number:this.good.number
                }
                this._getShopCartNum(data)
            }
        },
        _getShopCartNum(data){
            apiShopCartNum(data).then((result) => {
                console.log(result.msg)
            }).catch((err) => {
                console.log(err)
            });
        }
    }
}
</script>

<style>
.edit-cont{border:1px solid #ddd;z-index:5;color:#333;border-radius:3px;text-align: center;}
.edit-cont .pro-num{float:left;width:auto;width:40px;height:25px;padding:0;font-size:13px;color:#333;text-align: center;border:none;margin:0;}
.edit-cont .btn{float:left;width:30px;line-height:25px;font-size:13px;}
.edit-cont  .no{color:#ccc;}
</style>
