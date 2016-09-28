import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';


import AmCharts from 'amcharts3-react';



export default React.createClass({
  render() {
    return (
      <div className="container">
        <nav className="nav">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li className="nav-item"><a className="navs" href="#">GR1</a></li>
                <li className="nav-item"><a className="navs" href="#prop-req">Proposals</a></li>
                <li className="nav-item"><a className="navs" href="#vendor-search">Search</a></li>
              </ul>
            </div>
        </nav>

          <div className="title text-center">GLOBAL RESOURCE ONE</div>

            <div className="row infoBoxes">

              <div className="col-sm-4">
              <div className="panel panel-default panelTest">
                <h5 className="infoTitle panel-title text-center">Client Proposal Request</h5>
                  <p className="info panel-body text-center">Clients will post job specific proposals for vendors to search and be able to answer and connect better with clients.</p>
              </div>
              </div>

              <div className="col-sm-4">
              <div className="panel panel-default panelTest">
                <h5 className="infoTitle panel-title text-center">Vendor Search</h5>
                  <p className="info panel-body text-center">Vendors or contractors will appear in a simple to search database constantly being updated with current information.</p>
              </div>
              </div>

              <div className="col-sm-4">
              <div className="panel panel-default panelTest">
                <h5 className="infoTitle panel-title text-center">One Resource</h5>
                  <p className="info panel-body text-center">Both vendor and clients will be found in one central global database accessable by creating an account with Global Resource One.</p>
              </div>
              </div>

            </div>

      <div className="section-one"><a name="prop-req"></a></div>
      <div className="row form1">
        <div className="col-sm-4">
          <div className="panel panel-default">
            <div className="panel-heading clearfix">
              <h5 className="panel-title pull-left">Proposal Request</h5>
              <div className="btn-group pull-right">
                <button className="btn btn-success">
                  <i className="fa fa-check"></i>
                    Submit
                </button>
                </div>
              </div>
              <div className="modal-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label className="col-xs-3 control-label">Name: </label>
                    <div className="col-xs-9">
                      <input type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-3 control-label">Service: </label>
                    <div className="col-xs-9">
                      <select className="form-control">
                        <option>Inpatient</option>
                        <option>Outpatient</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-3 control-label">Duration: </label>
                    <div className="col-xs-9">
                      <select className="form-control">
                        <option>6 Months</option>
                        <option>12 Months</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-3 control-label">Contact: </label>
                    <div className="col-xs-9">
                      <input type="email" className="form-control"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-7"> 
            <div id="chartdiv"></div>
          </div>
        </div>

          <h5 className="proListTitle">Proposal Listings</h5>


            <div className="row listings">

              <div className="col-sm-3">
                <div className="panel panel-default">
                  <div className="panel-heading clearfix">
                    <h5 className="panel-title pull-left">D. K. Health System</h5>
                  </div>
                  <div className="list-group">
                    <div className="list-group-item">
                      <p className="list-group-item-text">Service:</p>
                      <h5 className="list-group-item-heading">Outpatient</h5>
                    </div>
                    <div className="list-group-item">
                      <p className="list-group-item-text">Duration:</p>
                      <h5 className="list-group-item-heading">6 Months</h5>
                    </div>
                    <div className="list-group-item">
                      <p className="list-group-item-text">Contact:</p>
                      <h5 className="list-group-item-heading">jane.morris@dkhs.com</h5>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-sm-3">
                <div className="panel panel-default">
                  <div className="panel-heading clearfix">
                    <h5 className="panel-title pull-left">Spain Health</h5>
                  </div>
                  <div className="list-group">
                    <div className="list-group-item">
                      <p className="list-group-item-text">Service:</p>
                      <h5 className="list-group-item-heading">Outpatient</h5>
                    </div>
                    <div className="list-group-item">
                      <p className="list-group-item-text">Duration:</p>
                      <h5 className="list-group-item-heading">6 Months</h5>
                    </div>
                    <div className="list-group-item">
                      <p className="list-group-item-text">Contact:</p>
                      <h5 className="list-group-item-heading">juro_quatro@hrsh.com</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="panel panel-default">
                  <div className="panel-heading clearfix">
                    <h5 className="panel-title pull-left">Health Systems Asia</h5>
                  </div>
                  <div className="list-group">
                    <div className="list-group-item">
                      <p className="list-group-item-text">Service:</p>
                      <h5 className="list-group-item-heading">Inpatient</h5>
                    </div>
                    <div className="list-group-item">
                      <p className="list-group-item-text">Duration:</p>
                      <h5 className="list-group-item-heading">1 Months</h5>
                    </div>
                    <div className="list-group-item">
                      <p className="list-group-item-text">Contact:</p>
                      <h5 className="list-group-item-heading">kara_hr@hsahr.com</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="panel panel-default">
                  <div className="panel-heading clearfix">
                    <h5 className="panel-title pull-left">UK Health Solutions</h5>
                  </div>
                  <div className="list-group">
                    <div className="list-group-item">
                      <p className="list-group-item-text">Service:</p>
                      <h5 className="list-group-item-heading">Inpatient</h5>
                    </div>
                    <div className="list-group-item">
                      <p className="list-group-item-text">Duration:</p>
                      <h5 className="list-group-item-heading">1 Months</h5>
                    </div>
                    <div className="list-group-item">
                      <p className="list-group-item-text">Contact:</p>
                      <h5 className="list-group-item-heading">liam_hode@ukh.com</h5>
                    </div>
                  </div>
                </div>
              </div>

            </div>


      <div className="section-one"><a name="vendor-search"></a></div>
      <div className="row secondChartRow">
            <div className="col-sm-8">
              <div id="chart2div" ></div>
            </div>

        <div className="col-sm-4">
          <div className="panel panel-default">
            <div className="panel-heading clearfix">
              <h5 className="panel-title pull-left">Vendor Search</h5>
              <div className="btn-group pull-right">
                <button className="btn btn-success">
                  <i className="fa fa-check"></i>
                    Submit
                </button>
                </div>
              </div>
              <div className="modal-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label className="col-xs-3 control-label">Name: </label>
                    <div className="col-xs-9">
                      <input type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-3 control-label">City: </label>
                    <div className="col-xs-9">
                      <input type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-3 control-label">Service: </label>
                    <div className="col-xs-9">
                      <select className="form-control">
                        <option>Inpatient</option>
                        <option>Outpatient</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

      </div>

                  
                  <div className="row">

                    <div className="col-sm-6">

                      <div className="panel panel-default panelTest">

                        <div className="col-xm-6">

                          <a className="btn btn-primary pull-right" href="#">Contact</a>

                            <h5 class="panel-title pull-left vendor-title">Viable Health Systems</h5>

                              <img src="../public/img/fakeLogo1.jpg" alt="logo" className="v-logo"/>

                        </div>
                          
                            <div className="col-xm-8">
                              <ul className="vendorInfo text-xm-left">
                                <li>Contact: </li>
                                <li>Country: </li>
                                <li>Services: </li>
                              </ul>
                                <i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i> <i className="fa fa-google-plus-square fa-3x" aria-hidden="true"></i> <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i> <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
                            </div>

                            
                          </div>
                        </div>
                      </div>
                    
      </div>
    )
  }
})
