import ajax from './ajax'

// 使用代理
// const prefix = '/http://m.you.163.com'
const prefix = '/api'

// 获取分类左侧列表
export const reqSortList = () => ajax('/sort')

// 获取识物数据
export const reqShiwuData = () => ajax('/shiwu')

// 获取识物tab列表
export const reqShiwuTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`)

// 获取识物推荐数据
export const reqShiwuTuijian = () => ajax(`${prefix}/topic/v1/find/recManual.json`)


// 识物晒单评论数据
export const reqShaiDanList = () => ajax(`${prefix}/topic/v1/look/getList.json?page=1&size=20&type=1`)

// 识物晒单列表数据
export const reqShaiDanCollection = () => ajax(`${prefix}/topic/v1/look/getCollection.json?id=57`)

