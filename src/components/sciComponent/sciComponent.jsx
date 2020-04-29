import React from 'react';
import './sciComponent.scss';
import OrderButtonComponent  from '../orderButtonComponent/orderButtonComponent'
const SciComponent = () =>{
    return(
        <div className="container-fluid pr-0 pl-0 cus-sci-bg">
            <img className="design-img" src={require('../../assets/images/design-sci.png')} alt="sci" />
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="left-panel">
                        <img className="left-logo" src={require('../../assets/images/sub-brand.png')} alt="logo" />
                        <h1 className="left-panel-h">The Science behind</h1>
                        <p className="left-panel-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="right-panel">
                    <img className="right-panel-img" src={require('../../assets/images/doc.png')} alt="item" />
                </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <OrderButtonComponent />
                </div>
            </div>
        </div>
        </div>
    )
}
export default SciComponent;