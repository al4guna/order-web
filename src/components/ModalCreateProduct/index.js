import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import { validateCreateProduct } from '../../utils/validation/product'
import { parserCreateProduct } from '../../utils/parser'
import { useInputValue } from '../../hooks/useInputValue'
import { postProduct } from '../../services/product'
import { Loading } from '../Loading'

import {
	Page, Modal, 
	Header, Title, Close,
	Content, Container, Label, Input, 
	ButtonSave, Error
}from './styled'

export const ModalCreateProduct = (props) => {
	const sku = useInputValue('')
	const name = useInputValue('')
	const quantity = useInputValue(Number)
	const price = useInputValue(Number)
	const barcode = useInputValue('')
	
	const [ loading, setLoading] = useState(false)
	const [errors, setError] = useState([])

	const restoreForm = () => {
		sku.setInput('')
		name.setInput('')
		quantity.setInput(0)
		price.setInput(0)
		barcode.setInput('')
	}

	const save = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			const product = await parserCreateProduct(props.idOrder, sku, name, quantity, price, barcode  )
			const productN = await validateCreateProduct(product) 
			const { data } = await postProduct(productN)
			props.addProduct(data.data)
			restoreForm()
			setError([])
			setLoading(false)
		}catch(e) {
			setLoading(false)
			setError(e)
		}
	}
	
	return(
		<Page>
			<Modal>
				<Header>
					<Title>Crear Producto</Title>
					<Close onClick={props.activeModal}>
						<IoMdClose size="25px" color="#60677a"/>
					</Close>
				</Header>
				<Content>
					<Container>
						<Label>Sku:</Label> <br />
						<Input type="text" {...sku} placeholder="Sku"/>
					</Container>
					<Container>
						<Label>Nombre:</Label> <br />
						<Input type="text" {...name} placeholder="Nombre"/>
						
					</Container>	
					<Container>
						<Label>Cantidad:</Label> <br />
						<Input type="Number" {...quantity} placeholder="Cantidad"/>
					</Container>	
					<Container>
						<Label>Precio:</Label> <br />
						<Input type="Number" {...price} placeholder="Precio"/>
					</Container>
					<Container>
						<Label>Codigo de barra:</Label> <br />
						<Input type="text" {...barcode} placeholder="codigo de barra"/>
					</Container>
					<Container>
						<ButtonSave onClick={save}>Guardar Producto</ButtonSave>
					</Container>
					<Error>
					{
						errors.map((e, key) => {
							return (
								<span key={key}>
									{e}, 
								</span>
							)
						})
					}
					</Error>
				</Content>
				{ loading && <Loading />}
			</Modal>
		</Page>
	)
}