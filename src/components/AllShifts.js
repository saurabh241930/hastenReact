import React, { useState,useEffect } from 'react'
import { Sparklines } from 'react-sparklines';


const AllShifts = () => {




    return (
        <div className="wrapper">

            <div className="left-side-menu">

                <div className="slimscroll-menu">

                    <a href="index.html" className="logo text-center">
                        <span className="logo-lg">
                        <h4 className="mt-3">HASHTEN EXTRUSION</h4>
                            {/* <img src="assets/images/logo.png" alt="" height="16"> */}
                        </span>
                        <span className="logo-sm">
                            {/* <img src="assets/images/logo_sm.png" alt="" height="16"> */}
                        </span>
                    </a>

                    <ul className="metismenu side-nav">

                        {/* <li className="side-nav-title side-nav-item">Navigation</li> */}

                        <li className="side-nav-item">
                            <a href="/" className="side-nav-link">
                                <i className="dripicons-meter"></i>
                                <span> Dashboard </span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href="/add" className="side-nav-link">
                                <i className="dripicons-meter"></i>
                                <span> Add Data </span>
                            </a>
                        </li>
                    </ul>
                    <div className="clearfix"></div>

                </div>


            </div>


            <div className="content-page">
                <div className="content">

                    

                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                    


                                    <div className="table-responsive-lg">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Phone Number</th>
                                                        <th>Date of Birth</th>
                                                        <th>Active?</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Risa D. Pearson</td>
                                                        <td>336-508-2157</td>
                                                        <td>July 24, 1950</td>
                                                        <td>
                                                            
                                                            <div>
                                                            
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ann C. Thompson</td>
                                                        <td>646-473-2057</td>
                                                        <td>January 25, 1959</td>
                                                        <td>
                                                            
                                                            <div>
                                                                <input type="checkbox" id="switch7" checked data-switch="success"/>
                                                                <label for="switch7" data-on-label="Yes" data-off-label="No" className="mb-0 d-block"></label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Paul J. Friend</td>
                                                        <td>281-308-0793</td>
                                                        <td>September 1, 1939</td>
                                                        <td>
                                                            
                                                            <div>
                                                                <input type="checkbox" id="switch8" data-switch="success"/>
                                                                <label for="switch8" data-on-label="Yes" data-off-label="No" className="mb-0 d-block"></label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sean C. Nguyen</td>
                                                        <td>269-714-6825</td>
                                                        <td>February 5, 1994</td>
                                                        <td>
                                                            
                                                            <div>
                                                                <input type="checkbox" id="switch10" checked data-switch="success"/>
                                                                <label for="switch10" data-on-label="Yes" data-off-label="No" className="mb-0 d-block"></label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>


                                        


                            </div>
                        </div>
                    </div>
                </div>



                

                </div>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-right footer-links d-none d-md-block">
                                    <a href="">About</a>
                                    <a href="">Support</a>
                                    <a href="">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>



        </div>



    )
}


export default AllShifts;