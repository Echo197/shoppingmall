import {request} from 'network/request'

export function getMultiData(){
    return request({
        url:'/home/multidata'
    })
}

export function getProductData(type, page){
    return request({
        baseURL:'http://152.136.185.210:7878/api/m5/home/data',
        params:{
            type,
            page
        }
    })
}