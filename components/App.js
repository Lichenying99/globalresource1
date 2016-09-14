import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div>
				<h1>Global Resource One</h1>
				<ul role="nav">
					<li><Link to="/proposal">Proposal</Link></li>
					<li><Link to="/search">Search</Link></li>
				</ul>

				{this.props.children}

			</div>
		)
	}
})