
export const validateCreateOrder = (order) => new Promise((resolve, reject) => {
	let message = [];
	if(!order) {
		message.push("Error, vuelva intentar más tarde")
	}
	if(order.channel === null || order.channel === undefined || order.channel.length < 1) {
		message.push("[canal] es requerido")
	}
	if(order.date === null || order.date === undefined || order.date.length < 1) {
		message.push("[fecha] es requerido")
	}
	if(order.deliveryType === null || order.deliveryType === undefined || order.deliveryType.length < 1) {
		message.push("[Tipo de entrega] es requerido")
	}
	if(order.discount === null || order.discount === undefined ) {
		message.push("[descuento] es requerido")
	}	
	if(order.shippingType === null || order.shippingType === undefined || order.shippingType.length < 1) {
		message.push("[Tipo de envio] es requerido")
	}	
	if(order.state === null || order.state === undefined || order.state.length < 1) {
		message.push("[Estado] es requerido")
	}
	if(order.value === null || order.value === undefined) {
		message.push("[valor] es requerido")
	}

	if(message.length > 0) {
		reject(message)
	}
	resolve(order)
})
