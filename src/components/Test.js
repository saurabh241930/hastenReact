import React, { useState,useEffect } from 'react'
import Chart from "react-apexcharts";
import logo from "../images/hasten.png"



var config = {
          
    series: [67],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -10
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    name: {
                      fontSize: '16px',
                      color: undefined,
                      offsetY: 120
                    },
                    value: {
                      offsetY: 76,
                      fontSize: '22px',
                      color: undefined,
                      formatter: function (val) {
                        return val + "%";
                      }
                    }
                  }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
              },
              stroke: {
                dashArray: 4
              },
              labels: ['Median Ratio'],
            },
          
          
          };
  




export default function Test() {
    return (
        <div>


    <div class="account-pages mt-5 mb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card">

                                
                                <div class="card-header pt-4 pb-4 text-center bg-secondary">
                                        <h3 style={{color:"white"}}>HASTEN EXTRUSION</h3>
                               
                                </div>

                                <div class="card-body p-4">
                                    
                                    <div class="text-center w-75 m-auto">
                                        <h4 class="text-dark-50 text-center mt-0 font-weight-bold">Sign In</h4>
                                        <p class="text-muted mb-4">Enter your email address and password to access admin panel.</p>
                                    </div>

                                    <form action="#">

                                        <div class="form-group">
                                            <label for="emailaddress">Email address</label>
                                            <input class="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email"/>
                                        </div>

                                        <div class="form-group">
                                            <a href="pages-recoverpw.html" class="text-muted float-right"><small>Forgot your password?</small></a>
                                            <label for="password">Password</label>
                                            <input class="form-control" type="password" required="" id="password" placeholder="Enter your password"/>
                                        </div>


                                        <div class="form-group mb-0 text-center">
                                            <a href="/dashboard" className="btn btn-secondary">Log In</a>
                                        </div>

                                    </form>
                                </div> 
                            </div>
                            


                            

                        </div> 
                    </div>
                    
                </div>
                
            </div>


                
            </div>
    )
}
