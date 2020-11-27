import React,{useState} from 'react'
import Login from '../components/login/Login';
import Dashboard from '../components/dashboard/Dashboard'
import EditRecord from '../components/edit_modal/EditRecord'
import {Router,Route} from 'react-router-dom';
import history from '../components/history'

/**
 * container component handling the rendering of the components
 * handles routes
 */
const App = () => {
    const[isUserAuthenticated,setUserAutheticated]=useState(false)

    return(
        <Router history={history}>
        <div>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path='/policydetails/:policyid' exact component={EditRecord} />
        </div>
    </Router>
    )
    
}

export default App