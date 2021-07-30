import React, { useState,useEffect } from 'react';
import { useDispatch } from "react-redux";
import logo from "../images/hasten.png"
import {createData} from '../actions';



const AddForm = () => {
    const dispatch = useDispatch();
    const [iwo, setIwo] = useState("")
    const [client, setClient] = useState("")
    const [die, setDie] = useState("")
    const [inTime, setIn] = useState("")
    const [outTime, setOut] = useState("")
    const [size, setSize] = useState("")
    const [nos, setNos] = useState("")
    const [weight, setWeight] = useState("")
    const [speed, setSpeed] = useState("")
    const [outputWeight, setOutputWeight] = useState("")
    const [peiceWeight, setPeiceWeight] = useState("")
    const [scrap, setScrap] = useState("")
    const [recovery, setRecovery] = useState("")
    const [alloy, setAlloy] = useState("")
    const [remark, setRemarks] = useState("")


// useEffect(() => {
//     calScrapRecovery()

// }, [scrap,recovery])


const calScrapRecoveryPerPieceW = (inputW,outputW,nos) => {
    inputW = Number(inputW) || 0
    outputW = Number(outputW) || 0
    const scrap = ((inputW - outputW)/inputW)*100
    setScrap(scrap.toFixed())
    setRecovery((100-scrap).toFixed())
    setPeiceWeight((outputWeight/nos).toFixed())
}

useEffect(()=>{
    calScrapRecoveryPerPieceW(weight,outputWeight,nos)
},[weight,outputWeight,nos])

const onIwoChange = (e) => { 
    setIwo(e.target.value)
}
const onClientChange = (e) => { 
    setClient(e.target.value)
}
const onDieChange = (e) => { 
    setDie(e.target.value)
}
const onInChange = (e) => { 
    setIn(e.target.value)
}
const onOutChange = (e) => { 
    setOut(e.target.value)
}
const onSizeChange = (e) => { 
    setSize(e.target.value)
}
const onNosChange = (e) => { 
    setNos(e.target.value)
}
const ontWeightChange = (e) => { 
    setWeight(e.target.value)
    calScrapRecoveryPerPieceW(weight,outputWeight,nos)


}
const onSpeedChange = (e) => { 
    setSpeed(e.target.value)
}
const onAlloyChange = (e) => { 
    setAlloy(e.target.value)
}
const onRemarkChange = (e) => { 
    setRemarks(e.target.value)
}
const onOutputWeightChange = (e) => { 
    setOutputWeight(e.target.value)
    calScrapRecoveryPerPieceW(weight,outputWeight,nos)

}


const onSubmit = (e) => {
    e.preventDefault()
    const data = {
        iwo,client,die,inTime,outTime,size,nos,weight,speed,outputWeight,scrap,recovery,alloy,peiceWeight,remark
    }

    console.log(data);
    dispatch(createData(data));


    
}


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

                

                    

                    <div className="container-fluid mt-3">
                    <h4 class="page-title">Add Data</h4>

                        <div className="row">

                            <div className="col-12">

                            

                                <form onSubmit={onSubmit}>

                                <div class="card">
                                    <div class="card-body">

                                <h4 className="header-title">Client Details : </h4>

                                <div className="row">

                                    <div className="col-4">

                                    <div className="form-group mb-3">
                                        <input value={iwo} onChange={(e) => onIwoChange(e)} type="text" id="simpleinput" className="form-control" autocomplete="off" placeholder="IWO No." />
                                        </div>
                                    </div>
                                    


                                    <div className="col-4">

                                        <div className="form-group mb-3">
                                            <input value={client} onChange={(e) => onClientChange(e)} type="text" id="simpleinput" className="form-control" autocomplete="off" placeholder="Client" />
                                            </div>
                                        </div> 


                                    <div className="col-4">

                                    <div className="form-group mb-3">
                                        <input value={die} onChange={(e) => onDieChange(e)} type="text" id="simpleinput" className="form-control" autocomplete="off" placeholder="Die No."/>
                                        </div>
                                    </div> 

                                    </div>
                                    </div>
                                </div>




                            <div class="card">
                                <div class="card-body">

                            <h4 className="header-title">Time Details : </h4>

                                <div className="row">

                                    <div className="col-6">

                                    <div className="form-group mb-3">
                                        <input value={inTime} onChange={(e) => onInChange(e)} type="time" id="simpleinput" className="form-control" placeholder="In time" autocomplete="off" required/>
                                        </div>
                                    </div>
                                    


                                    <div className="col-6">

                                        <div className="form-group mb-3">
                                            <input value={outTime} onChange={(e) => onOutChange(e)} type="time" id="simpleinput" className="form-control" placeholder="Out time" autocomplete="off" required/>
                                            </div>
                                        </div> 


                                    </div>
                                </div>
                                </div>




                            <div class="card">
                                <div class="card-body">

                            <h4 className="header-title">Billed Details : </h4>

                                <div className="row">

                                    <div className="col-2">
                                        <div className="form-group mb-3">
                                            <input value={size} onChange={(e) => onSizeChange(e)} type="text" id="simpleinput" className="form-control" placeholder="Size" autocomplete="off" required/>
                                            </div>
                                        </div>

                                    <div className="col-2">
                                        <div className="form-group mb-3">
                                            <input value={nos} onChange={(e) => onNosChange(e)} type="text" id="simpleinput" className="form-control" placeholder="No.s" autocomplete="off" required/>
                                            </div>
                                        </div>

                                    <div className="col-2">
                                        <div className="form-group mb-3">
                                            <input value={weight} onChange={(e) => ontWeightChange(e)} type="number" id="simpleinput" className="form-control" placeholder="Weight" autocomplete="off" required/>
                                            </div>
                                        </div>

                                    <div className="col-2">
                                        <div className="form-group mb-3">
                                            <input value={speed} onChange={(e) => onSpeedChange(e)} type="text" id="simpleinput" className="form-control" placeholder="Production Speed" autocomplete="off" required/>
                                            </div>
                                        </div>

                                    <div className="col-2">
                                        <div className="form-group mb-3">
                                            <input value={outputWeight} onChange={(e) => onOutputWeightChange(e)} type="number" id="simpleinput" className="form-control" autocomplete="off" placeholder="Output Weight" autocomplete="off" required/>
                                            </div>
                                        </div>

                                    <div className="col-2">
                                        <div className="form-group mb-3">
                                            <input value={alloy} onChange={(e) => onAlloyChange(e)} type="text" id="simpleinput" className="form-control" placeholder="alloy" autocomplete="off" required/>
                                            </div>
                                        </div>

                                    <div className="col-2">
                                        <div className="form-group mb-3">
                                            <label>Scrap %</label>
                                            <input value={scrap} readonly="" type="text" id="simpleinput" className="form-control" placeholder="Scrap" autocomplete="off" required/>
                                            </div>
                                        </div>

                                    <div className="col-2">
                                        <div className="form-group mb-3">
                                            <label>Recovery %</label>
                                            <input value={recovery} readonly=""  type="text" id="simpleinput" className="form-control" placeholder="Recovery" autocomplete="off" required/>
                                            </div>
                                        </div>

                                    <div className="col-2">
                                        <div className="form-group mb-3">
                                            <label>Weight per piece (Kg)</label>
                                            <strong><input value={peiceWeight} readonly=""  type="text" id="simpleinput" className="form-control" placeholder="Weight per piece" autocomplete="off" required/></strong>
                        
                                            </div>
                                        </div>

                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label>Remarks</label>
                                            <input value={remark} onChange={(e) => onRemarkChange(e)} type="text" id="simpleinput" className="form-control" placeholder="Remarks" autocomplete="off" required/>
                                            </div>
                                        </div>

                                    
    
                                </div>
                                </div> 
                                </div>

                                

                                <button className="btn btn-primary" type="submit">Add Data</button>


                                </form>


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


export default AddForm;