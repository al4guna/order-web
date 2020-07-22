import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import { parserUpdateOrder } from '../../utils/parser'
import { useInputValue } from '../../hooks/useInputValue'
import { updateOrder } from '../../services/order'
import { Loading } from '../Loading'

import {
	Page, Modal, 
	Header, Title, Close,
	Content, Container, Label, Input, Select, 
	ButtonSave
}from './styled'

export const ModalEditOrder = (props) => {
	const state = useInputValue('')
	const value = useInputValue(Number)
	
	const [ loading, setLoading] = useState(false)

	const save = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			const order = parserUpdateOrder(props.id , state, value )
			const { data } = await updateOrder(order)
			props.updateOrder(data.data)
			setLoading(false)
			props.activateModal()
		}catch(e) {
		 	setLoading(false)
		}
	}

	return(
		<Page>
			<Modal>
				<Header>
					<Title>Editar Orden</Title>
					<Close onClick={props.activateModal}>
						<IoMdClose size="25px" color="#60677a"/>
					</Close>
				</Header>
				<Content>
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
						<ButtonSave onClick={save}>Guardar Orden</ButtonSave>
					</Container>
				</Content>
				{ loading && <Loading />}
			</Modal>
		</Page>
	)
}