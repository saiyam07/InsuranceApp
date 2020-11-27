import React from 'react'
import { useForm } from 'react-hook-form'
import { updatePolicy } from '../../services/policyService'
import history from '../history'

export default function PolicyForm(props) {
    const defaultFormData = props.formData[0]
    const isApplicable = (bitValue) => {
        if (bitValue === 0) {
            return 'No'
        }
        else {
            return 'Yes'
        }
    }
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            policyId: defaultFormData.policyId,
            purchaseDate: defaultFormData.purchaseDate,
            fuel: defaultFormData.fuel,
            vehicleSegment: defaultFormData.vehicleSegment,
            premium: defaultFormData.premium,
            bodilyInjuryLiabilty: isApplicable(defaultFormData.bodilyInjuryLiabilty),
            personalInjuryProtection: isApplicable(defaultFormData.personalInjuryProtection),
            propertyDamageLiability: isApplicable(defaultFormData.propertyDamageLiability),
            collision: isApplicable(defaultFormData.collision),
            comprehensive: isApplicable(defaultFormData.comprehensive),
            customer: defaultFormData.customer.customerId,
            gender: defaultFormData.customer.gender,
            incomeGroup: defaultFormData.customer.incomeGroup,
            region: defaultFormData.customer.region,
            marital_status: isApplicable(defaultFormData.customer.marital_status)
        }
    });
    const onCancel = () => history.push('/dashboard')
    const onFormSubmit = async (data) => { await updatePolicy(data) }
    return (
        <form className="ui form" onSubmit={handleSubmit(onFormSubmit)}>
            <h4 className="ui dividing header">Policy Details</h4>
            <div className="two fields">
                <div className="field">
                    <label>Policy Id</label>
                    <input readOnly type="text" name="policyId" ref={register} />
                </div>
                <div className="field">
                    <label>Purchase Date</label>
                    <input readOnly type="date" name="purchaseDate" ref={register}/>
                </div>
            </div>
            <div className="two fields">
                <div className="field">
                    <label>Fuel Type</label>
                    <input readOnly type="text" name="fuel" ref={register} />
                </div>
                <div className="field">
                    <label>Vehicle Segment</label>
                    <input readOnly type="text" name="vehicleSegment" ref={register}/>
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <label>Premium</label>
                    <input type="number" className="ui input" name="premium" ref={register({max:1000000})} />
                    {errors.premium && <p className="ui mini negative message"> Premium cannot be greater than 1 million</p>}
                </div>
                <div className="field">
                    <label>Bodily Injury Liability</label>
                    <input readOnly type="text" name="bodilyInjuryLiabilty" ref={register} />
                </div>
            </div>
            <div className="two fields">
            <div className="field">
                    <label>Personal Injury Protection</label>
                    <input readOnly type="text" name="personalInjuryProtection" ref={register}/>
                </div>
                <div className="field">
                    <label>Property Damage Liability</label>
                    <input readOnly type="text" name="propertyDamageLiability" ref={register} />
                </div>
            </div>
            <div className="two fields">
            <div className="field">
                    <label>Collision</label>
                    <input readOnly type="text" name="collision" ref={register}/>
                </div>
                <div className="field">
                    <label>Comprehensive</label>
                    <input readOnly type="text" name="comprehensive" ref={register} />
                </div>
                </div>
                <h4 className="ui dividing header">Customer Details</h4>
                <div readOnly className="two fields">
            <div className="field">
                    <label>Customer Id</label>
                    <input readOnly type="text" name="customer" ref={register}/>
                </div>
                <div className="field">
                    <label>Gender</label>
                    <input readOnly type="text" name="gender" ref={register} />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <label>Income Group</label>
                    <input readOnly type="text" name="incomeGroup" ref={register}/>
                </div>
                <div className="field">
                    <label>Region</label>
                    <input readOnly type="text" name="region" ref={register} />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <label>Marital Status</label>
                    <input readOnly type="text" name="marital_status" ref={register}/>
                </div>
                </div>
                <div className="two fields">
                <input type="submit" value="Update Premium" className="ui primary button" tabIndex="0"/>
                <div className="ui button" tabIndex="0" onClick={()=>{onCancel()}}>Cancel</div>
                </div>
        </form>
    );
}
