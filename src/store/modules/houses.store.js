import housesApi from '@/api/houses.api'

const state = {
    houses: [],
};

const getters = {
    getHouses: state => state.houses,
};

const mutations = {
  GET_HOUSES(state, data) {
    state.houses = data;
  }
};

const actions = {
    getHouses({ commit }) {
      return housesApi.getHouses(result => {
        commit("GET_HOUSES", result.data.data);
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