import React from 'react';
import Dashboard from './dashboard/index'
import {BrowserRouter,Route} from 'react-router-dom';
import AddForm from './AddForm';
import AllShifts from './AllShifts';
import Test from './Test';


const App = () => {
    return(
        
        <div className="">
        
        <BrowserRouter>
        <div>
        <Route path="/" exact component={Test} />
        <Route path="/add" exact component={AddForm} />
        <Route path="/shifts" exact component={AllShifts} />
        <Route path="/dashboard" exact component={Dashboard} />


        </div>

        </BrowserRouter> 
        </div>
        
    )
}

export default App;   