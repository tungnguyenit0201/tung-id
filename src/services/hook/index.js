import {useState} from 'react';
import {request} from '../request';
import {CLIENT_ID, CLIENT_SECRET} from '../../config';
const conmonApi = () => {
  const [loading, setLoading] = useState(false);
  clientAccessToken = async () => {
    let result;
    setLoading(true);
    await request({
      method: 'post',
      url: '/client-access-token',
      headers: {'Client-Id': CLIENT_ID, 'Client-Secret': CLIENT_SECRET},
      success: res => {
        console.log('res :>> ', res);
        result = res;
      },
    });
    setLoading(false);
    return result;
  };
  return {clientAccessToken, loading};
};
export {conmonApi};
