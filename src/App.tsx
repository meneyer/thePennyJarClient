import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.less';
import {Route, Switch} from "react-router-dom";
import Sitebar from "./components/Sitebar";
import HomePage from "./components/HomePage/HomePage";
import UserInfo from "./components/UserInfoProfile/UserInfo";
import Donation from "./components/FinancialDonation/Donation";
import Request from "./components/Request/Request"
import FooterSection from "./components/Footer"
import Auth from './components/Auth/Auth'

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
      <Sitebar />     
      {this.protectedViews()}   
      <Switch>
        {/* <Route exact path = '/' component={( => <HomePage title="Props Passed In" />)} /> */}
        <Route exact path = '/' component={HomePage} />
        <Route exact path="/needAPenny" component={Request} />
        <Route exact path="/profile" component={UserInfo} />
        <Route exact path="/giveAPenny" component={Donation} />
      </Switch>
      <FooterSection />     
    </div>
  );
}
}

export default App;
