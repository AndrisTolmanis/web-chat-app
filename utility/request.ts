import axios from 'axios';

const request = axios.create({
  // withCredentials: true,
  timeout: 1000,
  baseURL: 'http://192.168.1.11:8080/thalia/',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer 10|yYX2Eg9m1vvn4fqOFmcUe0Pq4LE35K6nH5Xku5YM',
  },
});

// request.interceptors.response.use(response => {
//   return response.data;
// }, error => {
//   return Promise.reject(error);
// });

export default request;