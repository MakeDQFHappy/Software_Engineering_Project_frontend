import request from '@/utils/request'

export function academicLogin(academicNum,passowrd) {
    return request({
        url: 'login/academic',
        method: 'get',
        params: {"academicNum":academicNum,
                "password":passowrd}
    })
}

export function emailLogin(email,passowrd) {
    return request({
        url: 'login/email',
        method: 'get',
        params: {"email":email,
                "password":passowrd}
    })
}

export function userLogout(id) {
    return request({
        url: '/login/logout',
        method: 'get',
        params:{"id":id}
    })
}