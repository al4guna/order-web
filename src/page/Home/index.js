import React from 'react'

import {  Nav } from '../../components/Nav'
import { ListOfOrders } from '../../components/ListOfOrders'
import { FabButton } from '../../components/FabButton'

export const Home = () => {
	return(
		<>
			<Nav />
			<ListOfOrders />
			<FabButton />
			
		</>
	)
}