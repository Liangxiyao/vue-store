<template>
    <div class="upgradeShop">
        <m-lists :lists='upgradeShop' @getDetail='getDetail(arguments)'></m-lists>
    </div>
</template>
<script>
import mLists from './lists.vue';
import { mapGetters } from 'vuex';
import { apigradeShopDetail } from 'api/api';
export default {
    computed: {
        ...mapGetters(['upgradeShop'])
    },
    components:{
        mLists
    },
    methods: {
        getDetail(data) {
            this.$router.push('/waitSure/detail/'+data[0])
            if(data[1] == 2){
                apigradeShopDetail({
                    id:data[0]
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

