import { get } from "../utils/request"

const api = {
    getDataInfo(params){
        return get("http://api.tianapi.com/txapi/ncov/index",params);
    },
    getCaseNum(params){
        return get("http://api.tianapi.com/txapi/ncovcity/index",params)
    }
}

export default api;