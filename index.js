import React from 'react'
import { render } from 'react-dom'

import { Router, Route, hashHistory } from 'react-router'

import App from './components/Gr1'
import About from './components/Search'
import Repos from './components/Proposal'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))