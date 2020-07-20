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