import request from '@/utils/request'

// 获取banner
// 0: pc
// 1: android
// 2: iphone
// 3: ipad
export function getBanner(num) {
    return request({
        url: '/banner?type=' + num,
        method: 'get'
    })
}