import {request} from './request'

export function getfloorDetail() {
  return request({
    url:'/getfloorDetail'
  });
}

export function getHouseType() {
  return request({
    url:'/getHouseType'
  });
}

export function getFloorDynamic() {
  return request({
    url:'/getFloorDynamic'
  });
}

export function getCollection() {
  return request({
    url:'/getCollection'
  });
}

export function getPriceComparison() {
  return request({
    url:'/getPriceComparison'
  });
}
