import React from 'react';
import './homeIntro.scss';
import CommonHeading from '../commonHeading/commonHeading';
import ExclusiveOfferComponent from '../exclusiveOfferComponent/exclusiveOfferComponent';
import OrderButtonComponent from '../orderButtonComponent/orderButtonComponent';

const HomeIntro = ()=>{
    return(
        <div className="container-fluid pr-0 pl-0 cus-bg">
            <div className="container">
            <div className="intro-wrap">
                <CommonHeading />
                <p className="intro-main-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                </p>
                <div className="intro-row">
                    <div className="bottle-wrap">
                        <img className="bottle-img" src={require('../../assets/images/bottle.png')} alt="bottle" />
                    </div>
                    <div className="sub-para-wrap">
                        <p className="sub-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</p>
                        <p className="sub-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className="sized-up-wrap">
                        <img className="rock-img" src={require('../../assets/images/rock-intro.png')} alt="" />
                        <h1 className="sized-up-h">Get <span className="sizeup-span-h">sized up</span> Be her king Tonight</h1>
                        <div className="sizeup-btn-wrap">
                            <OrderButtonComponent />
                            <img className="gmp-img" src={require('../../assets/images/gmp.png')} alt="GMP" />
                        </div>
                    </div>
                </div>
                <div className="m-bottle-wrap">
                        <img className="m-bottle-img" src={require('../../assets/images/bottle.png')} alt="bottle" />
                        <div className="m-3-arrow-wrap">
                            <img className="m-3-arrow" src={require('../../assets/images/benefits.png')} alt="" />
                        </div>
                </div>
                <ExclusiveOfferComponent />
                <div className="m-sized-up-wrap">
                        <img className="m-rock-img" src={require('../../assets/images/rock-intro.png')} alt="" />
                        <h1 className="m-sized-up-h">Get <span className="m-sizeup-span-h">sized up</span> Be her king Tonight</h1>
                        <div className="m-sizeup-btn-wrap">
                            <OrderButtonComponent />
                            <img className="m-gmp-img" src={require('../../assets/images/gmp.png')} alt="GMP" />
                        </div>
                    </div>
            </div>
        </div>
    
        </div>
        )
}
export default HomeIntro;