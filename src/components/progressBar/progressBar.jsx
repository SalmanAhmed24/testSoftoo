import React from 'react';
import './progressBar.scss';

const ProgressBar = () =>{
    return(
        <div class="container">
        <div class="row">
            <div class="col">
            <ul id="progress-bar" class="progressbar">
                <li class="active">Shipping Address</li>
                <li>Finish Order</li>
                <li>Order Summary</li>
            </ul>
            </div>
        </div>
        </div>
    )
}
export default ProgressBar