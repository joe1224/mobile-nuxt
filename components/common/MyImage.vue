<template>
  <el-image
    :src="src"
    lazy
  >
    <div
      slot="error"
      class="error-img"
    ></div>
  </el-image>
</template>

<script>
export default {
  name: 'MyImage',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.error-img {
  width: 100%;
  height: 100%;
  background: #d8d8d8;
  border-radius: 12px;
}
</style>
