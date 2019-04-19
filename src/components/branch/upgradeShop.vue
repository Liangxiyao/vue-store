<template>
    <div class="upgradeShop">
        <m-list :data='lists'></m-list>
    </div>
</template>
<script>
import mLists from './lists.vue';
export default {
    components:{
        mLists
    }
}
</script>

