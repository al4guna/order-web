import React from 'react'
import { FiEdit } from 'react-icons/fi'
import {
	Item, Header, Content, Title, Icon, Text, Span, Link
}from './styled'

export const Order = ({number = 1}) => {
	return(
		<Item>
			<Header>
				<Title>Orden #{number}</Title>
				<Icon>
					<FiEdit color="#000"/> 
				</Icon>
			</Header>
			<Content>
				<div>
					<Text>Canal: <Span>Canal de recepción</Span></Text>
					<Text>Estado: <Span>Reservada</Span></Text>
					<Text>Valor: <Span>$30000</Span></Text>
					<Text>Descuento: <Span>0%</Span></Text>
					<Text>Fecha de creación: <Span>29/09/2020</Span></Text>
					<Text>Tipo de entrega: <Span>Estandar</Span></Text>
					<Text>Tipo de envio: <Span>Entrega en tienda</Span></Text>
				</div>
				<div>
					<Link>ver más</Link>
				</div>
			</Content>
		</Item>
	)
}