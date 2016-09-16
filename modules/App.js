import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import AmCharts from 'amcharts3-react';



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

          <div className="row">

            <div className="proposal-request col-sm-4">Client Proposal Request

              <form>

                <div className="form-group">
                  <label for="name">Name: </label>
                  <input type="text" className="form-control" id="name" placeholder="Name"/>
                </div>

                <div className="form-group">
                  <label for="name">Need: </label>
                  <input type="text" className="form-control" id="need" placeholder="Need"/>
                </div>

                <div className="form-group">
                  <label for="name">Duration: </label>
                  <input type="text" className="form-control" id="duration" placeholder="Duration"/>
                </div>

                <div className="form-group">
                  <label for="name">Contact: </label>
                  <input type="email" className="form-control" id="email" placeholder="Email"/>
                </div>

                <button type="submit" className="btn btn-default">Submit</button>

              </form>

            </div>

            <div className="col-sm-7"> 
              <div id="chartdiv"></div>
            </div>

          </div>

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

          <div className="row">

          

            <div className="search col-sm-4">Vendor Search

              <form>

                <div className="form-group">
                  <label for="name">Country: </label>
                  <input type="text" className="form-control" id="country" placeholder="Country"/>
                </div>

                <div className="form-group">
                  <label for="name">City: </label>
                  <input type="text" className="form-control" id="city" placeholder="City"/>
                </div>

                <div className="form-group">
                  <label for="name">Services: </label>
                  <input type="text" className="form-control" id="service" placeholder="Service Type"/>
                </div>
                
                <button type="submit" className="btn btn-default">Submit</button>

              </form>

            </div>

          </div>

          <div className="results">Vendor Results

            <div className="row">

              <div className="col-sm-2">
                <div className="logo"><img src="../public/img/fakeLogo1.jpg" alt="logo" className="img-rounded"/></div>
              </div>

              <div className="col-sm-5">

                  <ul className="vendorInfo">
                    <li>Name: </li>
                    <li>Country: </li>
                    <li>Services: </li>
                  </ul>

              </div>

              <div className="col-sm-4">
                <div className="vendorSocial">
                  <i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i> <i className="fa fa-google-plus-square fa-3x" aria-hidden="true"></i> <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i> <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
                </div>
              </div>

            </div>


          </div>

      </div>
    )
  }
})
