import request from '@/utils/request'

export function updateAvatar(oldAvatar,file) {
    return request({
        url: 'personalInfo/updateAvatar',
        method: 'post',
        params: {"oldAvatar":oldAvatar},
        data:file
    })
}