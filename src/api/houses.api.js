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
        .put(`${config.host}/houses/${params.residents.current}/residents`, params)
        .then(onSuccess)
        .catch(onError);
    },
    putPayment(params = {}, onSuccess, onError) {
      return axios
        .put(`${config.host}/houses/${params.payments.current}/payments`, params)
        .then(onSuccess)
        .catch(onError);
    },
};