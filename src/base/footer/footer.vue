<template>
    <van-tabbar v-model="active" class="footer-nav" active-color="#00a43e" safe-area-inset-bottom route>
        <van-tabbar-item 
                :to="item.url" 
                :icon='item.icon' 
                v-for="(item,index) in nav" 
                :key="index">{{item.text}}</van-tabbar-item>
    </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    components: {
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem
    },
    data(){
        return{
            active:0,
            nav:[
            {
                icon:'home',
                text:'首页',
                url:'/index'
            },{
                icon:'set',
                text:'店铺管理',
                url:'/shopManage'
            },{
                icon:'car',
                text:'购物车',
                url:'/shopCart'
            },{
                icon:'-mine',
                text:'我的',
                url:'/myself'
            }], 
        }
    },
    methods:{
    }
}
</script>
<style>
.footer-nav{box-shadow: 0 -1px 10px #dcdce6;}
.van-info{background-color: #00a43e;}
.van-tabbar-item{color:#333}
.footer-nav .van-icon{width: 20px;height:20px;background: url(../../common/images/icon-fixednav.png) no-repeat -5px -5px;background-size:60px;}
.footer-nav .van-icon-set{background-position-y:-35px;}
.footer-nav .van-icon-car{background-position-y:-65px;}
.footer-nav .van-icon-mine{background-position-y:-95px;}
.van-tabbar-item--active .van-icon{background-position-x:-35px;}
</style>


