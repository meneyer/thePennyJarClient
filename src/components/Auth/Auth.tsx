import React, {Component} from 'react';
import Create from './Create'
import Login from './Login'
import Sitebar from '../Sitebar'
import {Button, Layout, Row} from "antd"
const {Sider, Content} = Layout

export interface Toggle{
    showLogin:boolean
}

type PropsItems ={
    updateToken: (newToken: string) => void;    
}

class Auth extends Component <PropsItems, Toggle> {
    constructor(props: any){
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
                {this.state.showLogin === true ? <Login updateToken={this.props.updateToken}/> : <Create updateToken={this.props.updateToken}/> }              
                <Button type="primary" id="toggleButton" onClick={this.handleToggle} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>Click to switch between Login and Sign up</Button>   
            </div>
        );
    }
}

export default Auth;