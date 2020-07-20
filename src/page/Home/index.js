import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {  Nav } from '../../components/Nav'
import { ListOfOrders } from '../../components/ListOfOrders'
import { FabButton } from '../../components/FabButton'
import { ModalCreateOrden } from '../../components/ModalCreateOrden'
import {  getOrders } from '../../services/order'

import {
	Secction
}from './styled'

export const Home = () => {

	const [modal, setModal] = useState(false)
	const [orders, setOrders] = useState([1,2,3,4])

	const activeModal = () => {
		setModal(!modal)
	}

	useEffect(() => {
		const getData = async () => {
			try {
				const { data }  = await getOrders();
				setOrders(data.data)
				console.log(data.data)
			}catch(e){
				console.log()
				console.log("log")
			}
		}
		getData()
	}, [])

	return(
		<>
			<Nav />
			<Secction>
				<ListOfOrders orders={orders} />
			</Secction>
			<FabButton activeModal={activeModal} />
			{ modal && <ModalCreateOrden activeModal={activeModal} />}
		</>
	)
}