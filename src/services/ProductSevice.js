import ApiService from './ApiService'

export async function apiGetProduct() {
    return ApiService.fetchData({
        url: 'product',
        method: 'get',
    })
}