import request from '@/utils/request'
export function get_myQuestion() {
    return request({
        url: 'QA/getMyQuestion',
        method: 'get'
    })
}
export function askQuestion(content,header,rewardpoints) {
    return request({
        url: 'QA/askQuestion',
        method: 'post',
        params: {"header":header,"rewardpoints":rewardpoints},
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
export function answerQuestion(questionid,content)
{
        return request({
        url: 'QA/answerQuestion',
        method: 'post',
        params: { "questionid": questionid },
        data:content
    })
}
