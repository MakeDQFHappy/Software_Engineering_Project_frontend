import request from '@/utils/request'

export function userLogin(userId) {
    return request({
        url: 'login/user',
        method: 'get',
        params: {"userId":userId}
    })
}

export function userLogout(id) {
    return request({
        url: '/login/logout',
        method: 'get',
        params: {"id":id},
        // headers: { 'Content-Type': 'multipart/form-data' }
    })
}