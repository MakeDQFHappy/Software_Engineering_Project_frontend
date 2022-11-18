import request from '@/utils/request'

export function searchUser(info) {
    return request({
        url: 'friend/searchUser',
        method: 'get',
        params: {"searchInfo":info}
    })
}

export function getReq() {
    return request({
        url: 'friend/getReq',
        method: 'get'
    })
}

export function getFriends() {
    return request({
        url: 'friend/getMyFriends',
        method: 'get'
    })
}

export function sendReq(receiverId,introduction) {
    return request({
        url: 'friend/sendReq',
        method: 'post',
        params: {"receiverId":receiverId,
                "introduction":introduction}
    })
}

export function agreeReq(applicationId) {
    return request({
        url: 'friend/agreeReq',
        method: 'post',
        params: {"applicationId":applicationId}
    })
}

export function rejectReq(applicationId) {
    return request({
        url: 'friend/reject',
        method: 'post',
        params: {"applicationId":applicationId}
    })
}

export function removeFriend(friendKey) {
    return request({
        url: 'friend/removeFriend',
        method: 'post',
        params: {"friendKey":friendKey}
    })
}