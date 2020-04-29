import React from 'react';
import './statusPage.scss';
import ProgressBar from '../../components/progressBar/progressBar';
import Footer from '../../components/footer/footer'
const StatusPage = () =>{
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
                            <div className="status-card-header">
                                <h1 className="status-heading">THANK YOU FOR YOUR ORDER!</h1>
                            </div>
                                <div className="status-card-wrap">
                                    <div className="status-p-wrap">
                                        <p className="status-p1">Congratulations on taking this most important first step!</p> 
                                        <p className="status-p2">Your order will be delivered in the next<span className="status-span">7-10 business days.</span></p> 
                                        <p class="order-id">ORDER #: 12205,12206,12207</p>
                                    </div>
                                </div>
                                <div className="status-table">
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">S&H</th>
                                        <th scope="col">Qty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">
                                            <div className="table-prod-wrap">
                                                <img src={require('../../assets/images/bottle.png')} alt="" className="bottle-table"/>
                                                <span className="item-name">Sildera RX - 1 Bottle</span> 
                                            </div>
                                        </th>
                                        <td>£0</td>
                                        <td>£6.95</td>
                                        <td>£6.95</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">
                                            <div className="table-prod-wrap">
                                                <img src={require('../../assets/images/bottle.png')} alt="" className="bottle-table"/>
                                                <span className="item-name">Sildera RX - 1 Bottle</span> 
                                            </div>
                                        </th>
                                        <td>£0</td>
                                        <td>£6.95</td>
                                        <td>£6.95</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">
                                            <div className="table-prod-wrap">
                                                <img src={require('../../assets/images/bottle.png')} alt="" className="bottle-table"/>
                                                <span className="item-name">Sildera RX - 1 Bottle</span> 
                                            </div>
                                        </th>
                                        <td>£0</td>
                                        <td>£6.95</td>
                                        <td>£6.95</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    <div className="outer-wrap-grand">
                                    <div className="grand-total-wrap">
                                        <span className="grand-total">Grand Total</span>
                                        <span className="grand-price">£66.93</span>
                                    </div>
                                    </div>
                                    <div className="outer-wrap-address">
                                    <div className="address-wrap">
                                        <span className="ship-h">SHIPPING ADDRESS</span>
                                        <span className="ship-p">hasan abbas Edinburgh, ANS EH1 2HS 45/6 Grassmarket</span>
                                    </div>
                                    <div className="bil-wrap">
                                        <span className="bil-h">BILLING ADDRESS</span>
                                        <span className="bil-p">hasan abbas Edinburgh, ANS EH1 2HS 45/6 Grassmarket</span>
                                    </div>
                                    </div>
                                </div>

                        </div>
                        <p className="part-offer">Partner Offer, you have been enrolled in a free trial!</p> 
                    </div>
                    <div className="main-sub-wrap">
                    <div className="row sub-row-wrap">
                        <div className="col-sm-12 col-md-12 col-lg-5 mb-2 cus-card">
                            <div className="status-card-header">
                                <h1 className="status-heading">Newtech Digimarketing Ltd</h1>
                            </div>
                            <div className="main-p-wraper">
                            <p className="p-h1">mysocialscope<span className="p-h1-span"> £ 29.55 </span></p>
                            <p className="p1">Make a change today with mysocialscope!</p>
                            <p className="p-h2">Social score features:</p>
                            <p className="p-p1">
                            Your footprint overview. Your social media personality. Improve your footprint. Social guides Get your FREE 7 trial. Then pay just £29.55 each month afterwards. You can cancel the account at any given time
                            </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 cus-card">
                        <div className="status-card-header">
                                <h1 className="status-heading">Newtech Digimarketing Ltd</h1>
                            </div>
                            <div className="main-p-wraper">
                            <p className="p-h1">mysocialscope<span className="p-h1-span"> £ 29.55 </span></p>
                            <p className="p1">Make a change today with mysocialscope!</p>
                            <p className="p-h2">Social score features:</p>
                            <p className="p-p1">
                            Your footprint overview. Your social media personality. Improve your footprint. Social guides Get your FREE 7 trial. Then pay just £29.55 each month afterwards. You can cancel the account at any given time
                            </p>
                            </div>
                        </div>
                    </div>
            
                    </div>
                    </div>
            </div>
                <Footer />
    </div>
)
}
export default StatusPage;