import React from 'react';
import './usesComponent.scss';
import OrderButtonComponent from '../orderButtonComponent/orderButtonComponent'

const UsesComponent = ()=>{
    return(
        <div className="container-fluid pr-0 pl-0 cus-bg">
            <div className="uses-wrap">
                <img className="uses-img" src={require('../../assets/images/uses.png')} alt="uses" />
                <div className="order-btn-wrap">
                    <OrderButtonComponent />
                </div>
            </div>
        </div>
    )
}
export default UsesComponent;