import React from 'react';
import './preFooter.scss';
import OrderButtonComponent from '../orderButtonComponent/orderButtonComponent';

const PreFooterComponent = () =>{
    return(
        <div className="container-fluid pr-0 pl-0 cus-yello-bg">
            <div className="container">
                <div className="row desktop">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="img-wrapper">
                            <img className="img-footer" src={require('../../assets/images/rock-foot.png')} alt="i" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="content-wrap">
                            <img src={require('../../assets/images/yellow-logo.png')} alt="" className="logo-footer"/>
                            <img src={require('../../assets/images/satisfy.png')} alt="" className="statisfy-img"/>
                            <div className="content-para">
                                <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and</p>
                            </div>
                            <OrderButtonComponent />
                            <div className="logo-imgs">
                                <img src={require('../../assets/images/b-logo1.png')} alt="" className="brand-logo"/>
                                <img src={require('../../assets/images/b-logo2.png')} alt="" className="brand-logo"/>
                                <img src={require('../../assets/images/b-logo3.png')} alt="" className="brand-logo"/>
                            </div>
                            <div className="time-logo">
                                <img src={require('../../assets/images/time.png')} alt="" className="time-img"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="bootle-foot">
                            <img src={require('../../assets/images/bottle.png')} alt="" className="bottle"/>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <div className="m-content">
                        <img src={require('../../assets/images/yellow-logo.png')} alt="" className="m-logo-footer"/>
                    </div>
                    <div className="m-img-wrapper">
                        <img className="m-img-footer" src={require('../../assets/images/rock-foot.png')} alt="i" />
                    </div>
                    <div className="m-satisfy-wrap">
                        <img src={require('../../assets/images/satisfy.png')} alt="" className="statisfy-img"/>
                    </div>
                    <div className="content-para">
                        <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and</p>
                    </div>
                    <OrderButtonComponent />
                    <div className="m-bootle-foot">
                        <img src={require('../../assets/images/bottle.png')} alt="" className="m-bottle"/>
                    </div>
                    <div className="m-logo-imgs">
                        <img src={require('../../assets/images/b-logo1.png')} alt="" className="m-brand-logo"/>
                        <img src={require('../../assets/images/b-logo2.png')} alt="" className="m-brand-logo"/>
                        <img src={require('../../assets/images/b-logo3.png')} alt="" className="m-brand-logo"/>
                    </div>
                    <div className="m-time-logo">
                        <img src={require('../../assets/images/time.png')} alt="" className="m-time-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PreFooterComponent;