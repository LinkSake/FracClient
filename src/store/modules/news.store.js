import newsApi from '@/api/news.api'

const state = {
    news: [],
};

const getters = {
    getNews: state => state.news,
};

const mutations = {
  GET_NEWS(state, data) {
    state.news = data;
  },
};

const actions = {
    getNewsfeed({ commit }) {
      return newsApi.getNews(result => {
        commit("GET_NEWS", result.data.data);
        return true;
      },
      error =>{
        return error;
      });
    },
};


export default {
    namespaced: true,
    state: {
      ...state
    },
    getters: {
      ...getters
    },
    mutations,
    actions
};
  