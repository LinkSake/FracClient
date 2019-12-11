import sessionApi from "@/api/session.api";
import router from "@/router";
import axios from "axios";

const state = {
  users: [],
  accessToken: localStorage.getItem("accessToken") || "",
  loggedIn: false
};
const getters = {
  getLoggedIn: state => state.loggedIn,
  getUsers: state => state.users
};
const mutations = {
  LOG_USER(state, token) {
    state.loggedIn = true;
    state.accessToken = token;
  },
  GET_USERS(state, data) {
    state.users = data;
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
  getUsers({ commit }) {
    return sessionApi.getUsers(result => {
      commit("GET_USERS", result.data.data);
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
