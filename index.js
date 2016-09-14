import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import About from './components/Proposal'
import Repos from './components/Search'

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
			<Route path="/Proposal" component={Proposal}/>
			<Route path="/Search" component={Search}/>
	</Router>
), document.getElementById('app'))