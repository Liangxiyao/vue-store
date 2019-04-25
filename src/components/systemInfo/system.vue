<template>
<div class="system">
    <m-header>
        <span slot="header-cont">消息中心</span>
    </m-header>
    <div class="mui-content">
        <div class="lists">
            <a class="item wbox bdt" :href="'systemLists?id='+item.id" v-for="item in info" :key="item.id">
                <div class="bd">
                    <img :src="item.logo" alt="">
                </div>
                <div class="hd wbox-flex pr">
                    <i class="dot" v-if="item.unread==1"></i>
                    <div class="name">{{item.title}}</div>
                    <div class="info">{{item.content}}</div>
                </div>
            </a>
        </div>        
	</div>
</div>
</template>
<script>
import mHeader from 'base/header/header'
import { apiSystemMsg } from 'api/api'
export default {
    components:{
        mHeader
    },
    data(){
        return{
            info:[]
        }
    },
    created(){
        this._getInfo()
    },
    methods:{
        _getInfo(){
            apiSystemMsg().then((result) => {
                if(result.status == 1){
                    this.info = result.data
                }else if(result.status == 99){
                    alert('请登录')
                }
            }).catch((err) => {
                alert(err)
            });
        }
    }
}
</script>


<style>
.system .mui-content{margin:15px;}
.system .lists{background: #fff;border-radius:5px}
.system .lists .item{padding:25px 15px;}
.system .lists .item:first-of-type::before{display:none;}
.system .lists .bd img{width:50px;height:50px;margin-right:10px}
.system .lists .hd{display: -webkit-flex;display: flex;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content: space-around;
align-content: space-around;flex-direction: row;}
.system .lists .hd .name{width:100%;font-size:15px;color:#333;}
.system .lists .hd .info{width:100%;font-size:12px;color:#999;}
.system .lists .hd .dot{position: absolute;top:8px;right:0;width:8px;height:8px;border-radius:50%;background-color: #00a43e;}
</style>

