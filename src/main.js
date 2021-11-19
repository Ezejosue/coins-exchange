import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
import "@/assets/tailwind.css";

import router from "@/router";
import { dollarFilter } from "@/filters";
import { percentFilter } from "@/filters";

import Chartkick from "vue-chartkick";
import Chart from "chart.js";

Vue.use(Chartkick.use(Chart));

import { VueSpinners } from "@saeris/vue-spinners";
Vue.use(VueSpinners);
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
