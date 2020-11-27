import React,{Component} from 'react'
import EditModal from './EditModal'
import {fetchPolicy} from '../../services/policyService'


class EditRecord extends Component{
    state={policy:[]}
    componentDidMount(){
        const policyData = async()=>{
            const policyData = await fetchPolicy(this.props.match.params.policyid)
            this.setState({policy:policyData})
    }
    policyData()
}
    
    render(){
        if(this.state.policy.length>0){
        return <EditModal title={'Policy Details'} content={this.state.policy}/>
        }
        return(
            <div>Loading..</div>
        )
    }

}

export default EditRecord