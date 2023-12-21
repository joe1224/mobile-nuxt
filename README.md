# paracraft-site

```
├─ assets              # 用于组织未编译的静态资源
├─ components          # 用于组织应用的 Vue.js 组件
├─ layouts             # 用于组织应用的布局组件
├─ pages               # 用于组织应用的路由及视图
├─ middleware          # 用于存放应用的中间件
├─ plugins             # 用于组织需要在应用中，实例化之前需要运行的 Javascript 插件
├─ static              # 用于存放应用的静态文件
├─ store               # 用于组织应用的 Vuex 状态树文件
├─ utils               # 用于组织应用的工具库
├─ .env                # 环境变量配置
├─ .eslintignore       # 忽略 Eslint 校验
├─ .eslintrc.cjs       # Eslint 校验配置
├─ .gitignore          # git 提交忽略
├─ .prettierignore     # 忽略 prettier 格式化
├─ .prettierrc.cjs     # prettier 配置
├─ yarn.lock           # 依赖包版本
├─ package.json        # 用于描述应用的依赖关系和对外暴露的脚本接口
├─ README.md           # README 介绍
└─ nuxt.config.js      # 用于组织 Nuxt.js 应用的个性化配置
```

## Project stack

- 前端框架：Vue2 + Javascript + Nuxtjs + Vux
- 组件库： Vant2、Swiper、Animate
- 包管理工具：yarn
- 埋点 SDK：https://code.kp-para.cn/open/tracker-sdk

## Code specification tool

- JavaScript 检测工具：ESLint
- 前端代码检测工具：Prettier

## File naming convention

- 文件命名简洁明了
- 组件命名使用大驼峰形式，例如 MessageBox.vue
- 业务页面使用小驼峰命名，例如 homePage.vue
- 图片命名遵循串式命名法（以\_分割）
- 其余文件均使用小驼峰方式进行命名，例如工具类，插件配置等等

## CSS specification

- CSS 类名尽可能地遵循串式命名法（以\-分割），特殊情况使用小驼峰规范命名
- CSS 类名应以保持连贯性，例如一个 div 类名为 test-header，其盒子内部存在一个 title，那这个 title 类名应为 test-header-title
- 如果属于公共类可以另起名字，例如页面有多个重复样式，可以命名一个公共类名

## js specification

- 变量命名禁止出现单字母，字符等情况
- 命名应以直译为主，能够直观的看懂意思，例如 create、delete、update、get、set 等关键词要合理利用（以此类关键词作为前缀为主，场景自行判断）
- 逻辑中出现 3 次或以上的常量，建议抽取出来另外定义
- 单独定义的常量文件，统一命名为 const.js，导出除单独导出外，可以定义默认导出集合，集合包含所有常量，这样在其他文件引入时允许使用 VALUES 关键字引入或单独引入

## Component development specification

- 页面创建在 pages 文件夹下，创建规则是按照不同业务、功能模块进行划分
- 公共组件创建在 components 下，创建规则按照组件功能进行划分

## state management (Vuex)

- index 为状态管理入口，modules 为状态管理模块
- modules 中以业务模块进行划分.

## version specification

- 项目的版本号遵循 semver 语义化规范具体规则如下图所示：
  ![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bae52651b78b466cbcf66ac9ad4ff45f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)
- Major: 代表主版本号，通常在涉及重大功能更新，产生了破坏性变更时会更新此版本号
- Minor：代表次版本号，在引入了新功能，但未产生破坏性变更，依然向下兼容时会更新此版本号
- Patch：代表修订号，在修复了一些问题，也未产生破坏性变更时会更新此版本号

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
