import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import vueHeadful from "vue-headful";
import VueScrollTo from "vue-scrollto";
import i18n from "./i18n";

Vue.use(VueScrollTo);
Vue.component("vue-headful", vueHeadful);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
