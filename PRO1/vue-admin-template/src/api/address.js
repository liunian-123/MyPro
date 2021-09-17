import request from '@/utils/request'

export function getAddress(params) {
    return request({
      url: '/showAddresses',
      method: 'get',
      params
    })
  }
  export function delAddress(params) {
    return request({
      url: '/delOneAddress',
      method: 'get',
      params
    })
  }

  export function addAddress(data) {
    return request({
      url: '/insertOneAddress',
      method: 'post',
      data
    })
  }
  
// message
  export function getMessage(params) {
    return request({
      url: '/showMessage',
      method: 'get',
      params
    })
  }
  export function delMessage(params) {
    return request({
      url: '/delOneMessage',
      method: 'get',
      params
    })
  }
  export function addMessage(data) {
    return request({
      url: '/insertAllMessage',
      method: 'post',
      data
    })
  }
  


  // level
  export function getLevel(params) {
    return request({
      url: '/showLevel',
      method: 'get',
      params
    })
  }

  export function delLevel(params) {
    return request({
      url: '/delOneLevel',
      method: 'get',
      params
    })
  }
  
  export function addLevel(data) {
    return request({
      url: '/insertOneLevel',
      method: 'post',
      data
    })
  }