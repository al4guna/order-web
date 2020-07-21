
export const validateCreateProduct = (product) => new Promise((resolve, reject) => {
	let message = [];
	if(!product) {
		message.push("Error, vuelva intentar más tarde")
	}
	if(product.sku === null || product.sku === undefined || product.sku.length < 1) {
		message.push("[sku] es requerido")
	}
	if(product.name === null || product.name === undefined || product.name.length < 1) {
		message.push("[nombre] es requerido")
	}
	if(product.quantity === null || product.quantity === undefined ) {
		message.push("[descuento] es requerido")
	}
	if(product.barcode === null || product.barcode === undefined || product.barcode.length < 1) {
		message.push("[Codigo de barra] es requerido")
	}
	if(product.price === null || product.price === undefined) {
		message.push("[precio] es requerido")
	}

	if(message.length > 0) {
		reject(message)
	}
	resolve(product)
})
