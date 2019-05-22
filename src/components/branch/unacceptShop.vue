<template>
    <div class="upgradeShop">
        <m-lists :lists='unacceptShop' @getDetail='getDetail(arguments)'></m-lists>
    </div>
</template>
<script>
import mLists from './lists.vue';
import { mapGetters, mapMutations } from 'vuex';
import { apiAcceptShopDetail } from 'api/api';
export default {
    computed: {
        ...mapGetters(['unacceptShop'])
    },
    ...mapMutations(['getDetailData']),
    components:{
        mLists
    },
    methods: {
        getDetail(data) {
            console.log(data)
            if(data[1] == 1){
                this.$router.push('/waitSure/detail/'+data[0])
                apiAcceptShopDetail({
                    agent_id:data[0]
                }).then((result) => {
                    console.log(result)
                    if(result.status == 1){
                        this.detail = result.data
                        this.getDetailData(this.detail)
                    }
                }).catch((err) => {
                    
                });
            }
        }
    },
}
</script>

