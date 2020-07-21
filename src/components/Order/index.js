import React from 'react'
import { FiEdit } from 'react-icons/fi'
import {
	Item, Header, Content, Title,
	Icon, Text, Span, Link, RouterLink
}from './styled'

export const Order = (props) => {
	
	return(
		<Item>
			<RouterLink to={`${props.id}`}>
				<Header>
					<Title>Orden #{props.number + 1}</Title>
					<Icon>
						<FiEdit color="#000"/> 
					</Icon>
				</Header>
				<Content>
					<div>
						<Text>Canal: <Span>{props.channel}</Span></Text>
						<Text>Estado: <Span>{props.state}</Span></Text>
						<Text>Valor: <Span>${props.value}</Span></Text>
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
		</Item>
	)
}