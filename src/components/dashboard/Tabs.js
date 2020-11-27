import React, { useState } from 'react';
import PolicySearch from './policy_search_tab/PolicySearchTab'
import SalesAnalysis from './sales_analysis_tab/SalesAnalysisTab'

/**
 * Tab Panel component deals with whci tab should be active
 * handles the user click
 */

const TabPanel = ()=>{
    const [firstTabActive,setFirstTabActive]=useState('active')
    const [secondTabActive,setSecondTabActive]=useState('')

    const setTabActive = (event)=>{
        if(event.target.id==='secondTab'){
            setSecondTabActive('active')
            setFirstTabActive('')
        }
        else{
            setFirstTabActive('active')
            setSecondTabActive('')
        }
    }
    return(<div>
        <div className="ui top attached tabular menu">
            <a id="firstTab" className={`item ${firstTabActive}`} data-tab="first" onClick={setTabActive}>Policy Search</a>
            <a id="secondTab" className={`item ${secondTabActive}`} data-tab="second" onClick={setTabActive}>Sales Analysis</a>
        </div>
        <div className={`ui bottom attached tab segment ${firstTabActive}`} data-tab="first">
            <PolicySearch />
        </div>
        <div className={`ui bottom attached tab segment ${secondTabActive}`} data-tab="second">
            <SalesAnalysis />
        </div>
    </div>
)
}


export default TabPanel