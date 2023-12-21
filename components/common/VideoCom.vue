<template>
  <div class="video-container">
    <video
      ref="videoRef"
      loop
      muted
      :autoplay="isAutoPlay"
      class="video"
      :src="videoUrl"
      @mouseenter="!isAutoPlay && onPlay()"
      @mouseleave="!isAutoPlay && onPause()"
    ></video>
  </div>
</template>

<script>
import XEUtils from 'xe-utils';
export default {
  name: 'VideoCom',
  props: {
    videoUrl: {
      type: String,
      default: ''
    },
    isAutoPlay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    onPlay: XEUtils.debounce(
      function () {
        this.$refs.videoRef.play();
      },
      500,
      {
        leading: true
      }
    ),
    onPause: XEUtils.debounce(
      function () {
        this.$refs.videoRef.pause();
      },
      500,
      {
        leading: true
      }
    )
  }
};
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
