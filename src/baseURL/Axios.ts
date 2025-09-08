import axios from 'axios';
import { currentBaseUrl } from "./baseURL.ts";
import {enqueueSnackbar} from "notistack";

const axiosManagement = axios.create({
  baseURL: currentBaseUrl,
});

axiosManagement.interceptors.response.use(
  response => response,
  axiosError => {
    if (axiosError.response?.status === 400) {
      enqueueSnackbar(axiosError.response.data[0], { variant: 'error' });
    }else {
      return Promise.reject(axiosError);
    }
  }
);




export default axiosManagement;