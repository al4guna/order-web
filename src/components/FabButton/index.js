import React from 'react'
import { IoIosAdd } from 'react-icons/io'

import {
	Button
}from './styled'

export const FabButton = (props) => {

	return(
		<Button onClick={props.activeModal}>
			<IoIosAdd size="40px" color="#3578e5"/>
		</Button>
	)
}