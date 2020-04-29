import React from 'react';
import './footer.scss';

const Footer = () =>{
    return(
        <div className="container-fluid">
            <div className="footer-wraper">
                <div className="footer-logo">
                    <img src={require('../../assets/images/slid-ban-logo.png')} alt="" className="footer-img"/>
                </div>
                <div className="footer-links">
                    <a href="/" className="link">Terms and Conditions |</a>
                    <a href="/" className="link">Privacy Policy |</a>
                    <a href="/" className="link"> Return Policy |</a>
                    <a href="/" className="link">Customer</a>
                </div>
                <div className="copyright">
                    <p className="copyright-p">Copyright 2020 © All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;