import React from 'react';
import './App.scss';
import HomePage from './pages/homePage/homePage';
import HeaderTop from './components/headerTop/headerTop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Switch,Route} from 'react-router-dom';
import OrderPage from './pages/orderPage/orderPage';
import ShippingPage from './pages/shippingPage/shipping';
import StatusPage from './pages/statusPage/statusPage';

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/order" component={OrderPage} />
        <Route exact path="/shipping" component={ShippingPage} />
        <Route exact path="/status" component={StatusPage} />
      </Switch>
    </div>
  );
}

export default App;
