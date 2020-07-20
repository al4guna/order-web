import React from 'react'
import { IoMdClose } from 'react-icons/io'

import { useInputValue } from '../../hooks/useInputValue'
import {
	Page, Modal, 
	Header, Title, Close,
	Content, Container, Label, Input, Select, ButtonSave
}from './styled'

export const ModalCreateOrden = (props) => {
	const channel = useInputValue('')
	const state = useInputValue()
	const value = useInputValue(Number)
	const discount = useInputValue(Number)
	const date = useInputValue('')
	const deliveryType = useInputValue()
	const shippingType = useInputValue()

	const save = () => {
		console.log(channel.value)
		console.log(state.value)
		console.log(value.value)
		console.log(discount.value)
		console.log(date.value)
		console.log(deliveryType.value)
		console.log(shippingType.value)
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
						<Input type="text" {...channel} />
					</Container>
					<Container>
						<Label>Estado:</Label> <br />
						<Select {...state}>
							<option value="-1">Seleccione</option>
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
						<Input type="number" {...value} />
					</Container>	
					<Container>
						<Label>Descuento:</Label> <br />
						<Input type="text" {...discount} />
					</Container>
					<Container>
						<Label>Fecha de creación:</Label> <br />
						<Input type="text" {...date}/>
					</Container>
					<Container>
						<Label>Tipo de entrega:</Label> <br />
						<Select {...deliveryType}>
							<option value="-1">Seleccione</option>
							<option value="Estandar">Estandar</option>
							<option value="Express">Express</option>
						</Select>
					</Container>
					<Container>
						<Label>Tipo de envio:</Label> <br />
						<Select {...shippingType}>
							<option value="-1">Seleccione</option>
							<option value="Entrega en tienda">Entrega en tienda</option>
							<option value="Entrega en domicilio">Entrega en domicilio</option>
						</Select>
					</Container>
					<Container>
						<ButtonSave onClick={save}>Guardar Orden</ButtonSave>
					</Container>
				</Content>
			</Modal>
		</Page>
	)
}