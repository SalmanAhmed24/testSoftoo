import React from 'react';
import './shipping.scss';
import ProgressBar from '../../components/progressBar/progressBar';
import Footer from '../../components/footer/footer'

class ShippingPage extends React.Component{
    render(){
        return(
        <div className="container-fluid pr-0 pl-0">
                <div className="logo">
                    <img src={require('../../assets/images/slid-ban-logo.png')} alt="" className="img-logo"/>
                </div>
                <div className="container-fluid pr-0 pl-0 bg-prog">
                    <ProgressBar />
                </div>
                <div className="container-fluid">
                <div className="container pt-5">
                    <div className="row main-row-wrap">
                        <div className="col-sm-12 col-md-12 col-lg-9 cus-card">
                            <div className="info-wrapper">
                                <h1 className="main-h">SPEICAL OFFER UNLOCKED: INSTANT SAVINGS FOR FIRST TIME CUSTOMERS</h1>
                                <h1 className="dis-h">WAIT! YOU QUALIFY FOR A LIMITED TIME DISCOUNT</h1>
                                <p className="dis-p">Many customers that purchased Sildera RX also purchased Sildera RX Muscle & Joint Pain Relief Cream</p>
                                <div className="prod-wrap">
                                    <div className="prod-img-wrap">
                                        <img src={require('../../assets/images/bottle.png')} alt="" className="pro"/>
                                        <p className="save-p">YOU SAVE $69.99</p>
                                        <p className="price-p">$49.95</p>
                                    </div>
                                    <div className="prod-info">
                                        <h1 className="prod-info-h">GET INSTANT PAIN RELIEF WITH</h1>
                                        <p className="para1">Sildera RX</p>
                                        <p className="para2">Click below to redeem your coupon and see even more rapid weight loss</p>
                                        <p className="para3">Get Your Exclusive Discounted Bottle Just Pay a One Time Fee of</p>
                                        <div className="card-btn-wrap">
                                            <a href="/" className="btn-not-comp">GET 70% OFF NOW!</a>
                                        </div>
                                    </div>
                                </div>
                                <p className="para-bottom mb-3 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </p>
                                    <p className="para-bottom">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <p className="not-comp">WAIT! YOUR ORDER IS NOT COMPLETE</p>
                <div className="btn-wrap-Comp">
                    <a href="/" className="btn-not-comp">Click Here to Complete Checkout</a>
                </div>
                <div className="no-thanks-wrap">
                    <a href="/" className="no-thanks">No thanks, I’m not interested in losing weight even quicker</a>
                </div>
                <div className="secure-wrap">
                    <img src={require('../../assets/images/sec.png')} alt="" className="sec"/>
                    <img src={require('../../assets/images/veri.png')} alt="" className="veri-img"/>
                </div>
                <Footer />
        </div>)
    }
}
export default ShippingPage;