import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Sitebar from "./components/Sitebar";
import HomePage from "./components/HomePage";
import UserInfo from "./components/UserInfo";
import Donation from "./components/Donation";
import Request from "./components/Request";

function App() {
  return (
    <div>    
      <Sitebar />     
      {/* <Switch> */}
        {/* <Route exact path = '/' component={( => <HomePage title="Props Passed In" />)} /> */}
        {/* <Route exact path="/profile" component={UserInfo} /> */}
        {/* <Route exact path="/giveAPenny" component={Donation} /> */}
        {/* <Route exact path="/needAPenny" component={Request} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
