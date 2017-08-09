import axios from 'axios'
import qs from 'querystring'

// const commonParams = {platCode: 'H5', appName: 'paidaojia', appVersion: '4.4.0'}
// 公共参数
const commonParams = {platCode: 'H5', appName: 'paidaojia', appVersion: '4.4.0'}
// const url = '/client'
// const baseURL = 'https://pregw.o2o.jd.com/client' // 第一套预发布
// const baseURL = 'http://testgw.o2o.jd.com/client' // 第二套预发布
// const baseURL = 'https://gw.o2o.jd.com/client' // 线上环境
// const baseURL = 'http://gw.o2o.jd.com/client';
// const baseURL = 'https://daojia.jd.com/client'
// const baseURL = 'http://testpdjm.jd.com/client'
const baseURL = 'https://gw-o2o.jd.com/client';

// axios.defaults.baseURL = baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.getAPI = axios.prototype.getAPI = (params) => {
  return axios.get(baseURL, {params: params})
}

axios.postAPI = axios.prototype.postAPI = (params) => {
  return axios.post(baseURL, qs.stringify(params))
}


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log(config);
  config.params = {
    ...config.params,
    ...commonParams
  }

  console.log(config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
