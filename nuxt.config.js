export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  head: {
    title: '帕拉卡科技官网',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" },
      { hid: 'keywords', name: 'keywords', content: '帕拉卡,3D编程,编程教育,帕拉卡3D动画编程,少儿编程,paracraft,帕拉卡官网,帕帕奇遇记,palaka,帕拉卡编程,paracraft编程,paracraft官网,帕拉卡校园,少儿编程教育,PARACRAFT,3D动画编程,Paracraft,paracraft.cn,怕卡拉,怕拉卡,怕拉卡编程' },
      { hid: 'description', name: 'description', content: '中小学人工智能与编程教育服务商' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/reset.css', '~/assets/iconfont/iconfont.css', 'animate.css/animate.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/wow.js', ssr: false },
    { src: '@/plugins/tracker-sdk.js', ssr: false },
    { src: '~/plugins/dompurify', mode: 'client' },
    {
      src: '~/plugins/lib-flexible.js',
      mode: 'client'
    },
    '~/plugins/axios.js',
    '~/plugins/request.js',
    '~/plugins/api.js',
    '~/plugins/vue-global.js',
    '~/plugins/directives.js',
    '~/plugins/filters.js',
    '~/plugins/router-guards.js',
    '@/plugins/vant'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', '@nuxt/postcss8'],

  styleResources: {
    scss: [
      '~/assets/scss/variables.scss'
    ]
  },

  axios: {
    baseURL: process.env.NUXT_ENV_BASE_URL + '/core/v0',
    retry: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 外联css
    extractCSS: true,
    transpile: [/^vant/],
    // 按需引入
    babel: {
      plugins: [
        ['import', {
          libraryName: 'vant',
          style: true
        }, 'vant']
      ]
    },
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 39.0, // 根字体大小
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [/^\.no-rem/],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            exclude: /node_modules/i
        }
      },
      preset: {
        autoprefixer: { grid: true }
      }
    },
    hotMiddleware: {
      client: {
        // turn off client overlay when errors are present
        // overlay: false
      }
    },
    extend(config, { isClient }) {
      // 为 客户端打包 进行扩展配置
      if (isClient) {
        config.devtool = 'eval-source-map';
        config.performance = {
          hints: false,
          maxEntrypointSize: Infinity,
          maxAssetSize: Infinity
        }
      }
    }
  },
  router: {
    extendRoutes(routers) {
      routers.push({
        path: '/',
        redirect: '/Home'
      })
    }
  }
}
