import React from 'react'

import { Order } from '../Order'

import {
	List
}from './styled'

export const ListOfOrders = () => {
	return(
		<List>
			<Order />
		</List>
	)
}