<template>
<div class="mui-content branchStore">
	<div class="agent-list">
		<div class="hd">
			<table width="100%">
				<tr class="row">
					<th class="left">店名</th>
					<th class="center">评级</th>
					<th class="right">开店时间</th>
				</tr>
			</table>
		</div>
		<m-lists :lists="data"></m-lists>
	</div>
</div>
	
</template>
<script>
import mLists from './lists.vue';
export default {
    components:{
        mLists
    },
    props:{
        lists:{
            type:Array,
            default:[]
        }
    },
    computed:{
        data(){
            return this.lists
        }
    },
    methods:{

    }
}
</script>
<style>

</style>


