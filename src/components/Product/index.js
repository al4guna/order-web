import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import {
	Item, Header, Content, Title,
	Icon, Text, Span
}from './styled'

export const Product = (props) => {
	
	return(
		<Item>
			<Header>
				<Title>Producto #{props.number + 1}</Title>
				<Icon>
					<AiOutlineDelete size="25px" color="#000"/> 
				</Icon>
			</Header>
			<Content>
				<div>
					<Text>Sku: <Span>{props.sku}</Span></Text>
					<Text>Nombre: <Span>{props.name}</Span></Text>
					<Text>Cantidad: <Span>{props.quantity}</Span></Text>
					<Text>Precio: <Span>${props.price}</Span></Text>
					<Text>Codigo de barra: <Span>{props.barcode}</Span></Text>
				</div>
			</Content>
		</Item>
	)
}
