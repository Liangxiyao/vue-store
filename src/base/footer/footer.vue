<template>
<div class="footer">
    <keep-alive><router-view/></keep-alive>
    <nav class="mui-bar mui-bar-tab footer-nav">
    <!-- <a class="mui-tab-item" :class="[navIndex==index?'mui-active':'']"  :href="item.url" v-for="(item,index) in nav" :key="index" @click="link(index)">
        <span class="mui-icon" :class="item.icon"></span>
        <span class="mui-tab-label">{{item.text}}</span>
    </a> -->
        <router-link :to="item.url" class="mui-tab-item" v-for="(item,index) in nav" :key="index">
            <span class="mui-icon" :class="item.icon"></span>
            <span class="mui-tab-label">{{item.text}}</span>
        </router-link>
    </nav>
    
</div>
  
    
</template>
<script>
export default {
    data(){
        return{
            nav:[
            {
                icon:'m-icon-home',
                text:'首页',
                url:'/index'
            },{
                icon:'m-icon-set',
                text:'店铺管理',
                url:'/shopManage'
            },{
                icon:'m-icon-cart',
                text:'购物车',
                url:'/shopCart'
            },{
                icon:'m-icon-mine',
                text:'我的',
                url:'/myself'
            }],
            navIndex:0     
        }
    },
    methods:{
    }
}
</script>
<style>
.footer-nav{background-color: #fff;-webkit-box-shadow: 0 -1px 10px #dcdce6;
    box-shadow: 0 -1px 10px #dcdce6;margin-bottom: constant(safe-area-inset-bottom);margin-bottom: env(safe-area-inset-bottom)}
.footer-nav .mui-tab-item{color:#333;}
.footer-nav .mui-icon{width: 20px;height:20px;background: url(../../common/images/icon-fixednav.png) no-repeat -5px -5px;background-size:60px;}
.footer-nav .m-icon-set{background-position-y:-35px;}
.footer-nav .m-icon-cart{background-position-y:-65px;}
.footer-nav .m-icon-mine{background-position-y:-95px;}
.footer-nav .mui-tab-item.router-link-active,.footer-nav .mui-tab-item.mui-active{color:#00a43e;font-weight:600;}
.footer-nav .mui-tab-item.router-link-active .mui-icon,.footer-nav .mui-tab-item.mui-active .mui-icon{background-position-x:-35px;}
.footer-nav .m-icon-cart{position:relative;}
.footer-nav .m-icon-cart .icon-num{position: absolute;top:-5px;left:10px;padding:3px 4px 2px 4px;line-height:10px;
background-color:#00a43e;color:#fff;font-size:12px;border-radius:10px;}


</style>


