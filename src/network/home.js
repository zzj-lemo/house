import {request} from './request'

export function getResource() {
  return request({
    url:'/getResource'
  });
}

export function getfloorSwiper() {
  return request({
    url:'/getfloorSwiper'
  });
}
