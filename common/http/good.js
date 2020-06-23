import http from './interface'

export const getGoods = (data)=>{
	return http.request({
		url:'index/index',
		method:'GET',
		data,
	})
}
export const createGoods = (data)=>{
	return http.request({
		url:'index/createGoods',
		method:'POST',
		data,
	})
}
// export const test = (data) => {
// 	/* http.config.baseUrl = "http://localhost:8080/api/"
// 	//设置请求前拦截器
// 	http.interceptor.request = (config) => {
// 		config.header = {
// 			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
// 		}
// 	} */
// 	//设置请求结束后拦截器
// 	http.interceptor.response = (response) => {
// 		console.log('个性化response....')
// 		//判断返回状态 执行相应操作
// 		return response;
// 	}
//     return http.request({
// 		baseUrl: 'https://unidemo.dcloud.net.cn/',
//         url: 'ajax/echo/text?name=uni-app',
// 		dataType: 'text',
//         data,
//     })
// },
 
 //请求首页热门商品
export function hotGoods(data){
	return http.request({
		url:'/api/product/hot',
		method:'GET',
		data,
	})
}

//获取首页轮播图数据等
export function getIndex(data){
	return http.request({
		url:'/api/index',
		method:'GET',
		data,
	})
}
//获取商品分类
export function getCategory(data){
	return http.request({
		url:'/api/category',
		method:'GET',
		data,
	})
}
//获取商品列表
export function getGoodsList(data){
	return http.request({
		url:'/api/products',
		method:'GET',
		data,
	})
}
//获取商品详情
export function getGoodsInfo(id){
	return http.request({
		url:'/api/product/detail/'+id,
		method:'GET',
	})
}
 
 
 export default{
	 getGoods,
	 createGoods,
	 hotGoods,
	 getIndex,
	 getCategory,
	 getGoodsList,
	 getGoodsInfo,
	 
 }
 