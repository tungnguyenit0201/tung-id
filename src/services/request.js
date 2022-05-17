import axios from '../utils/Axios';
import {buildURL} from '../utils/Functions';

async function request({
  method = 'get',
  url,
  query,
  params,
  success,
  failure,
  headers,
}) {
  const axiosMethod = axios[method];
  if (typeof axiosMethod === 'function') {
    try {
      const result =
        method === 'get' || method === 'delete'
          ? await axiosMethod(buildURL(url, query), {
              headers: {
                ...headers,
              },
            })
          : await axiosMethod(buildURL(url, query), params, {
              headers: {
                ...headers,
              },
            });
      console.log('object :>> ', result);

      if (result.status === 200 || result.status === 201) {
        if (typeof success === 'function') {
          return success(result.data);
        }
      } else {
        return failure({
          status: result?.status,
          message: result?.data,
        });
      }
    } catch (err) {
      const result = err?.toJSON?.();
      if (__DEV__) console.log('err :>> ', url, result, err?.message);
      if (typeof failure === 'function') {
        if (err?.response?.data) {
          return failure({
            status: err?.response?.status,
            ...err?.response?.data,
          });
        } else {
          return failure({message: result?.message});
        }
      }
    }
  }
}
export {request};
