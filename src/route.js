import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './page/Home'
import { GlobalStyle } from './global/GlobalStyled'

export const Router = () => {
	return(
		<BrowserRouter>
			<GlobalStyle />
			<Switch>
				<Route path="/"> <Home /> </Route>
			</Switch>
		</BrowserRouter>
	)
}