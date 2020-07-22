import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import { validateCreateOrder } from '../../utils/validation/order'
import { parserCreateOrder } from '../../utils/parser'
import { useInputValue } from '../../hooks/useInputValue'
import { postOrder } from '../../services/order'
import { Loading } from '../Loading'

import {
	Page, Modal, 
	Header, Title, Close,
	Content, Container, Label, Input, Select, 
	ButtonSave, Error
}from './styled'

export const ModalCreateOrden = (props) => {
	const channel = useInputValue('')
	const state = useInputValue('')
	const value = useInputValue(Number)
	const discount = useInputValue(Number)
	const date = useInputValue('')
	const deliveryType = useInputValue('')
	const shippingType = useInputValue('')
	
	const [ loading, setLoading] = useState(false)
	const [errors, setError] = useState([])

	const restoreForm = () => {
		channel.setInput('')
		value.setInput(0)
		discount.setInput(0)
		date.setInput('')
	}

	const save = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			const order = await parserCreateOrder(channel, state, value, discount, date, deliveryType, shippingType )
			const orderN = await validateCreateOrder(order)
			const { data } = await postOrder(orderN)
			props.addOrder(data.data)
			restoreForm()
			setError([])
			setLoading(false)
		}catch(e) {
			setLoading(false)
			if (Array.isArray(e)){
				setError(e)
			}
			
		}
	}

	return(
		<Page>
			<Modal>
				<Header>
					<Title>Crear Orden</Title>
					<Close onClick={props.activeModal}>
						<IoMdClose size="25px" color="#60677a"/>
					</Close>
				</Header>
				<Content>
					<Container>
						<Label>Canal:</Label> <br />
						<Input type="text" {...channel} placeholder="canal"/>
					</Container>
					<Container>
						<Label>Estado:</Label> <br />
						<Select {...state}>
							<option value="">Seleccione</option>
							<option value="Reservada">Reservada</option>
							<option value="Pendiente">Pendiente</option>
							<option value="En tránsito">En tránsito</option>
							<option value="Lista para recoger">Lista para recoger</option>
							<option value="Cerrada">Cerrada</option>
							<option value="Cancelada">Cancelada</option>
						</Select>
					</Container>	
					<Container>
						<Label>Valor:</Label> <br />
						<Input type="number" {...value} placeholder="valor"/>
					</Container>	
					<Container>
						<Label>Descuento:</Label> <br />
						<Input type="Number" {...discount} placeholder="descuento"/>
					</Container>
					<Container>
						<Label>Fecha de creación:</Label> <br />
						<Input type="text" {...date} placeholder="fecha de creación"/>
					</Container>
					<Container>
						<Label>Tipo de entrega:</Label> <br />
						<Select {...deliveryType}>
							<option value="">Seleccione</option>
							<option value="Estandar">Estandar</option>
							<option value="Express">Express</option>
						</Select>
					</Container>
					<Container>
						<Label>Tipo de envio:</Label> <br />
						<Select {...shippingType}>
							<option value="">Seleccione</option>
							<option value="Entrega en tienda">Entrega en tienda</option>
							<option value="Entrega en domicilio">Entrega en domicilio</option>
						</Select>
					</Container>
					<Container>
						<ButtonSave onClick={save}>Guardar Orden</ButtonSave>
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