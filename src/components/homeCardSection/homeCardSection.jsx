import React from 'react';
import './homeCardSection.scss';
import CommonHeading from '../commonHeading/commonHeading';
import OrderButtonComponent from '../orderButtonComponent/orderButtonComponent';
import ExclusiveOfferComponent from '../exclusiveOfferComponent/exclusiveOfferComponent';

const HomeCardSection = () =>{
    return(
        <div className="container-fluid pr-0 pl-0 cus-card-bg">
            <div className="design-img-wrap">
                <img src={require('../../assets/images/design-1.png')} alt="i" className="design-img"/>
            </div>
            <div className="container">
                <div className="card-wrap">
                    <img src={require('../../assets/images/card-slid-logo.png')} alt="logo" className="card-logo"/>
                    <CommonHeading />
                </div>
                <div className="row cus-padding">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="home-cus-card">
                        <img src={require('../../assets/images/card1.png')} alt="i" className="img-card"/>
                        <h4 className="card-h">Lorem Ipsum</h4>
                        <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy</p>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="home-cus-card">
                        <img src={require('../../assets/images/card2.png')} alt="i" className="img-card"/>
                        <h4 className="card-h">Lorem Ipsum</h4>
                        <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy</p>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="home-cus-card">
                        <img src={require('../../assets/images/card4.png')} alt="i" className="img-card"/>
                        <h4 className="card-h">Lorem Ipsum</h4>
                        <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy</p>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="home-cus-card">
                        <img src={require('../../assets/images/card3.png')} alt="i" className="img-card"/>
                        <h4 className="card-h">Lorem Ipsum</h4>
                        <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy</p>
                    </div>
                    </div>
                </div>
                <div className="exclusive-wrap">
                    <OrderButtonComponent />
                    <ExclusiveOfferComponent />
                </div>
            </div>
            <img className="img-fluid design-up" src={require('../../assets/images/design-up.png')} alt="i" />
        </div>
    )
}
export default HomeCardSection;