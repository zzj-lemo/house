import {request} from './request'

export function getHomeMultiData() {
  return request({
    url:'/getResource'
  });
}

