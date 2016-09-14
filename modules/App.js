import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <nav className="nav">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li className="nav-item"><Link to="/">GR1</Link></li>
                <li className="nav-item"><Link to="/proposals">Proposal</Link></li>
                <li className="nav-item"><Link to="/search">Search</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {this.props.children}

      </div>
    )
  }
})
