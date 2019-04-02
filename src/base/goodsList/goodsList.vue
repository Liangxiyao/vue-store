<template>
    <ul class="list-wrap clearFix">
        <li class="item mui-pull-left" v-for="item in lists" :key="item.main_goods_id">
            <div class="hd">
                <a href="/goodsDetail">
                    <img :src="item.pics">
                </a>
            </div>
            <div class="dec">
                <p class="ofellipsis name">{{item.goods_name}}</p>
                <p class="price">
                    <span><em>￥</em>{{item.price}}</span>
                    <s class="old-price"><em>￥</em>{{item.market_price}}</s>
                </p>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        lists:{
            type:Array,
            default:[]
        }
    }
}
</script>
