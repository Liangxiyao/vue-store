<template>
<div class="notfound">
<div class="text">啊哦，页面找不到了</div>
<router-link class="btn" tag='div' to='/index'>
   <span>返回首页</span>
</router-link>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
.notfound{position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align: center;}
.btn span{font-size:14px;color:#333;border: 1px solid #00a43e;padding:5px 20px;color:#00a43e;border-radius:5px;position: relative;top:20px}
</style>