import React from 'react';
import './homeBanner.scss';
import HomeForm from '../homeForm/homeForm';
import OrderButtonComponent from '../orderButtonComponent/orderButtonComponent';

const HomeBanner = ()=>{
    return(
        <div className="banner-wrap">
            <div className="logo-wrap-head">
                <img className="logo" src={require('../../assets/images/slid-ban-logo.png')} alt="logo"/>
            </div>
            <div className="heading-wrap">
                <h1 className="main-head">
                Super
                    <span className="yellow-text">Charge</span>
                </h1>
                <p className="main-head-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="other-info-wrap">
                <div className="bottle-wrap">
                    <div className="img-wrap">
                    <img className="bottle-img" src={require('../../assets/images/bottle.png')} alt="bottle" />
                    </div>
                </div>
                <div className="brand-l-wrap">
                    <div className="logo-imgs">
                        <img src={require('../../assets/images/b-logo1.png')} alt="brands" className="brand-logos"/>
                        <img src={require('../../assets/images/b-logo2.png')} alt="brands" className="brand-logos"/>
                        <img src={require('../../assets/images/b-logo3.png')} alt="brands" className="brand-logos"/>
                    </div>
                    <div className="arrow-img-wrap">
                        <img src={require('../../assets/images/b-arrow-logo.png')} className="arrow-img" alt=""/>   
                    </div>
                    <div className="b-logo4-wrap">
                        <img src={require('../../assets/images/b-logo4.png')} className="b-logo4" alt=""/>   
                    </div>
                </div>
                <div className="form-wrap">
                    <HomeForm />
                    <div className="count-wrap">
                        <img className="count-logo" src={require('../../assets/images/s1-seals.png')} alt="country logo" />
                    </div>
                </div>
            </div>
            <div className="bg-m-banner">
                <div className="m-banner-wrap">
                <img src={require('../../assets/images/rock-header.png')} alt="" className="rock"/>
                    <div className="m-other-info">
                        <div className="img-bottle">
                            <img src={require('../../assets/images/bottle.png')} alt="bottle" className="bottle"/>
                        </div>
                        <div className="logo-wrap">
                            <div className="cert-logo">
                                <img src={require('../../assets/images/b-logo1.png')} alt="brands" className="m-brand-logos"/>
                                <img src={require('../../assets/images/b-logo2.png')} alt="brands" className="m-brand-logos"/>
                                <img src={require('../../assets/images/b-logo3.png')} alt="brands" className="m-brand-logos"/>
                            </div>
                            <div className="m-arrow-logo">
                                <img src={require('../../assets/images/b-arrow-logo.png')} className="m-arrow-img" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="m-btn-wraper">
                        <img src={require('../../assets/images/b-logo4.png')} className="m-b-logo4" alt=""/>
                        <div className="country-seals">
                            <img className="count-logo" src={require('../../assets/images/s1-seals.png')} alt="country logo" />
                        </div>
                            <OrderButtonComponent />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeBanner;