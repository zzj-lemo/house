import {request} from './request'

export function getHouseDetails() {
  return request({
    url:'/getHouseDetails'
  });
}

export function getRealShot() {
    return request({
      url:'/getRealShot'
    });
  }