/*
使用mockjs来mock数据接口
js对象（内部会自动解析JSON数据）

 */
import Mock from 'mockjs'
import shouye_data from './shouye_data.json'
import fenlei_zhuanqu from './fenlei_zhuanqu.json'
import shiwu_data from './shiwu_data.json'

// 提供首页的接口
Mock.mock('/home', {
  code: 0,
  data: shouye_data
})

// 提供分类的接口
Mock.mock('/sort', {
  code: 0,
  data: fenlei_zhuanqu
})

//
Mock.mock('/shiwu', {
  code: 0,
  data: shiwu_data
})

console.log('mock数据')
