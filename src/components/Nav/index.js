import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'

import {
	Header, Title, ContainerBack
} from './styled'

const Back = () => {
	return (
		<ContainerBack  to={"/"}>
			<IoMdArrowBack color="#000" size="20px"/>
		</ContainerBack>
	)
}

export const Nav = ({back}) => {

	return (
		<Header>
			{ back && <Back/> }
			<Title>Sistema de gestión de órdenes</Title>
		</Header>
	)
}