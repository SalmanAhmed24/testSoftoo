import React from 'react';
import './orderPage.scss';
import ProgressBar from '../../components/progressBar/progressBar';
import Footer from '../../components/footer/footer'

class OrderPage extends React.Component{
    render(){
        return(
            <div className="container-fluid pr-0 pl-0 cus-bg">
                <div className="logo">
                    <img src={require('../../assets/images/slid-ban-logo.png')} alt="" className="img-logo"/>
                </div>
                <div className="container-fluid pr-0 pl-0 bg-prog">
                    <ProgressBar />
                </div>
                <div className="container pt-5 pb-5">
                <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8 offer mb-3">
                        <div className="offer-wrap">
                                <div className="para-wrap">
                                    <p className="upper-para">SELECT YOUR PACKAGE TODAY & SAVE MORE!</p>
                                    <p className="down-para">
                                    Your Special 40% OFF Savings with FREE Shipping discount expires in
                                        <span className="watch-s">
                                            <img className="watch" src={require('../../assets/images/stop-watch.svg')} alt="watch"/>
                                        - 05:00</span>
                                        </p>
                                </div>
                                <div className="offer-card-wrap">
                                    <div className="offer-card">
                                        <div className="img-wrap">
                                            <img src={require('../../assets/images/bottle.png')} alt="" className="small-bottles"/>
                                            <img src={require('../../assets/images/bottle.png')} alt="" className="small-bottles"/>
                                            <span className="plus">+</span>
                                            <img src={require('../../assets/images/bottle.png')} alt="" className="small-bottles"/>
                                        </div>
                                        <div className="offer-info-wrap">
                                            <h1 className="first-head">Best Selling Package</h1>
                                            <p className="buy-p">Buy 5 Month Supply</p>
                                            <h1 className="price">£ 23.94<span className="each">each</span></h1>
                                            <span className="save">YOU SAVE: £150</span>
                                        </div>
                                        <div className="tick-wrap">
                                            <div className="circle">
                                                <span className="cir-content">
                                                    <img className="tick-white" src={require('../../assets/images/tick.svg')} alt="ok" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="offer-card mt-3 mb-3">
                                        <div className="img-wrap">
                                            <img src={require('../../assets/images/bottle.png')} alt="" className="small-bottles"/>
                                            <img src={require('../../assets/images/bottle.png')} alt="" className="small-bottles"/>
                                            <span className="plus-yellow">+</span>
                                            <img src={require('../../assets/images/bottle.png')} alt="" className="small-bottles"/>
                                        </div>
                                        <div className="offer-info-wrap">
                                            <h1 className="first-head">Best Selling Package</h1>
                                            <p className="buy-p">Buy 5 Month Supply</p>
                                            <h1 className="price">£ 23.94<span className="each">each</span></h1>
                                            <span className="save">YOU SAVE: £150</span>
                                        </div>
                                        <div className="tick-wrap">
                                            <div className="circle-silver">
                                                <span className="cir-content">
                                                    <img className="tick-silver" src={require('../../assets/images/tick.svg')} alt="ok" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="offer-card">
                                        <div className="img-wrap">
                                            <img src={require('../../assets/images/bottle.png')} alt="" className="small-bottles"/>
                                            <img src={require('../../assets/images/bottle.png')} alt="" className="small-bottles"/>
                                            <span className="plus-yellow">+</span>
                                            <img src={require('../../assets/images/bottle.png')} alt="" className="small-bottles"/>
                                        </div>
                                        <div className="offer-info-wrap">
                                            <h1 className="first-head">Best Selling Package</h1>
                                            <p className="buy-p">Buy 5 Month Supply</p>
                                            <h1 className="price">£ 23.94<span className="each">each</span></h1>
                                            <span className="save">YOU SAVE: £150</span>
                                        </div>
                                        <div className="tick-wrap">
                                            <div className="circle-silver">
                                                <span className="cir-content">
                                                    <img className="tick-silver" src={require('../../assets/images/tick.svg')} alt="ok" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>                    
                                </div>
                                <hr />
                                <div className="summary-wrap">
                                    <h1 className="summary-head">
                                        <span>
                                            <img src={require('../../assets/images/clip.png')} alt="" className="clip-img"/>
                                        </span>Order Summary</h1>
                                    <div className="summary-table-wrap">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th>
                                                <span className="prod-name">Sildera RX</span>
                                                <span className="prod-desc">BUY THE 5 MONTH SUPPLY</span>
                                            </th>
                                            <th>
                                                <span className="price-y">£119.70</span>
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td className="item">Shipping and Handling</td>
                                            <td className="item">£0.00</td>
                                            </tr>
                                            <tr>
                                            <td><span className="total">Total</span></td>
                                            <td><span className="total">£119.70</span></td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="order-footer">
                                    <img src={require('../../assets/images/fedex.png')} alt="" className="order-foot-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="o-wrapper">
                            <div className="header">
                            <p>Where do we send your bottle?</p>
                            </div>
                            <div className="visa-wrap">
                                <p className="pay-cred">Pay with Credit or Debit Card</p>
                                <img src={require('../../assets/images/visa.png')} alt="" className="visa"/>
                                <p className="we-accept">We Accept</p>
                            </div>
                            <form className="cus-form">
                                <input type="number" className="custom-input" placeholder="Card Type"/>
                                <input type="text" className="custom-input" placeholder="Credit Card" />
                                <input type="number" className="custom-input" placeholder="Exp Month" />
                                <input type="number" className="custom-input" placeholder="Exp Year" />
                                <div className="cvv-wraper">
                                    <input type="text" className="custom-input" placeholder="CVV" />
                                    <a href="/" className="whats">What is this?</a>
                                </div>
                                
                                <input type="submit" value="rush my order" className="btn-order"/>
                            </form>
                            <div className="lock-wrap">
                                <img src={require('../../assets/images/lock.png')} alt="" className="order-lock"/>
                            </div>
                            <div className="logo-wrap">
                                <img src={require('../../assets/images/hack.png')} alt="" className="logo-b"/>
                                <img src={require('../../assets/images/mac.png')} alt="" className="logo-b"/>
                            </div>
                            </div>
                            <div className="money-back-wrap">
                            <div className="gaurentee-wraper">
                                <img src={require('../../assets/images/gaurentee.png')} alt="" className="gaurentee-img"/>
                            </div>
                            <p className="gaurentee-p">Your purchase is insured by our 30 Day Money Back Guarantee, which ensures that if you are not completely satisfied with the results, we will refund your money, no questions asked, on unopened/unbroken safety seal.</p>
                            <div className="cert-wraper">
                                <img src={require('../../assets/images/cert-2.png')} alt="" className="cert-img"/>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                
                </div>
                <Footer />
            </div>
        )
    }
}
export default OrderPage;