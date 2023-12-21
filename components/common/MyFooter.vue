<template>
  <footer class="footer">
    <div class="footer-modules">
      <div class="footer-modules-item">
        <img
          src="~/assets/images/footer/module-1.png"
          class="img"
        />
        <span>平台国产化</span>
      </div>
      <div class="footer-modules-item">
        <img
          src="~/assets/images/footer/module-2.png"
          class="img"
        />
        <span>产品权威性</span>
      </div>
      <div class="footer-modules-item">
        <img
          src="~/assets/images/footer/module-3.png"
          class="img"
        />
        <span>技术前沿性</span>
      </div>
      <div class="footer-modules-item">
        <img
          src="~/assets/images/footer/module-4.png"
          class="img"
        />
        <span>场景创新型</span>
      </div>
    </div>
    <div class="footer-main">
      <div class="main-container footer-main-container">
        <div class="footer-main-item">
          <div class="title">更多链接</div>
          <ul>
            <nuxt-link
              to="/download"
              data-tracker="official.sill_download"
              class="li"
            >
              下载中心
            </nuxt-link>
            <nuxt-link
              to="/news"
              data-tracker="official.sill_news"
              class="li"
            >
              新闻中心
            </nuxt-link>
            <a
              class="li"
              data-tracker="official.sill_tatfook"
              href="https://www.tatfook.com"
              target="_blank"
            >
              大富科技
            </a>
            <a
              class="li"
              data-tracker="official.sill_keepwork"
              href="https://keepwork.com"
              target="_blank"
            >
              keepwork
            </a>
          </ul>
        </div>
        <div class="footer-main-item">
          <div class="title"></div>
          <ul>
            <a
              class="li"
              data-tracker="official.sill_papa"
              href="https://papa.palaka.cn"
              target="_blank"
            >
              帕帕奇遇记
            </a>
            <a
              class="li"
              data-tracker="official.sill_edu"
              href="https://edu.palaka.cn/login"
              target="_blank"
            >
              智慧教育平台
            </a>
            <a
              class="li"
              data-tracker="official.sill_teacher"
              href="https://edu.palaka.cn/teacher"
              target="_blank"
            >
              帕拉卡培训与认证
            </a>
            <a
              class="li"
              data-tracker="official.sill_exam"
              href="https://cp.palaka.cn"
              target="_blank"
            >
              帕拉卡赛事
            </a>
          </ul>
        </div>
        <div class="footer-main-item">
          <div class="title">联系我们</div>
          <ul>
            <li class="li">电话：0755-86233932</li>
            <li class="li">邮箱：support@paraengine.com</li>
            <li class="li">地址：深圳市南山区国际创新谷一期1栋A座1701-1702（深圳总部）</li>
          </ul>
        </div>
        <div class="footer-main-item follow">
          <div class="title">关注我们</div>
          <ul class="flex">
            <li
              class="li"
              style="margin-right: 40px"
            >
              <img
                src="~/assets/images/footer/papa-code.png"
                class="code-img"
              />
              <div>帕帕奇遇记公众号</div>
            </li>
            <li class="li">
              <img
                src="~/assets/images/footer/paracraft-code.png"
                class="code-img"
              />
              <div>帕拉卡校园公众号</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2023 {{ isPalaka ? '深圳市帕拉卡科技有限公司' : '深圳市大富网络技术有限公司' }}
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        >{{ isPalaka ? '粤ICP备2020141502号-1' : '粤ICP备14002196号-1' }}</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  data() {
    return {};
  },
  computed: {
    isPalaka() {
      if (process.client) {
        const reg = /palaka/;
        return reg.test(location.host);
      }
      return false;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  // background: $red;
  background: #38374d;
  &-modules {
    display: flex;
    justify-content: space-between;
    &-item {
      flex: 1;
      margin: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 30px;
      font-size: 22px;
      color: #fff;
      border-right: 1px solid rgba(224, 223, 239, 0.1);
      &:last-of-type {
        border-right: none;
      }
      .img {
        width: 44px;
        height: 44px;
        margin-right: 13px;
      }
    }
  }

  &-main {
    box-sizing: border-box;
    border-top: 1px solid rgba(224, 223, 239, 0.1);
    border-bottom: 1px solid rgba(224, 223, 239, 0.1);
    padding: 43px 0 53px 0;
    &-container {
      display: flex;
    }
    &-item {
      margin-right: 80px;
      &.follow {
        margin-right: 0;
        .li {
          font-size: 14px;
          line-height: 20px;
          text-align: center;
        }
      }
    }
    .title {
      margin-bottom: 20px;
      line-height: 20px;
      height: 20px;
      font-size: 14px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.6);
    }
    .li {
      display: block;
      font-size: 16px;
      color: #ffffff;
      line-height: 26px;
    }
    .code-img {
      width: 100px;
      height: 100px;
      border-radius:5px;
    }
  }

  .copyright {
    padding: 16px;
    text-align: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 15px;
    a:hover {
      color: #ffffff;
    }
  }
}
</style>
