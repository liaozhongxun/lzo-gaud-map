import request from "@/utils/require"

export function getpop(query){    
    return request({
        url: '/v5/place/polygon',
        method: 'get',
        params: query
    })
}