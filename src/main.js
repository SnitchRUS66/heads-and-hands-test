import Vue from "vue";
import Ymaps from "@/components/vue-yandex-maps/index.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Ymaps);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
