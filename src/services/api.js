import request from '../utils/request';

export async function getPostList(){
    return request('/authority/verify',{
        method: 'GET'
    })
}