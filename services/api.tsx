import Axios from "axios";
import utils from "../utils/utils";

export const api = Axios.create({
    baseURL: utils.api.baseURL,
    params: utils.api.params
})

