import React,{Component} from 'react';
import Header from './header/Header';
import Tabs from './Tabs'

/**
 * Dashboard component 
 * Acts as a container holding the two different views that the agent can see
 */

class Dashboard extends Component{
    render(){
        return(<div>
            <Header/>
            <Tabs/>
        </div>);
    }
}

export default Dashboard