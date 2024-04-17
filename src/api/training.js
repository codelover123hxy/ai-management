import request from "@/util/request";

export const getTraining = () => {
    return request ({
        url: '/api/training',
        method: 'GET'
    })
}