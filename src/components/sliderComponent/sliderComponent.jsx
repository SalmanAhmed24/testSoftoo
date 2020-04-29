import React from 'react';
import Slider from "react-slick";
import './sliderComponent.scss';

class SliderComponent extends React.Component {
    render(){
        var settings = {
            fade:true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return(
            <div className="container padding50">
                <div className="heading-wrap">
                    <h1 className="slider-heading">WHAT OTHERS ARE SAYING</h1>
                    <p className="slider-p">Sanseed Oil is all over the Internet and the results are Astonishing!</p>
                <div className="slider-wraper">
                    <Slider {...settings}>
                        <div className="slider-card">
                            <div className="slider-img-wrap">
                                <img src={require('../../assets/images/user.png')} alt="user" className="slider-img"/>
                            </div>
                            <h1 className="slider-name">Mikel James</h1>
                            <div className="para-wrap">
                                <p className="slider-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                        <div className="slider-card">
                            <div className="slider-img-wrap">
                                <img src={require('../../assets/images/card1.png')} alt="user" className="slider-img"/>
                            </div>
                            <h1 className="slider-name">Mikel James</h1>
                            <div className="para-wrap">
                                <p className="slider-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </Slider>
                </div>
                </div> 
            </div>
        )
    }
}
export default SliderComponent;