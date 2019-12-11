import sessionApi from "@/api/session.api";
import router from "@/router";
import axios from "axios";

const state = {
  user: null,
  accessToken: localStorage.getItem("accessToken") || "",
  loggedIn: false
};
const getters = {
  getUser: state => state.user,
  getLoggedIn: state => state.loggedIn
};
const mutations = {
  LOG_USER(state, token) {
    state.loggedIn = true;
    state.accessToken = token;
  },
  LOGOUT: state => {
    state.accessToken = null;
  }
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
