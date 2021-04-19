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

// type PropsItems ={

// }

class UserInfo extends Component <{}, UserInfoData> {
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
                Hello from UserInfo
                <UserInfoCreate />
                <UserInfoTableAndDelete />
            </div>    
        );
    }
}

export default UserInfo;