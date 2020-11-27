import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import history from '../../history'

/**
 * SearchResut component renders the search result data to the user
 * Renders the data fetched in tabular form
 */

class SearchResult extends Component {
    //event handler when the user click on the result row
    handleRowClick(params) {
        const policyToPass = this.props.policiesToShow.filter(policy => policy.policyId === params[0])[0]
        history.push(`/policydetails/${policyToPass.policyId}`)
    }
    render() {
        const columns = ["PolicyId", "PurchaseDate", "Fuel", "Vehicle Segment", "Premium", "Customer"];
        const data = this.props.policiesToShow.map((item) => { return [item.policyId, item.purchaseDate, item.fuel, item.vehicleSegment, item.premium, item.customer.customerId] })
        const options = { onRowClick: (params) => this.handleRowClick(params) }
        return (
            <MUIDataTable
               columns={columns}
               data={data}
               options = {options}/>
        )
    }
}

export default SearchResult

