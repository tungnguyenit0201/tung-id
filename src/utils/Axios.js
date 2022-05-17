import axios from 'axios';
import {API_V4, TIMEOUT} from '../config';
// import curlirize from 'axios-curlirize';

const instance = axios.create({
  withCredentials: false,
  baseURL: API_V4,
  timeout: TIMEOUT,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Requested-Store': 'default',
  },
});

export function setDefaultHeaders(headers) {
  Object.keys(headers).forEach(key => {
    instance.defaults.headers.common[key] = headers[key];
  });
}

// __DEV__ && curlirize(instance);

export default instance;
