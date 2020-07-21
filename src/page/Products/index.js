import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


import {  Nav } from '../../components/Nav'
import { ListOfProducts } from '../../components/ListOfProducts'
import { FabButton } from '../../components/FabButton'
import { ModalCreateProduct } from '../../components/ModalCreateProduct'

import {
	Secction
}from './styled'

export const Products = () => {
	const [modal, setModal] = useState(false)
	const [products, setProducts] = useState([])

	const activeModal = () => {
		setModal(!modal)
	}

	const addProduct = (product) => {
		let productsN = products;
		productsN.push(product)
		setProducts(productsN)
	}

	let { id } = useParams();
	return(
		<>
			<Nav />
			<Secction>
				<ListOfProducts products={products} />
			</Secction>
			<FabButton activeModal={activeModal} />
			{ modal && <ModalCreateProduct activeModal={activeModal} addProduct={addProduct} idOrder={id}/>}
		</>
	)
}