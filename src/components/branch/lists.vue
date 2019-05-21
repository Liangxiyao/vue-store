<template>
    <div class="mui-scroll-wrapper">
			<div class="mui-scroll">
				<div class="main">
					<table width="100%" class="table" id="tablevalue">
						<tr class="row" v-for="item in lists">
							<td class="left">
								<img class="photo" :src="item.headimgurl" >
								<span class="name">{{item.name}}</span>
							</td>
							<td class="center" v-if="item.levelname">{{item.levelname}}</td>
                            <td class="center" v-if="item.afterLevelname">{{item.afterLevelname}}</td>
							<td class="right" v-if="item.timediff">{{item.timediff}}</td>
                            <td class="right" v-else><router-link tag="span" class="btn" :to="`/unacceptDetail/${item.id}`">查看</router-link></td>
						</tr>
					</table>
				</div>
			</div> 
		</div>
</template>
<script>
export default {
    props:['lists'],
    created(){
        console.log(this.lists)
    },
    methods: {

    },
}
</script>
<style>
.agent-list .hd{position:absolute;top:59px;left:15px;right:15px;height:50px;line-height:31px;z-index:999;background-color:#ffff;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);border-radius:5px 5px 0 0;overflow:hidden;}
.agent-list .left{width:30%;padding:10px 0 10px 10px;text-align: left;}
.agent-list .center{width:40%;padding:10px 5px;text-align: center;}
.agent-list .right{width:30%;padding:10px 10px 10px 0;text-align: right;}
.agent-list .hd th{font-size:13px;color:#999;font-weight:normal;}
.agent-list .mui-scroll-wrapper{top:59px;bottom:40px;bottom:constant(safe-area-inset-bottom);bottom:env(safe-area-inset-bottom);}
.agent-list .row td{position:relative;}
.agent-list .row td:after{position: absolute;right: 0;bottom: 0;left:0;height: 1px;content: '';
-webkit-transform: scaleY(.5);transform: scaleY(.5);background-color: #ddd;}
.agent-list .row:last-of-type td:after{height:0;}
.agent-list .main{margin:0 15px;background-color:#fff;border-radius:5px;padding-top:50px;}
.agent-list .main .table td{line-height:30px;height:30px;font-size:12px;vertical-align:middle;}
.agent-list .main .table .photo{width:30px;height:30px;margin-right:5px;}
.agent-list .main .table .right .btn{display:inline-block;width:50px;line-height:25px;text-align:center;font-size:12px;color:#fff;background-color:#00A43E;border-radius:5px;}

</style>


