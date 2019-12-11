import config from "@/../config";
import axios from "axios";

export default {
  tryLogin(params = {}, onSuccess, onError) {
    return axios
      .post(`${config.host}/auth/login`, params)
      .then(onSuccess)
      .catch(onError);
  },
  postUser(params = {}, onSuccess, onError) {
    return axios
      .post(`${config.host}/auth/register`, params)
      .then(onSuccess)
      .catch(onError);
  },
  getUsers(onSuccess, onError) {
    return axios
      .get(`${config.host}/user/`)
      .then(onSuccess)
      .catch(onError);
  },
  
};