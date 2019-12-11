import config from "@/../config";
import axios from "axios";

export default {    
    getHouses(onSuccess, onError) {
      return axios
        .get(`${config.host}/houses/`)
        .then(onSuccess)
        .catch(onError);
    },
    putResident(params = {}, onSuccess, onError) {
      return axios
        .put(`${config.host}/houses/${params.current}/residents`, params)
        .then(onSuccess)
        .catch(onError);
    },
    putPayment(params = {}, onSuccess, onError) {
      return axios
        .put(`${config.host}/houses/${params.current}/payments`, params)
        .then(onSuccess)
        .catch(onError);
    },
};