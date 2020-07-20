import React from 'react'
import { IoMdClose } from 'react-icons/io'
import {
	Page, Modal, 
	Header, Title, Close,
	Content, Container, Label, Input, Select, ButtonSave
}from './styled'

export const ModalCreateOrden = (props) => {
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
						<Input type="text"/>
					</Container>
					<Container>
						<Label>Estado:</Label> <br />
						<Select>
							<option>Seleccione</option>
							<option>Reservada</option>
							<option>Pendiente</option>
							<option>En tránsito</option>
							<option>Lista para recoger</option>
							<option>Cerrada</option>
							<option>Cancelada</option>
						</Select>
					</Container>	
					<Container>
						<Label>Valor:</Label> <br />
						<Input type="text"/>
					</Container>	
					<Container>
						<Label>Descuento:</Label> <br />
						<Input type="text"/>
					</Container>
					<Container>
						<Label>Fecha de creación:</Label> <br />
						<Input type="text"/>
					</Container>
					<Container>
						<Label>Tipo de entrega:</Label> <br />
						<Select>
							<option>Seleccione</option>
							<option>Estandar</option>
							<option>Express</option>
						</Select>
					</Container>
					<Container>
						<Label>Tipo de envio:</Label> <br />
						<Select>
							<option>Seleccione</option>
							<option>Entrega en tienda</option>
							<option>Entrega en domicilio</option>
						</Select>
					</Container>
					<Container>
						<ButtonSave>Guardar Orden</ButtonSave>
					</Container>
				</Content>
			</Modal>
		</Page>
	)
}