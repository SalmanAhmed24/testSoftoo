import React from 'react';
import './exclusiveOfferComponent.scss'

const ExclusiveOfferComponent = () =>{
    return(
        <div className="usa-wrap">
                    <img src={require('../../assets/images/uk.svg')} alt="" className="usa-img"/>
                    <div className="usa-text-wrap">
                        <p className="usa-main-p">Internet exclusive offer</p>
                        <span className="usa-sub-p">Available to UK Resident Only</span>
                    </div>
        </div>
    )
}
export default ExclusiveOfferComponent;