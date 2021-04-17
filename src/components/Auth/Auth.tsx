import React, {Component} from 'react';
import Create from './Create'
import Login from './Login'
import Sitebar from '../Sitebar'

type PropsItems ={
    updateToken: (newToken: string) => void;
    // clearToken: (newToken: string) => void
}

class Auth extends Component <PropsItems, {} > {
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>            
                <Create updateToken={this.props.updateToken}/>    
                <Login updateToken={this.props.updateToken}/>  
                {/* <Sitebar clearToken={this.props.clearToken}/> */}
            </div>
        );
    }
}

export default Auth;