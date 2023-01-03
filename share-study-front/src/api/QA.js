import request from '@/utils/request'
export function get_myQuestion() {
    return request({
        url: 'QA/getMyQuestion',
        method: 'get'
    })
}
export function get_myAnswer() {
    return request({
        url: 'QA/getMyAnswer',
        method: 'get'
    })
}
export function getRecommend() {
    return request({
        url: 'QA/getRecommend',
        method: 'get'
    })
}
export function getMyCollection() {
    return request({
        url: 'QA/getMyCollection',
        method: 'get'
    })
}
export function getQuestionById(questionid) {
    return request({
        url: 'QA/getQuestionById',
        method: 'get',
        params:{"questionid":questionid}
    })
}
export function askQuestion(content,header,rewardpoints,inputtag1,inputtag2,inputtag3) {
    return request({
        url: 'QA/askQuestion',
        method: 'post',
        params: {"header":header,"rewardpoints":rewardpoints,"inputtag1":inputtag1,"inputtag2":inputtag2,"inputtag3":inputtag3},
        data:content
    })
}
export function getAnswer(questionid)
{
    return request({
        url: 'QA/getAnswer',
        method: 'get',
        params:{"questionid":questionid}
    })
}
export function getAnswerById(answerid)
{
    return request({
        url: 'QA/getAnswerById',
        method: 'get',
        params:{"answerid":answerid}
    })
}
export function getTags(questionid)
{
    return request({
        url: 'QA/getTags',
        method: 'get',
        params:{"questionid":questionid}
    })
}
export function answerQuestion(questionid,content)
{
        return request({
        url: 'QA/answerQuestion',
        method: 'post',
        params: { "questionid": questionid },
        data:content
    })
}
export function searchByQuestion(keyword)
{
        return request({
        url: 'QA/searchByQuestion',
        method: 'get',
        params:{"keyword":keyword}
    })
}
export function searchByUser(keyword)
{
        return request({
        url: 'QA/searchByUser',
        method: 'get',
        params:{"keyword":keyword}
    })
}
export function clickLike(answerid)
{
        return request({
        url: 'QA/clickLike',
        method: 'post',
        params:{"answerid":answerid}
    })
}
export function undoLike(answerid)
{
        return request({
        url: 'QA/undoLike',
        method: 'post',
        params:{"answerid":answerid}
    })
}
export function clickStar(answerid)
{
        return request({
        url: 'QA/clickStar',
        method: 'post',
        params:{"answerid":answerid}
    })
}
export function undoStar(answerid)
{
        return request({
        url: 'QA/undoStar',
        method: 'post',
        params:{"answerid":answerid}
    })
}
export function adoptanswer(answerid)
{
        return request({
        url: 'QA/adoptanswer',
        method: 'post',
        params:{"answerid":answerid}
    })
}
export function getAnswerComments(answerid)
{
        return request({
        url: 'QA/getAnswerComments',
        method: 'get',
        params:{"answerid":answerid}
    })
}
export function makeComment(answerid,content)
{
        return request({
        url: 'QA/makeComment',
        method: 'post',
        params: { "answerid": answerid },
        data:content
    })
}
