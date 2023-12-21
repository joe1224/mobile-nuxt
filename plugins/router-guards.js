export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    // 在每次路由导航开始时记录进入页面的时间戳
    to.meta._startTime = Date.now() + '';
    next();
  });

  app.router.afterEach((to, from) => {
    const endTime = Date.now();
    const startTime = from.meta?._startTime || 0;
    const timeSpent = endTime - Number(startTime);
    if (startTime && from.name) {
      if (window) {
        window.$trackerSDK?.reportPageView(location.origin + to.fullPath, {
          domin: location.host,
          duration: timeSpent / 1000, // "访问时长，单位秒"
          referrer: location.origin + from.fullPath, // 访问来源
          referrerDomin: location.host, // 来源域名
          beginAt: new Date(Number(startTime)).toISOString(),
          endAt: new Date().toISOString(),
        })
      }
    }
  });

};