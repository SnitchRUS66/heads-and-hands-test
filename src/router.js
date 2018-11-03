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
      component: Home
    },
    {
      path: "/cases",
      name: "cases",
      component: Cases
    },
    {
      path: "/formats",
      name: "formats",
      component: Formats
    },
    {
      path: "/for-publishers",
      name: "for-publishers",
      component: ForPublishers
    },
    {
      path: "/platform",
      name: "platform",
      component: Platform
    },
    {
      path: "/address",
      name: "address",
      component: Address
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: 'about' */ "./views/About.vue")
    }
  ]
});
