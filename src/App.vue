<template>
  <div id="app" @touchstart="touchstart">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <van-loading type="spinner" size='40px' color="white" v-if="loading"/>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  },
  updated() {
    this.$nextTick(() => {
      mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.008
      });
    });
  },
  methods: {
    touchstart() {
      // alert(2)
    }
  }
};
</script>

<style>
.van-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
.van-dialog{border-radius:6px}
</style>

 