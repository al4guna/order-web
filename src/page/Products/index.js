import React, { useState, useEffect } from 'react'

import {  Nav } from '../../components/Nav'
import { ListOfProducts } from '../../components/ListOfProducts'
import { FabButton } from '../../components/FabButton'
import { ModalCreateProduct } from '../../components/ModalCreateProduct'
import { getProduct } from '../../services/product'

import {
	Secction
}from './styled'

export const Products = (props) => {
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

	const deleteProduct = (id) => {
		const listN = products.filter((product) => {
			return product.id !== id
		})
		setProducts(listN)
	}

	let { id } = props.match.params;
	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await getProduct(id)
				setProducts(data.data)
			}catch(e){
				console.log(e)
			}
		}
		getData()
	}, [])
	
	return(
		<>
			<Nav back={true} />
			<Secction>
				<ListOfProducts products={products} handleDeleteProduct={deleteProduct} />
			</Secction>
			<FabButton activeModal={activeModal} />
			{ modal && <ModalCreateProduct activeModal={activeModal} addProduct={addProduct} idOrder={id}/>}
		</>
	)
}