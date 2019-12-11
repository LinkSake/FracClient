import visitsApi from '@/api/visits.api'

const state = {
    visits: [],
};

const getters = {
    getVisits: state => state.visits,
};

const mutations = {
  GET_VISITS(state, data) {
    state.visits = data;
  },
  ADD_VISIT(state, data){
    state.visits.push(data);
  }
};

const actions = {
    getVisits({ commit }) {
      return visitsApi.getVisits(result => {
        commit("GET_VISITS", result.data.data);
        return true;
      },
      error =>{
        return error;
      });
    },
    postVisit({ commit }, data) {
      return visitsApi.postVisit(data, result => {
        commit("ADD_VISIT", result.data.data);
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