import React from 'react';
import './headerTop.scss';

const HeaderTop = ()=>{
    return(
        <div className="header-wrap">
            <div className="headerText">
                <span className="warning-text">
                WARNING:
                </span>
                <span className="header-p">
                Due to extremely high media demand, there is limited supply of SildaraRX in stock as of
                </span>
                <span className="success-text">
                Wednesday, April 01, 2020
                </span>
            </div>
        </div>
    )
}
export default HeaderTop;