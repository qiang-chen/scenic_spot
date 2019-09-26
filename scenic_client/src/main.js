// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.prototype.baseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "api"
  } else {
    return ""
  }

}
Vue.use(BaiduMap, {
  //ak
  ak: 'qBDhlmOdXpGczWGzjjnqaF0XhgaW37A5'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
