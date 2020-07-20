import React from 'react'

import { Order } from '../Order'

import {
	List
}from './styled'

export const ListOfOrders = ({orders}) => {
	return(
		<List>{
			orders.map((order, key) => {
				return <Order {...order} key={key} number={key}/>
			})
		}</List>
	)
}