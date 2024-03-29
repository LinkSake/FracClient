import config from "@/../config";
import axios from "axios";

export default {    
    getNews(onSuccess, onError) {
      return axios
        .get(`${config.host}/news/`)
        .then(onSuccess)
        .catch(onError);
    },
    postNews(params = {}, onSuccess, onError) {
      return axios
        .post(`${config.host}/news/`, params)
        .then(onSuccess)
        .catch(onError);
    },
};