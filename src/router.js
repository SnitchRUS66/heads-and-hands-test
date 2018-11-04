import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cases from "./views/Cases.vue";
import Formats from "./views/Formats.vue";
import ForPublishers from "./views/ForPublishers.vue";
import Platform from "./views/Platform.vue";
import Address from "./views/Address.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/cases",
      name: "cases",
      component: () =>
        import(/* webpackChunkName: "cases" */ "./views/Cases.vue")
    },
    {
      path: "/formats",
      name: "formats",
      component: () =>
        import(/* webpackChunkName: "formats" */ "./views/Formats.vue")
    },
    {
      path: "/for-publishers",
      name: "for-publishers",
      component: () =>
        import(/* webpackChunkName: "for-publishers" */ "./views/ForPublishers.vue")
    },
    {
      path: "/platform",
      name: "platform",
      component: () =>
        import(/* webpackChunkName: "platform" */ "./views/Platform.vue")
    },
    {
      path: "/address",
      name: "address",
      component: () =>
        import(/* webpackChunkName: "address" */ "./views/Address.vue")
    }
  ]
});
