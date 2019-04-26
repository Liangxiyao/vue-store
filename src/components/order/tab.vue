<template>
    <div class="tab-bar">
        <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted">
            <a class="mui-control-item mui-active" href="javascript:;"><span>全部</span></a>
            <a class="mui-control-item" href="javascript:;" @tap="getOrderLists()"><span>待支付</span></a>
            <a class="mui-control-item" href="javascript:;"><span>待发货</span></a>
            <a class="mui-control-item" href="javascript:;"><span>已完成</span></a>
            <a class="mui-control-item" href="javascript:;"><span>已取消</span></a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tab:[
            {
                text:'全部',
                url:'/order'
            },{
                text:'待支付',
                url:'/order1'
            },{
                text:'待审核',
                url:'/order5'
            },{
                text:'待发货',
                url:'/order2'
            },{
                text:'已完成',
                url:'/order3'
            },{
                text:'已取消',
                url:'/order4'
            }]
        }
    }
}
</script>

<style>

</style>

