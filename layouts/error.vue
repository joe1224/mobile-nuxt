<template>
  <div class="error-layouts">
    <div class="main-container empty-container">
      <img
        src="~/assets/images/empty.png"
        class="img"
      />
      <div class="text">当前页面走丢了～</div>
      <nuxt-link
        to="/Home"
        class="btn"
        >{{ second }}s后返回首页</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      second: 3
    };
  },
  created() {
    this.countdown();
    this.$once('hook:beforeDestroy', this.clearCountdown);
  },
  methods: {
    countdown() {
      this.timer = setInterval(() => {
        this.second--;
        if (this.second <= 0) {
          this.clearCountdown();
          this.$router.push('/');
        }
      }, 1000);
    },
    clearCountdown() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.empty-container {
  margin: 30px auto;
  padding: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #fff;
  .img {
    width: 140px;
    height: 140px;
    margin-bottom: 16px;
  }
  .text {
    margin-bottom: 16px;
    line-height: 30px;
    font-size: 22px;
    color: #38374d;
  }
  .btn {
    width: 260px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #404bf5;
    border-radius: 12px;
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
  }
}
</style>
