<template>
  <header class="my-header">
    <div class="my-header-container">
      <div>
        <van-icon class="nav-icon" name="wap-nav" />
      </div>
      <!-- <ul class="nav">
        <li
          v-for="(item, index) in navs"
          :key="index"
          @click="slideLineLeft(index)"
        >
          <nuxt-link
            :to="item.link"
            class="nav-name"
            :class="{ active: activeIndex === index }"
            :data-tracker="item.trackerKey"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
        <div
          class="underline"
          :style="{ left: slideLeft, width: slideWidth }"
        ></div>
      </ul> -->
      <nuxt-link class="download-btn" data-tracker="official.menu_download" to="/download">
        下载中心
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      activeIndex: '', // 当前激活的导航项的索引
      slideLeft: '',
      slideWidth: '',
      navs: [
        {
          name: '首页',
          trackerKey: 'official.menu_home',
          link: '/Home'
        },
        {
          name: 'Paracraft',
          trackerKey: 'official.menu_paracraft',
          link: '/paracraft'
        },
        {
          name: '校园服务',
          trackerKey: 'official.menu_school',
          link: '/edu'
        },
        {
          name: '在线学习',
          trackerKey: 'official.menu_study',
          link: '/papa'
        },
        {
          name: '赛事活动',
          trackerKey: 'official.menu_exam',
          link: '/competition'
        },
        {
          name: '关于我们',
          trackerKey: 'official.menu_us',
          link: '/about_us'
        }
      ]
    };
  },
  watch: {
    $route: 'renderHeaderActive'
  },
  mounted() {
    this.renderHeaderActive();
  },
  methods: {
    renderHeaderActive() {
      const routePath = this.$route.path;
      const activeIndex = this.navs.findIndex((v) => v.link === routePath);
      this.activeIndex = activeIndex > -1 ? activeIndex : 0;
      this.$nextTick(() => {
        this.slideLineLeft(this.activeIndex);
      });
    },
    slideLineLeft(index) {
      this.activeIndex = index;
      if (process.client) {
        const dom = document.querySelectorAll('.nav-name');
        dom.forEach((d, i) => {
          if (i === index) {
            this.slideWidth = `${d.offsetWidth + 10}px`;
            this.slideLeft = `${d.offsetLeft - 6}px`;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.my-header {
  width: 100%;
  height: 54px;
  background: rgba(64, 75, 245, 1);
  position: relative;
  padding: 0 14px;

  &-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-icon {
      font-size: 30px;
      color: #ffffff;
    }


    .download-btn {
      display: block;
      width: 90px;
      height: 34px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0px -2px 1px rgba(225, 227, 255, 1);
      font-size: 14px;
      font-weight: 600;
      line-height: 34px;
      color: rgba(64, 75, 245, 1);
      text-align: center;
    }
  }

}
</style>
