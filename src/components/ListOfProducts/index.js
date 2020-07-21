import React from 'react'

import { Product } from '../Product'

import {
	List
}from './styled'

export const ListOfProducts = ({products}) => {
	return(
		<List>{
			
			products.map((product, key) => {
				return <Product {...product} key={key} number={key}/>
			})
		} <Product number={1}/>  </List>
	)
}