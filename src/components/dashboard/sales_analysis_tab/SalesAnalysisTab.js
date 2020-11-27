import React, { useState, useEffect } from 'react';
import Chart from './Chart'
import { fetchPolicySalesData } from '../../../services/policyService'

/**
 * SalesAnalysisTab Component
 * Renders the chart reprsentation of the monthly policy sales and region wise sales
 */

const SalesAnalysisTab = () => {    
    const [monthlySalesData,setMonthlySalesData] = useState([])
    useEffect(() => {
        const callService = async () => {
            const data = await fetchPolicySalesData()
            setMonthlySalesData(data)
        }
        callService()
    }, [])
    return (
        <div>
        {monthlySalesData.length>0?<Chart dataForChart={monthlySalesData}/>:"Loading"}
        </div>
    )
}


export default SalesAnalysisTab