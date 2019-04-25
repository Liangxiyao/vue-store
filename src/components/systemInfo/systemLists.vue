<template>
<div class="systemLists">
    <m-header>
        <span slot="header-cont">系统消息</span>
    </m-header>
    <div class="mui-content systemMessage" v-if="lists.length">
		<dl class="item" v-for="item in lists" >
			<dt class="time">{{item.ctime}}</dt>
			<dd class="message">
				<div class="hd">
					<div class="tit">{{item.title}}</div>
					<p class="txt">{{item.content}}</p>
				</div>
				<div class="bd bdt">
                    <a class="mui-navigate-right"  :href="url(item.type,item.extend)">查看详情</a>
				</div>
			</dd>
		</dl>
	</div>
    <!-- 无内容 -->
    <div class="no-cont" v-else>
        <img class="icon" src="../../common/images/no-message.png" >
        <p class="tip">暂无系统消息</p>
        <a class="btn" href="">点击跳转</a>
    </div>
	
</div>
</template>
<script>
import mHeader from 'base/header/header'
import { GetQueryString } from 'common/js/common'
import { apiMsgLists } from 'api/api'

export default {
    components:{
        mHeader
    },
    data(){
        return {
            lists:[],
        }  
    },
    created(){
        this._getMsgLists()
    },
    methods:{
        _getMsgLists(){
            let id = GetQueryString('id');
            apiMsgLists({
                category_id:id,
                p:1
            }).then((result) => {
                if(result.status == 1){
                    console.log(result.data)
                    this.lists = result.data.list                                 
                }
            }).catch((err) => {
                
            });
        },
        url(n,param){ //处理跳转的url
            switch(n)
            {
            case 'url':
            return param.url;
            break;
            case 'examineOrderList':
            return 'examineOrderList';
            break;
            case 'examineOrder':
            return 'examineOrder?order_id='+param.order_id;
            break;
            case 'orderDetail':
            return 'orderDetail?order_id='+param.order_id;
            break;
            case 'goods':
            return 'goods?main_goods_id='+param.main_goods_id;
            break;
            case 'aftersale':
            return 'aftersale?order_id='+param.order_id;
            break;
            case 'arbitrary':
            return 'arbitrary?id='+param.id;
            break;
            case 'service':
            return 'service?id='+param.id;
            break;
            }
        }
    }
}
</script>


<style>
.systemMessage{margin:0 15px;}
.systemMessage .time{height:40px;line-height:40px;font-size:12px;color:#999;text-align:center;}
.systemMessage .message{background-color:#fff;border-radius:5px;padding-left:15px;}
.systemMessage .message .hd{padding:15px 15px 15px 0;}
.systemMessage .message .tit{font-size:15px;margin-bottom:8px;}
.systemMessage .message .txt{font-size:13px;color:#999;line-height:18px;}
.systemMessage .message .bd{height:45px;line-height:45px;font-size:13px;color:#999;padding:0;}
.systemMessage .message .bd .mui-navigate-right{display:block;margin:0;font-size: 13px}
.systemMessage .message .bd .mui-navigate-right:after{font-size:24px;right:6px;color:#ccc;}

</style>

