import axios from 'axios';

export const service = axios.create({
    baseURL:'http://localhost:8000/api/',
    headers:{
        Authorization: 'Token 018d1a636662cd7c19b9760f4918a317c8ef3791b83fb4f5e2e0c4cf190dbe3c'
    }
}
)

//fetch policy service using policyId
export const fetchPolicy = async (policyId)=>{
    const policy = await service.get('/get',{
        params:{policy:policyId}
    })
    return policy.data
}

//fetch service to get customer policies using customerID
export const fetchCustomerPolicies = async(customerId)=>{
    const customerPolices = await service.get('/policies', {
        params: { customer: customerId },
    })
    return customerPolices.data
}

//fetching the policy sales data
export const fetchPolicySalesData = async()=>{
    const policySalesData = await service.get('/policy/monthly/sales')
    return policySalesData.data
}

//fetching the policy sales data of a particular region
export const fetchPolicyRegionalSalesData = async(region)=>{
    const policySalesData = await service.get('/policy/sales',{
        params:{region}
    })
    return policySalesData.data
}

//update service for handling policy updates
export const updatePolicy = async(data)=>{
    const policyUpdated = await service.put(`/policy/update/${data.policyId}`,{
        premium:data.premium
    })
    return policyUpdated.data
}

