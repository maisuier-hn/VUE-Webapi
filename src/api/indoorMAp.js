import { fetch } from '../utils/fetch'
import qs from 'qs'
import axios from 'axios'
/**
 * 查询所有室内地图信息
 */
export function findAllIndoorMap () {
  return fetch({
    /* url与后台映射地址匹配;  method 与映射的方法匹配-->包括 GetMapping PostMapping
         *    PutMapping  DeleteMapping 等注解方法
         */
    url: '/api/indoorMaps',
    method: 'get'
  })
}
/**
 * 根据mapId查询indoorMap
 */
export function findIndoorMapByMapId (mapId) {
  return fetch({
    url: `/api/indoorMaps/${mapId}`,
    method: 'get'
  })
}
/**
 * 根据id查询indoorMap
 */
export function findIndoorMapById () {
  /*  return fetch({
    url: `/source/database`,
    method: 'get'
  }) */
  axios.get('/source/database').then(response => {
    console.log(response.data)
    return response.data
  })
}
/**
 * 添加
 */
export function insertIndoorMap (indoorMap) {
  return fetch({
    url: '/api/indoorMaps',
    method: 'post',
    data: qs.stringify(indoorMap)
  })
}
/**
 * 更新
 */
export function updateIndoorMap (indoorMap) {
  return fetch({
    url: '/api/indoorMaps',
    method: 'put',
    data: qs.stringify(indoorMap)
  })
}
