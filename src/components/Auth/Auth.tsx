import React, {Component} from 'react';
import Create from './Create'

type PropsItems ={
    updateToken: (newToken: string) => void
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
            </div>
        );
    }
}

export default Auth;