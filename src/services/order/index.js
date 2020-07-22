import axios from 'axios'
import { URL_API } from '../../global/string'

export const getOrders =  () => {
	const request =  axios({
		method: "get",
	 	url: `${URL_API}/ordenes`,
	 	headers: []
	})
	return request
}

export const postOrder = (order) => {
	const request = axios({
		method: "post",
		url: `${URL_API}/ordenes`,
		headers: [],
		data: order
	})
	return request
}

export const updateOrder = (order) => {
	const request = axios({
		method: "put",
		url: `${URL_API}/ordenes`,
		headers: [],
		data: order
	})
	return request
}