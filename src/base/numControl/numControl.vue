<template>
    <div class="fr edit-cont ">
        <span class="btn cut" :class="{no:num<=1}" @click="cutCount()">-</span>
        <input class="pro-num" type="text"  v-model="num">
        <span class="btn add" @click="addCount()">+</span>
    </div>
</template>
<script>
export default {
    props:{
        goodsNum:0
    },
    data(){
        return{
            num:this.goodsNum,
        }
    },
    methods:{
        addCount(){
            this.num++
        },
        cutCount(){    
            if(this.num <= 1){
                this.num = 1
                
                return;
            }
            this.num--
        },
    }
}
</script>

<style>
.edit-cont{border:1px solid #ddd;z-index:5;color:#333;border-radius:3px;text-align: center;}
.edit-cont .pro-num{float:left;width:auto;width:40px;height:25px;padding:0;font-size:13px;color:#333;text-align: center;border:none;margin:0;}
.edit-cont .btn{float:left;width:30px;line-height:25px;font-size:13px;}
.edit-cont  .no{color:#ccc;}
</style>
