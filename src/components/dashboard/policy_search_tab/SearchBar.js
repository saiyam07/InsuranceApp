import React from 'react'

/**
 * A reusable serach bar component
 * Deals with the searh term entered
 * @param {makeRequest} props 
 */
const SearchBar=(props)=>{
        return (<>
            <div className="ui big icon input">
                <input type="text" value={props.searchTerm} onChange={(event)=>props.setSearchTerm(event.target.value)} />
                <i className="circular search link icon" onClick={()=>props.makeRequest()}></i>
            </div>
        </>)
}

export default SearchBar