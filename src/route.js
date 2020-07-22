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
				<Route exact path="/" component={Home} />
				<Route exact path="/:id" component={Products} />  
			</Switch>
		</BrowserRouter>
	)
}