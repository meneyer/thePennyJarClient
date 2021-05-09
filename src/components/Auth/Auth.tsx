import React, {Component} from 'react';
import Create from './Create'
import Login from './Login'
import {Button} from "antd"

export interface Toggle{
    showLogin:boolean
}

type PropsItems ={
    updateToken: (newToken: string, userRole:string) => void;    
}

class Auth extends Component <PropsItems, Toggle> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            showLogin: true
        }
    }

    handleToggle = () => {
        this.setState({
            showLogin: !this.state.showLogin
        })
    }

    render(){
        return (
            <div className="boxbg">
                <Button type="primary" id="toggleButton" onClick={this.handleToggle} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>Switch between Login and Sign up</Button>   
                {this.state.showLogin === true ? <Login updateToken={this.props.updateToken}/> : <Create updateToken={this.props.updateToken}/> }              
            </div>
        );
    }
}

export default Auth;