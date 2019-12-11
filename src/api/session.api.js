import config from "@/../config";
import axios from "axios";

export default {
  tryLogin(params = {}, onSuccess, onError) {
    return axios
      .post(`${config.host}/auth/login`, params)
      .then(onSuccess)
      .catch(onError);
  },
  getMe(onSuccess, onError) {
    return axios
      .get(`${config.host}/auth/me`)
      .then(onSuccess)
      .catch(onError);
  },
};