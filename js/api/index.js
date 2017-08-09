import axios from 'axios'

export const getStoreHome = (data) => {
    return axios.get(`store/storeDetailV220?storeId=${data.storeId}&skuId=${data.skuId}&activityId=${data.activityId}&promotionType=${promotionType}&longitude=${longitude}&latitude={latitude}`)
}