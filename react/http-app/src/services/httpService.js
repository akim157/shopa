//Вы можете перехватывать запросы или ответы до того, как они будут обработаны thenили catch.
import axios from "axios/index";
import logger from './logService';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpected error occurred.");
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}