import React, { useState } from 'react'

import {  Nav } from '../../components/Nav'
import { ListOfOrders } from '../../components/ListOfOrders'
import { FabButton } from '../../components/FabButton'
import { ModalCreateOrden } from '../../components/ModalCreateOrden'

import {
	Secction
}from './styled'

export const Home = () => {

	const [modal, setModal] = useState(false)

	const activeModal = () => {
		setModal(!modal)
	}

	return(
		<>
			<Nav />
			<Secction>
				<ListOfOrders />
			</Secction>
			<FabButton activeModal={activeModal} />
			{ modal && <ModalCreateOrden activeModal={activeModal} />}
		</>
	)
}