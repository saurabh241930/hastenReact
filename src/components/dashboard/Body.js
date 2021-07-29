import React, { useState,useEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import logo from "../../images/hasten.png"
import svgFile from '../../images/file.svg'
import { Line, Chart } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import ReactApexChart from "react-apexcharts";



Chart.register(StreamingPlugin);


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
                      color: 'red',
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
              labels: ['Extrusion Pressure'],
            },
          
          
          };


    var config2 = {
    
    series: [69],
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
                labels: ['Over Baker'],
            },
            
            
            };




const lineData = {
    datasets: [
      {
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        lineTension: 0,
        borderDash: [8, 4],
        data: []
      }
    ]
  };
  
  const options = {
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            onRefresh: function () {
              data.datasets[0].data.push({
                x: Date.now(),
                y: Math.random() * 100
              });
            },
            delay: 2000
          }
        }
      ]
    }
  };



const data = [
    {
      month: '2015.01',
      a: 4000,
      b: 2400,
      c: 3400,
    },
    {
      month: '2015.02',
      a: 3000,
      b: 1398,
      c: 2210,
    },
    {
      month: '2015.03',
      a: 2000,
      b: 9800,
      c: 2290,
    },
    {
      month: '2015.04',
      a: 2780,
      b: 3908,
      c: 2000,
    },
    {
      month: '2015.05',
      a: 1890,
      b: 4800,
      c: 2181,
    },
    {
      month: '2015.06',
      a: 2390,
      b: 3800,
      c: 2500,
    },
    {
      month: '2015.07',
      a: 3490,
      b: 4300,
      c: 2100,
    },
  ];

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Body = (props) => {

    return (

        
        <div className="wrapper">


            <div className="left-side-menu" style={{backgroundColor:'#023f6d'}}>

                <div className="slimscroll-menu">

                    <a href="index.html" className="logo text-center mt-3">
                        <span className="logo-lg">
                        <img alt="" src={logo} height="110" /><br/>
                        </span>
                        <span className="logo-sm">
                            {/* <img src="assets/images/logo_sm.png" alt="" height="16"> */}
                        </span>
                    </a>

                    <ul className="metismenu side-nav mt-3">

                        {/* <li className="side-nav-title side-nav-item">Navigation</li> */}

                        <li className="side-nav-item">
                            <a href="/dashboard" className="side-nav-link">
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

                <div className="navbar-custom">
                        <ul className="list-unstyled topbar-right-menu float-right mb-0">

                            <li className="dropdown notification-list">
                                <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i className="dripicons-bell noti-icon"></i>
                                    <span className="noti-icon-badge"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">

                                    
                                    <div className="dropdown-item noti-title">
                                        <h5 className="m-0">
                                            <span className="float-right">
                                                <a href="javascript: void(0);" className="text-dark">
                                                    <small>Clear All</small>
                                                </a>
                                            </span>Notification
                                        </h5>
                                    </div>



                                    
                                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                                        View All
                                    </a>

                                </div>
                            </li>

                            <li className="dropdown notification-list">
                                <a className="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                                    aria-expanded="false">

                                    <span>
                                        <span className="account-user-name">Mahesh Sharma</span>
                                        <span className="account-position">Founder</span>
                                    </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown ">
                                    
                                    <div className=" dropdown-header noti-title">
                                        <h6 className="text-overflow m-0">Welcome !</h6>
                                    </div>

                                    
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-account-circle"></i>
                                        <span>My Account</span>
                                    </a>

                                    
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-account-settings-variant"></i>
                                        <span>Settings</span>
                                    </a>

                                    
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-lifebuoy"></i>
                                        <span>Support</span>
                                    </a>

                                    
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-lock-outline"></i>
                                        <span>Lock Screen</span>
                                    </a>

                                    
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="mdi mdi-logout"></i>
                                        <span>Logout</span>
                                    </a>

                                </div>
                            </li>

                        </ul>
                        <button className="button-menu-mobile open-left disable-btn">
                            <i className="mdi mdi-menu"></i>
                        </button>
                        <div className="app-search">
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search..."/>
                                    <span className="mdi mdi-magnify"></span>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="container-fluid mt-3">
                    <h4 className="page-title">Dashboard</h4>

                    <div className="row">
                            <div className="col-lg-5">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card widget-flat">
                                            <div className="card-body">
                                            <div id="chart">
                                                <ReactApexChart options={config.options} series={config.series} type="radialBar" />
                                            </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-lg-6">
                                        <div className="card widget-flat">
                                            <div className="card-body">
                                            <div id="chart">
                                                <ReactApexChart options={config2.options} series={config2.series} type="radialBar" />
                                            </div>
                                            </div> 
                                        </div> 
                                    </div>
                                    <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-body">

                                        <div className="table-responsive-sm">
                                                <table className="table table-centered mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Machine</th>
                                                            <th>Capacity</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Extrusion machine</td>
                                                            <td>77%</td>
                                                            <td><span className="badge badge-success">Running</span></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td>Extrusion machine</td>
                                                            <td>77%</td>
                                                            <td><span className="badge badge-success">Running</span></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td>Extrusion machine</td>
                                                            <td>77%</td>
                                                            <td><span className="badge badge-success">Running</span></td>
                                                        </tr>
                                                    </tbody>

                                                </table>
                                            </div>
                                            
                                        </div>

                                </div>

                        </div>
                                </div> 

                            </div> 

                            <div className="col-lg-7">

                            <div className="card" style={{height:"400"}}>
                                    <div className="card-body">

                                    <Line
                                        data={{
                                        datasets: [{
                                            label: 'Production',
                                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                            borderColor: 'rgb(255, 99, 132)',
                                            fill: true,
                                            data: []
                                        }]
                                        }}
                                        options={{
                                        scales: {
                                            x: {
                                            type: 'realtime',
                                            realtime: {
                                                delay: 2000,
                                                onRefresh: chart => {
                                                chart.data.datasets.forEach(dataset => {
                                                    dataset.data.push({
                                                    x: Date.now(),
                                                    y: Math.random()
                                                    });
                                                });
                                                }
                                            }
                                            }
                                        }
                                        }}
                                    />

                                    </div>
                                </div>
                            </div>

                            

                        </div>


                        <div className="row">

                        <div className="col-lg-12" style={{textAlign:"center"}}>
                                <div className="card">
                                    <div className="card-body">
                                        <img alt="" width="1250" src={svgFile} />
                                    </div>


                            </div>

                        </div>

                        
                        </div>

                        <div className="row">


                        <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="dropdown float-right">
                                            <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                
                                                <a href="" className="dropdown-item">Sales Report</a>
                                                
                                                <a href="" className="dropdown-item">Export Report</a>
                                                
                                                <a href="" className="dropdown-item">Profit</a>
                                                
                                                <a href="" className="dropdown-item">Action</a>
                                            </div>
                                        </div>
                                        <h4 className="header-title mb-3">Recovery vs Scrap</h4>

                                        <div style={{height: '263px'}} className="chartjs-chart">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart
                                            width={500}
                                            height={400}
                                            data={data}
                                            stackOffset="expand"
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                            >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis tickFormatter={toPercent} />
                                            <Tooltip content={renderTooltipContent} />
                                            <Area type="monotone" dataKey="a" stackId="1" stroke="#1aad10" fill="#1aad10" />
                                            {/* <Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
                                            <Area type="monotone" dataKey="c" stackId="1" stroke="#7d7d7d" fill="#7d7d7d" />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                        </div>
                                    </div> 
                                </div> 

                            </div>

                        </div>

                        <div className="row">

                                <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Small table</h4>
                                        <p className="text-muted font-14 mb-4">
                                            Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.
                                        </p>

                                        <div className="table-responsive-sm">
                                            <table className="table table-sm table-centered mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>IWO No.</th>
                                                        <th>Client</th>
                                                        <th>In</th>
                                                        <th>Out</th>
                                                        <th>Size</th>
                                                        <th>Nos</th>
                                                        <th>Input Weight</th>
                                                        <th>Output Weight</th>
                                                        <th>Pcs</th>
                                                        <th>Scrap</th>
                                                        <th>Recovery</th>
                                                        <th>Production Speed</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {props.shifts.map((shift, index) => (
                                                    <tr>
                                                    <td>{shift.iwo}</td>
                                                    <td>{shift.client}</td>
                                                    <td>{shift.inTime}</td>
                                                    <td>{shift.outTime}</td>
                                                    <td>{shift.size}</td>
                                                    <td>{shift.nos}</td>
                                                    <td>{shift.weight}</td>
                                                    <td>{shift.outputWeight}</td>
                                                    <td>43</td>
                                                    <td><span className="badge badge-danger">{shift.scrap}</span></td>
                                                    <td><span className="badge badge-success">{shift.recovery}</span></td>
                                                    <td>{shift.speed}</td>
                                                    </tr>

                                                    ))}

                                                    
                                                </tbody>
                                            </table>
                                        </div>

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


export default Body;