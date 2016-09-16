import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Proposals from './modules/Proposals'
import Search from './modules/Search'
import AmCharts from 'amcharts3-react';

render((
<Router history={hashHistory}>
	<Route path="/" component={App}>
		<Route path="/search" component={Search}/>
		<Route path="/proposals" component={Proposals}/>
	</Route>
</Router>
),document.getElementById('app'))