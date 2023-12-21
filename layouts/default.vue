<template>
  <div id="app">
    <img
      src="~/assets/images/logo-circel.png"
      style="display: none"
    />
    <my-header />
    <main>
      <nuxt />
    </main>
    <!-- <my-footer /> -->
  </div>
</template>

<script>
import 'swiper/css/swiper.css';

export default {
  mounted() {
    this.$nextTick(() => {
      new this.$wow.WOW({ animateClass: 'animate__animated', live: false, offset: 130 }).init();
    });
  }
};
</script>

<style>
#app {
  width: 100%;
  overflow: auto;
}
</style>
