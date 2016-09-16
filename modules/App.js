import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'



export default React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <nav className="nav">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li className="nav-item"><a href="#">GR1</a></li>
                <li className="nav-item"><a href="#">Proposals</a></li>
                <li className="nav-item"><a href="#">Search</a></li>
              </ul>
            </div>
        </nav>

          <div className="title text-center">GLOBAL RESOURCE ONE</div>

            <div className="row">

              <div className="col-sm-4 text-center">
                <div className="infoTitle">Client Proposal Request</div>
                  <div className="info">Clients will post job specific proposals for vendors to search and be able to answer and connect better with clients.</div>
              </div>

              <div className="col-sm-4 text-center">
                <div className="infoTitle">Vendor Search</div>
                  <div className="info">Vendors or contractors will appear in a clean and well maintained database for clients to find.</div>
              </div>

              <div className="col-sm-4 text-center">
                <div className="infoTitle">One Global Resource</div>
                  <div className="info">Both vendor and clients will be found in one central global database accessable by creating an account with GR1.</div>
              </div>

            </div>

          <div className="proposal-request">Client Proposal Request</div>

          <div className="proposals">Proposal Listings
            <div className="row">

              <div className="col-sm-3">
                <ul className="proposalList">
                  <li>Name: DK Health System</li>
                  <li>Need: Out Paitent Coders</li>
                  <li>Duration: 6 Months</li>
                  <li>Contact: jane.morris@dkhs.com</li>
                </ul>
              </div>

              <div className="col-sm-3">
                <ul className="proposalList">
                  <li>Name: </li>
                  <li>Need: </li>
                  <li>Duration: </li>
                  <li>Contact: </li>
                </ul>
              </div>

              <div className="col-sm-3">
                <ul className="proposalList">
                  <li>Name: </li>
                  <li>Need: </li>
                  <li>Duration: </li>
                  <li>Contact: </li>
                </ul>
              </div>

              <div className="col-sm-3">
                <ul className="proposalList">
                  <li>Name: </li>
                  <li>Need: </li>
                  <li>Duration: </li>
                  <li>Contact: </li>
                </ul>
              </div>

            </div>

          </div>



          <div className="search">Vendor Search</div>



      </div>
    )
  }
})
