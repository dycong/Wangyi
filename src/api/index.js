import ajax from './ajax'

// 获取分类左侧列表
export const reqSortList = () => ajax('/sort')

// 获取识物数据
export const reqShiwuData = () => ajax('/shiwu')


