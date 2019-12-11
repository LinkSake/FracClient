import config from "@/../config";
import axios from "axios";

export default {    
    getHouses(onSuccess, onError) {
      return axios
        .get(`${config.host}/houses/`)
        .then(onSuccess)
        .catch(onError);
    },
};