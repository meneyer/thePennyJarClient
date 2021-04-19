import React, {Component} from 'react';
import './App.less';
import {Route, Switch} from "react-router-dom";
import Sitebar from "./components/Sitebar";
import HomePage from "./components/HomePage/HomePage";
import UserInfoInfo from "./components/UserInfoProfile/UserInfoInfo";
import DonationInfo from "./components/FinancialDonation/DonationInfo";
import RequestInfo from "./components/Request/RequestInfo"
import FooterSection from "./components/Footer"
import Auth from './components/Auth/Auth'
import Create from "./components/Auth/Create"
import Login from "./components/Auth/Login"

type Token ={
  SessionToken: string
}

class App extends Component<{}, Token> {
  constructor(props:any){
    super(props)
    this.state={
      SessionToken: '',
    }
  }
  
  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({
      SessionToken: newToken
    }) 
  }
  
  clearToken = () => {
    localStorage.clear();
    this.setState({
      SessionToken: ''
    })
  } 
  
  protectedViews = () => {
    return (this.state.SessionToken === localStorage.getItem('token') ? <HomePage token={this.state.SessionToken}/>
    :<Auth updateToken={this.updateToken}/>)
  }

  render(){
    return (
      <div>
        {/* <Sitebar clickLogout={this.clearToken} />   */}
        <Sitebar />    
        <Switch> 
          <Route exact path = '/' component={HomePage} />
        {this.protectedViews()}   
          <Route exact path="/needAPenny" component={RequestInfo} />
          <Route exact path="/profile" component={UserInfoInfo} />
          <Route exact path="/giveAPenny" component={DonationInfo} />
          <Route exact path="/signup" component={Create} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <FooterSection />     
      </div>
    );
  }
}

export default App;
