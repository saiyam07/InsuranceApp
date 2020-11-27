import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResults'
import {fetchPolicy,fetchCustomerPolicies} from '../../../services/policyService'


/**
 * Policy Searh Tab component
 * It deals with the dealing of the policy search
 * It calls the External APIs to get the policy data
 * Shows the results of the policy search
 */

const PolicySearch = () => {
    const [open, setOpen] = useState(false)
    const [selectedSearchOption, setSearchOption] = useState('')
    const [searchTerm,setSearchTerm] = useState('')
    const [fetchedPolicies,setFetchedPolicies]=useState([])
    const [error,setError] = useState('')
    const avaliableSearchOptions = ['PolicyId', 'CustomerId'].map((option) => {
        return <div key={option} className="item" onClick={() => {setSearchOption(option);
        setFetchedPolicies([]);
        setSearchTerm('')}}> {option}</div>
    })

    const makeRequest=async()=>{
        let response = []
        if(selectedSearchOption==='PolicyId'){
             response = await fetchPolicy(searchTerm)  
        }
        else if(selectedSearchOption==='CustomerId'){
            response = await fetchCustomerPolicies(searchTerm)
        }
        if(response.length===0){
            setError('No Such record Found')
        }
        else{
            setError('')
            setFetchedPolicies(response)
        }
    }
    return (
        <div className="ui form">
            <div className="ui field">
                <label className="label"> {selectedSearchOption ? 'Search Policy By':''} </label>
                <div onClick={() => { setOpen(!open) }} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedSearchOption ? selectedSearchOption : 'Select Policy Search Option'}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{avaliableSearchOptions}</div>
                </div>
            </div>
            {selectedSearchOption?<SearchBar selectedSearchOption = {selectedSearchOption} makeRequest={makeRequest}
                                    searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>:''}
            {error!==''?<div className="ui negative message">
                         <i className="close icon" onClick={()=>{setError('')}}></i>
                         No such Record found
                         </div>:''}
            {fetchedPolicies.length>0?<SearchResult policiesToShow = {fetchedPolicies}/>:''}
        </div>
    )

}

export default PolicySearch