import React from 'react'

import { Product } from '../Product'

import {
	List
}from './styled'

export const ListOfProducts = ({products, handleDeleteProduct}) => {
	return(
		<List>{
			products.map((product, key) => {
				return <Product handleDeleteProduct={handleDeleteProduct} {...product} key={key} number={key}/>
			})
		}</List>
	)
}