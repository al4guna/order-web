import React, { useState, useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'

import { ModalEditOrder } from '../ModalEditOrder'
import { parserCreateOrder } from '../../utils/parser'

import {
	Item, Header, Content, Title,
	Icon, Text, Span, Link, RouterLink
}from './styled'

export const Order = (props) => {
	const [modal, setModal] = useState(false)
	const [state, setState] = useState('')
	const [value, setValue] = useState(Number)

	const activateModal = () => {
		setModal(!modal)
	}

	useEffect(() => {
		setState(props.state)
		setValue(props.value)
	}, [])

	const updateOrder = (data) => {
		setState(data.state)
		setValue(data.value)
	} 
	
	return(
		<Item>
			<Icon onClick={activateModal}>
				<FiEdit color="#000"/> 
			</Icon>
			<RouterLink to={`${props.id}`}>
				<Header>
					<Title>Orden #{props.number + 1}</Title>
				</Header>
				<Content>
					<div>
						<Text>Canal: <Span>{props.channel}</Span></Text>
						<Text>Estado: <Span>{state}</Span></Text>
						<Text>Valor: <Span>${value}</Span></Text>
						<Text>Descuento: <Span>{props.discount}%</Span></Text>
						<Text>Fecha de creación: <Span>{props.date}</Span></Text>
						<Text>Tipo de entrega: <Span>{props.deliveryType}</Span></Text>
						<Text>Tipo de envio: <Span>{props.shippingType}</Span></Text>
					</div>
					<div>
						<Link>ver más</Link>
					</div>
				</Content>
			</RouterLink>
			{modal && <ModalEditOrder {...props} activateModal={activateModal} updateOrder={updateOrder}/>}
		</Item>
	)
}