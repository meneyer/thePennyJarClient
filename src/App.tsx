import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Sitebar from "./components/Sitebar";
import HomePage from "./components/HomePage/HomePage";
import UserInfo from "./components/UserInfoProfile/UserInfo";
import Donation from "./components/FinancialDonation/Donation";
import Request from "./components/Request/Request"
import Footer from "./components/Footer"

function App() {
  return (
    <div>    
      <Sitebar />     
      <Switch>
        {/* <Route exact path = '/' component={( => <HomePage title="Props Passed In" />)} /> */}
        <Route exact path = '/' component={HomePage} />
        <Route exact path="/needAPenny" component={Request} />
        {/* //loads at localhost3000:needAPenny, not on the / page */}
        <Route exact path="/profile" component={UserInfo} />
         {/* //loads at localhost3000:profile, not on the / page */}
        <Route exact path="/giveAPenny" component={Donation} />
         {/* //loads at localhost3000:giveAPenny, not on the / page */}
      </Switch>
      <Footer />     
    </div>
  );
}

export default App;
