import Vue from 'vue';
import trackerSdk from 'tracker-sdk'

Vue.use(trackerSdk, {
  platform: 'new-behavior',
  serverUrl: process.env.NUXT_ENV_BASE_URL + '/event-gateway/events/site.png',
  log: false
})