import Vue from 'vue';
import moment from 'moment';

Vue.filter('timeFilter', function(value, format = 'YYYY-MM-DD') {
  return moment(value).format(format);
});