import housesApi from '@/api/houses.api'

const state = {
    houses: [],
    houseOptions:[]
};

const getters = {
    getHouses: state => state.houses,
    getHouseOptions: state => state.houseOptions,
};

const mutations = {
  GET_HOUSES(state, data) {
    state.houses = data;
  },
  SET_HOUSE_OPTIONS(state){
    state.houses.forEach(element => {
      state.houseOptions.push({
        key: element.houseNumber.toString(),
        text: element.houseNumber.toString(),
        value: element._id
      });
    });
  }
};

const actions = {
    getHouses({ commit }) {
      return housesApi.getHouses(result => {
        commit("GET_HOUSES", result.data.data);
        commit("SET_HOUSE_OPTIONS");
        return true;
      },
      error =>{
        return error;
      });
    },
    putResident( { commit }, data ) {
      console.log(data);
      return housesApi.putResident(data, result => {
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