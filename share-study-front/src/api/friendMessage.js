import request from '@/utils/request'

export function sendTextMessage(receiverId,message) {
    return request({
        url: 'friendMessage/sendTextMessage',
        method: 'post',
        params: {"receiverId":receiverId},
        data:message
    })
}

export function sendFileMessage(receiverId,file) {
    return request({
        url: 'friendMessage/sendFileMessage',
        method: 'post',
        params: {"receiverId":receiverId},
        data:file,
    })
}

export function sendAudioMessage(receiverId,file) {
    return request({
        url: 'friendMessage/sendAudioMessage',
        method: 'post',
        params: {"receiverId":receiverId},
        data:file,
    })
}

export function getMessage(receiverId) {
    return request({
        url: 'friendMessage/getMessage',
        method: 'get',
        params: {"receiverId":receiverId},
    })
}

export function readMsg(senderId) {
    return request({
        url: 'friendMessage/readMsg',
        method: 'get',
        params: {"senderId":senderId},
    })
}