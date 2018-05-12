import request from '../utils/request';

export async function verifyLogin(){
    return request('/authority/verify',{
        method: 'GET'
    })
}