import axios from 'axios'
import { URL_API } from '../../global/string'

export const getOrders =  (idOrder) => {
	const request =  axios({
		method: "get",
	 	url: `${URL_API}/productos/${idOrder}`,
	 	headers: []
	})
	return request
}

export const postProduct = (product) => {
	const request = axios({
		method: "post",
		url: `${URL_API}/productos`,
		headers: [],
		data: product
	})
	return request
}