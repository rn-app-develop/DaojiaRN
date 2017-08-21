import axios from 'axios';

// let baseURL = 'https://pregw.o2o.jd.com/client' // 第一套预发布
// let baseURL = 'http://testgw.o2o.jd.com/client' // 第二套预发布
// let baseURL = 'https://gw.o2o.jd.com/client' // 线上环境
// let baseURL = 'http://gw.o2o.jd.com/client';
// let baseURL = 'http://daojia.jd.com/client'
let baseURL = 'http://testpdjm.jd.com/client'
let indexParams = {
  functionId:'indexh5/getIndex',
  body:{
    "address":"朝林广场",
    "city":"北京市",
    "longitude":116.50628,
    "latitude":39.79311,
    "coordType":"2"
  },
  // platCode:'H5',
  // appVersion:'4.2.0',
  // appName:'paidaojia',
  lng:116.50628,
  lat:39.79311,
  city_id:1
};
export const getIndex = function () {
  return axios.getAPI(indexParams)
};

let recommendParams = {
  functionId:'zone/recommendStoreList',
  body:{
    "channelId":"",
    "city":"北京市",
    "longitude":116.50628,
    "latitude":39.79311,
    "currentPage":1,
    "pageSize":10,
    "areaCode":1,
    "coordType":"2",
    "platform":"1"
  },
  // platCode:'H5',
  // appVersion:'4.2.0',
  // appName:'paidaojia',
  lng:116.50628,
  lat:39.79311,
  city_id:1,
};

export const recommendStoreList = function (currentPage) {
  recommendParams.body.currentPage = currentPage
  return axios.getAPI(recommendParams)
};

let activityParams = {
  functionId:'act/getActivityFirst',
  body:{
    // "longitude":116.37335,
    "longitude":116.50628,
    // "latitude":39.92122,
    "latitude":39.79311,
    "activityId":"33327",
    "city":"北京市",
    "shareFlag":false,
    "coordType":2,
    "currentPage":1,
  },
  // lng:116.50628, // 朝林广场
  lng:116.37335,  // 那间咖啡
  // lat:39.79311, // 朝林广场
  lat:39.92122, // 那间咖啡
  city_id:1,
};

export const getActivity = function (activityId, currentPage) {
  activityParams.body.currentPage = currentPage
  activityParams.body.activityId = activityId
  // return axios.get(baseURL, {params: activityParams})
  return axios.getAPI(activityParams)
};

let storeParams = {
  functionId:'store/storeDetailV220',
  body:{
    "ref":"index/LID:11",
    "storeId":"10003450",
    "skuId":"",
    "activityId":"",
    "promotionType":"",
    "longitude":116.50628,
    "latitude":39.79311,
  },
  // appVersion:'4.2.0',
  // appName:'paidaojia',
  // platCode:'H5',
  lng:116.50628,
  lat:39.79311,
  city_id:1,
};

export const getStoreDetail = function (storeId) {
  // storeParams.body.storeId = storeId;
  // return axios.get(baseURL, {params: storeParams});
  return axios.getAPI(storeParams);
};

// 根据经纬度获取地址信息
export const getAddress = (coords) => {
  let params = {
    functionId: 'local/getAddressN',
    body: {
      coord_type: '2',
      needMatch: 0,
      ...coords
    }
  }

  return axios.getAPI(params)
}
