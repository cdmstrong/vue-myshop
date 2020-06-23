import http from './interface.js'

export const getorder = (data)=>{
	return http.request({
		url:'index/index',
		method:'GET'
	})
}
// 轮播图
export const banner = (data) => {
    return http.request({
        url: 'index/index',
        method: 'GET', 
        data,
		// handle:true
    })
}
export default{
	getorder,
	banner
}