import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './page/Home'
import { Products } from './page/Products'
import { GlobalStyle } from './global/GlobalStyled'

export const Router = () => {
	return(
		<BrowserRouter>
			<GlobalStyle />
			<Switch>
				<Route exact path="/"> <Home /> </Route>
				<Route exact path="/:id"> <Products/> </Route>
			</Switch>
		</BrowserRouter>
	)
}