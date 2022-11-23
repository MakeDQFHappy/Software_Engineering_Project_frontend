import request from '@/utils/request'

export function userLogin(userId) {
    return request({
        url: 'login/user',
        method: 'get',
        params: {"userId":userId}
    })
}

export function userLogout() {
    return request({
        url: '/login/logout',
        method: 'get',
        // headers: { 'Content-Type': 'multipart/form-data' }
    })
}