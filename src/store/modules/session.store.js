import sessionApi from "@/api/session.api";
import router from "@/router";
import axios from "axios";

const state = {
  users: [],
  accessToken: localStorage.getItem("accessToken") || "",
  loggedIn: false
};
const getters = {
  getMe: state => state.user,
  getLoggedIn: state => state.loggedIn
  
};
const mutations = {
  LOG_USER(state, token) {
    state.loggedIn = true;
    state.accessToken = token;
  },
};
const actions = {
  tryLogin({ commit }, data) {
    return sessionApi.tryLogin(
      data,
      result => {
        if (result.data) {
          localStorage.setItem("accessToken", result.data.token);
          commit("LOG_USER", result.data.token);
          axios.defaults.headers.common = {
            Authorization: `${result.data.token}`
          }
          return true;
        }
      },
      error => {
        return error;
      }
    );
  },
  postUser( { commit }, data ) {
    return sessionApi.postUser(data, result => {
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
