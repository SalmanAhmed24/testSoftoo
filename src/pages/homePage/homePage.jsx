import React from 'react';
import './homePage.scss';
import HomeBanner from '../../components/homeBanner/homeBanner';
import HomeIntro from '../../components/homeIntro/homeIntro';
import HomeCardSection from '../../components/homeCardSection/homeCardSection';
import UsesComponent from '../../components/usesComponent/usesComponent'
import SciComponent from '../../components/sciComponent/sciComponent';
import SliderComponent from '../../components/sliderComponent/sliderComponent';
import PreFooterComponent from '../../components/preFooter/preFooter';
import Footer from '../../components/footer/footer'

class HomePage extends React.Component{
    render(){
        return(
            <div className="container-fluid pr-0 pl-0 main-wrapper">
                <div className="container">
                    <HomeBanner />
                </div>
                <div className="timer-wrap">
                    <p className="timer-p">There are only 6 free trials left for this product<span className="time">5:00</span></p>
                </div>
                <HomeIntro />
                <HomeCardSection />
                <UsesComponent />
                <SciComponent />
                <SliderComponent />
                <PreFooterComponent />
                <Footer />
            </div>
        )
    }
}
export default HomePage;