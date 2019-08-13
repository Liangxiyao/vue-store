<template>
  <div class="slider-wrap">
		<div class="mui-slider">
			<div class="mui-slider-group mui-slider-loop" v-if="imgArr.length">
				<!-- 复制最后一张 -->
				<div class="mui-slider-item mui-slider-item-duplicate" v-if="imgArr.length>1">
					<a href="javascript:;"><img :src="imgArr[imgArr.length-1].src"></a>
				</div>
				<div class="mui-slider-item" v-for="(item,index) in imgArr" :key="index">
					<a href="javascript:;"><img :src="item.src"></a>
				</div>
				<!-- 复制第一张 -->
				<div class="mui-slider-item mui-slider-item-duplicate" v-if="imgArr.length>1">
					<a href="javascript:;"><img :src="imgArr[0].src"></a>
				</div>
			</div>
			<div class="mui-slider-indicator" v-if="imgArr.length>1">
				<div class="mui-indicator mui-active"></div>
				<div class="mui-indicator"></div>
			</div>    
		</div>
	</div>
</template>
<script>
export default {
  props:{
      lists:{
          type:Array,
          default:[]
      }
  },
  data(){
      return{  
          objectClass:{
              muiSliderLoop:'mui-slider-loop'
          },
          imgArr:[]
      }
  },
  created () {
  },
  watch:{
      lists(val){
          let arr = []
          val.map((item,index)=>{
              if(!item.src){
                  arr.push({"src":item})
              }else{
                  arr.push(item)
              }
          })
          this.imgArr = arr
      }
  },
  updated(){
        this.sliderFn()
  },
   methods:{
       sliderFn() {
            mui('.mui-slider').slider({
                interval: 3000 //自动轮播周期
            });	
        },
   },
}
</script>
<style>
.slider-wrap{background-color:#fff;}
.mui-slider{max-width:640px;max-height:640px;margin:0 auto;background-color:#fff;}
.mui-slider .mui-slider-item{padding:10px 15px;}
.mui-slider .mui-slider-item img{border-radius:6px;-webkit-box-shadow: 0 2px 10px #666;box-shadow: 0 2px 10px #666;}
.mui-slider-indicator{bottom:15px;}
.mui-slider-indicator .mui-indicator{width:10px;height:2px;border-radius:2px;margin:0 2px 0 0;box-shadow:none;}
</style>
