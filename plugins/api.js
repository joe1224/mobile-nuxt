export default ({ app: { $request } }, inject) => {
  inject('api', {
    // 广告位
    queryAds(data) {
      return $request.post('/officialSiteAds/query', data);
    },
    // 通用配置
    queryCommonConfigs(data) {
      return $request.post('/commonConfigs/query', data);
    },
    // 新闻获取
    queryOfficialSiteNews(data) {
      return $request.post('/officialSiteNews/query', data);
    },
    // 赛事获取
    queryOfficialSiteCompetitions(data) {
      return $request.post('/officialSiteCompetitions/query', data);
    },
    // 获取下载链接
    queryDownloadUrl(channel) {
      return $request.get(`/paracraftConfigs/${channel}`);
    },
  })
}
