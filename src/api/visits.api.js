import config from "@/../config";
import axios from "axios";

export default {    
    getVisits(onSuccess, onError) {
      return axios
        .get(`${config.host}/cars/`)
        .then(onSuccess)
        .catch(onError);
    },
    postVisit(params = {}, onSuccess, onError) {
      return axios
        .post(`${config.host}/cars/`, params)
        .then(onSuccess)
        .catch(onError);
    },
};