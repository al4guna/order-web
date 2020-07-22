export const parserCreateOrder = (channel, state, value, discount, date, delivery, shipping) => {
	return {
		channel: channel.value,
		date: date.value,
		deliveryType: delivery.value,
		discount: Number(discount.value),
		shippingType: shipping.value,
		state: state.value,
		value: Number(value.value)
	}
}

export const parserCreateProduct = (idOrder, sku, name, quantity, price, barcode) => {
	return {
		idOrder: idOrder,
		sku: sku.value,
		name: name.value,
		quantity: Number(quantity.value),
		price: Number(price.value),
		barcode: barcode.value
	}
}

export const parserUpdateOrder = (id, state, value) => {
	if(Number(value.value) === 0) {
		return { id: id, state: state.value }
	} 
	if(state.value.lenght < 1) {
		return { id: id, value: Number(value.value) }
	}
	return {
		id: id,
		state: state.value,
		value: Number(value.value)
	}
}