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
import DonationCreate from "./components/FinancialDonation/DonationCreate"
import DonationTableAndDelete from './components/FinancialDonation/DonationTable';
import RequestCreate from './components/Request/RequestCreate';
import UserInfoCreate from './components/UserInfoProfile/UserInfoCreate'
// import Create from "./components/Auth/Create"
// import Login from "./components/Auth/Login"


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

  componentDidMount() {
    let token = localStorage.getItem('token')
    if(token && token !=null){
      this.setState({
        SessionToken: token
      }) 
    };
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
        <Sitebar clearToken={this.clearToken} />    
          {/* {this.protectedViews()}    */}
        <Switch>
          <Route exact path='/signup' component={()=> <Auth updateToken={this.updateToken}/>} /> 
          <Route exact path = '/' component={HomePage} />

          <Route exact path="/needAPenny" component={()=><RequestInfo SessionToken={this.state.SessionToken}/>} />
          <Route exact path="/needAPenny/request" component={RequestCreate} />
          {/* <Route exact path="/needAPenny/requestlist" component={} />  */}
          {/* <Route exact path="/needAPenny/myrequests" component={} />  */}

          <Route exact path="/profile" component={()=><UserInfoInfo SessionToken={this.state.SessionToken}/>} />
          <Route exact path="/profile/myprofile" component={UserInfoCreate} />
          {/* <Route exact path="/giveAPenny/mydonations" component={} /> */}
          {/* <Route exact path="/needAPenny/myrequests" component={} /> */}

          <Route exact path="/giveAPenny" component={()=> <DonationInfo SessionToken={this.state.SessionToken}/>} />
          <Route exact path="/giveAPenny/donate" component={DonationCreate} />
          {/* <Route exact path="/giveAPenny/donationlist" component={DonationTableAndDelete} />  */}
          {/* <Route exact path="/giveAPenny/mydonations" component={DonationTableAndDelete} />  */}
        </Switch>
        <FooterSection />     
      </div>
    );
  }
}

export default App;
