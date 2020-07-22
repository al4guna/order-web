import React, { useState, useEffect } from 'react'

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
	const [orders, setOrders] = useState([])

	const activeModal = () => {
		setModal(!modal)
	}

	const addOrder = (order) => {
		let ordersN = orders;
		ordersN.push(order)
		setOrders(ordersN)
	}

	useEffect(() => {
		const getData = async () => {
			try {
				const { data }  = await getOrders();
				setOrders(data.data)
			}catch(e){
				console.log(e)
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
			{ modal && <ModalCreateOrden activeModal={activeModal} addOrder={addOrder}/>}
		</>
	)
}