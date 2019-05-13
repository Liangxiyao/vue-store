<template>
    <div class="upgradeShop">
        <m-lists :lists='waitSure.upgradeShop'></m-lists>
    </div>
</template>
<script>
import mLists from './lists.vue';
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['waitSure'])
    },
    components:{
        mLists
    }
}
</script>

