import request from '@/utils/request'

export function getCode(email) {
    return request({
        url: 'register/getCode',
        method: 'get',
        params: {"email":email}
    })
}

export function varifyAcademic(academicNumber,name) {
    return request({
        url: 'register/varifyAcademic',
        method: 'get',
        params: {"academicNumber":academicNumber,
                "name":name}
    })
}

export function register(registerData) {
    return request({
        url: 'register/finalInsert',
        method: 'post',
        data: registerData
    })
}