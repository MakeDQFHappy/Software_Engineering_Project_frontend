import request from '@/utils/request'

export function getAllNotes(page) {
    return request({
        url: 'share/getAllNotes',
        method: 'get',
        params:{"page":page}
    })
}

export function getUserNotes(page) {
    return request({
        url: 'share/getUserNotes',
        method: 'get',
        params:{"page":page}
    })
}

export function getUserCollections(page) {
    return request({
        url: 'share/getUserCollections',
        method: 'get',
        params:{"page":page}
    })
}


export function searchNotes(pattern) {
    return request({
        url: 'share/searchNotes',
        method: 'get',
        params:{"pattern":pattern}
    })
}


export function getComments(noteId) {
    return request({
        url: 'share/getComments',
        method: 'get',
        params:{"noteID":noteId}
    })
}

export function download(noteId) {
    return request({
        url: 'share/download',
        method: 'get',
        params:{"noteID":noteId}
    })
}

export function getLikesInfo(noteId,targetID) {
    return request({
        url: 'share/getLikesInfo',
        method: 'get',
        params:{"noteID":noteId,
               "targetID":targetID}
    })
}

export function testPicture(base64) {
    return request({
        url: 'share/testPicture',
        method: 'post',
        data:base64
    })
}

export function upload(title,content,myId,points,tags) {
    return request({
        url: 'share/upload',
        method: 'post',
        data:{"title":title,"content":content,"shareID":myId,"points":points,"tags":tags}
    })
}

export function makeComment(targetID,content) {
    return request({
        url: 'share/makeComment',
        method: 'post',
        data:{"targetID":targetID,"content":content}
    })
}

export function chargePoints(sellerID,noteID,points) {
    return request({
        url: 'share/chargePoints',
        method: 'post',
        data:{"sellerID":sellerID,"noteID":noteID,"points":points}
    })
}

export function like(targetID) {
    return request({
        url: 'share/like',
        method: 'post',
        data:{"targetID":targetID}
    })
}

export function collect(targetID) {
    return request({
        url: 'share/collect',
        method: 'post',
        data:{"targetID":targetID}
    })
}

export function cancelCollect(targetID) {
    return request({
        url: 'share/cancelCollect',
        method: 'post',
        data:{"targetID":targetID}
    })
}

export function cancelLike(targetID) {
    return request({
        url: 'share/cancelLike',
        method: 'post',
        data:{"targetID":targetID}
    })
}