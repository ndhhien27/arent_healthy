import axios from 'axios';
import humps from 'humps';

import { API_URL } from './constant';

const request = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

request.interceptors.request.use((config) => ({
  ...config,
  ...(config.data && {
    data: humps.decamelizeKeys(config.data),
  }),
  ...(config.params && { params: humps.decamelizeKeys(config.params) }),
}));

request.interceptors.response.use(
  (response) => ({
    ...response,
    data: humps.camelizeKeys(response.data),
  }),
  (error) => Promise.reject(error.response),
);

export default request;
