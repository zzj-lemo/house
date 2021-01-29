import {request} from './request'

export function getAgentList() {
  return request({
    url:'/getAgentList'
  });
}