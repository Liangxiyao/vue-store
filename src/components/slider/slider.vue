<template>
  <div class="slider-wrap">
		<div class="mui-slider">
			<div class="mui-slider-group mui-slider-loop">
				<!-- 复制最后一张 -->
				<div class="mui-slider-item mui-slider-item-duplicate" v-for="">
					<a href=""><img src="http://starokay.b0.upaiyun.com/star/goods/2017-05-27/59299aebe1f8b.jpg"></a>
				</div>
				<div class="mui-slider-item">
					<a href=""><img src="http://starokay.b0.upaiyun.com/star/goods/2017-05-27/59299aebe1f8b.jpg"></a>
				</div>
				<div class="mui-slider-item">
					<a href=""><img src="http://starokay.b0.upaiyun.com/star/goods/2017-05-27/59299aebe1f8b.jpg"></a>
				</div>
				<!-- 复制第一张 -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href=""><img src="http://starokay.b0.upaiyun.com/star/goods/2017-05-27/59299aebe1f8b.jpg"></a>
				</div>
			</div>
			<div class="mui-slider-indicator">
				<div class="mui-indicator mui-active"></div>
				<div class="mui-indicator"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
.slider-wrap{background-color:#fff;}
.mui-slider{max-width:640px;max-height:640px;margin:0 auto;background-color:#fff;}
.mui-slider .mui-slider-item{padding:10px 15px;}
.mui-slider .mui-slider-item img{border-radius:6px;-webkit-box-shadow: 0 2px 10px #666;box-shadow: 0 2px 10px #666;}
.mui-slider-indicator{bottom:15px;}
.mui-slider-indicator .mui-indicator{width:10px;height:2px;border-radius:2px;margin:0 2px 0 0;box-shadow:none;}

</style>
