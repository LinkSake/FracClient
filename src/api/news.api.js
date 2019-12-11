import config from "@/../config";
import axios from "axios";

export default {    
    getNews(onSuccess, onError) {
      return axios
        .get(`${config.host}/news/`)
        .then(onSuccess)
        .catch(onError);
    },
};