import React from 'react';
import './homeForm.scss';

class HomeForm extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <div className="header">
                    <p>Where do we send your bottle?</p>
                </div>
                <form className="cus-form">
                    <input type="text" className="custom-input" placeholder="First Name"/>
                    <input type="text" className="custom-input" placeholder="Last Name" />
                    <input type="text" className="custom-input" placeholder="Your Address" />
                    <input type="text" className="custom-input" placeholder="Your City" />
                    <input type="text" className="custom-input" placeholder="United Kingdom" />
                    <input type="text" className="custom-input" placeholder="Select a Country" />
                    <input type="text" className="custom-input" placeholder="Postal Code" />
                    <input type="number" className="custom-input" placeholder="Phone Number" />
                    <input type="email" className="custom-input" placeholder="Email Address" />
                    <input type="submit" value="rush my order" className="btn-order"/>
                </form>
                <p className="form-footer-p">256 bit secure form</p>
            </div>
        )
    }
}
export default HomeForm;