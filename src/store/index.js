import Vue from 'vue';
import Vuex from 'vuex';

import news from "@/store/modules/news.store";
import session from "@/store/modules/session.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    session
  },
});
