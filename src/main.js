import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";
import "./assets/css/animations.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
