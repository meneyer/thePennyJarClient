import React, {Component} from 'react';
import UserInfoCreate from './UserInfoCreate';
import UserInfoTableAndDelete from './UserInfoTableAndDelete'


export interface UserInfoData{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zipcode: number
}

type PropsItems ={
    SessionToken:string
}

class UserInfo extends Component <PropsItems, UserInfoData> {
    constructor(props: any){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }
    render(){
        return (
            <div>
                <div>
                    {this.props.SessionToken === localStorage.getItem('token') ? 
                        <div> 
                            Hello from UserInfo
                            <UserInfoCreate />
                            <UserInfoTableAndDelete />
                        </div> : <h1>Please log in</h1>  }
                </div>
            </div>    
        );
    }
}

export default UserInfo;