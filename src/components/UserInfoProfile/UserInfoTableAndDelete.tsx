import React, {Component} from 'react';
import UserInfoUpdate from './UserInfoUpdate'

// export interface UserInfoData{
//     firstName: string,
//     lastName: string,
//     email: string,
//     phone: string,
//     address: string,
//     city: string,
//     state: string,
//     zipcode: number
// }

// type PropsItems ={

// }

class UserTableAndDelete extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {
            // firstName: '',
            // lastName: '',
            // email: '',
            // phone: '',
            // address: '',
            // city: '',
            // state: '',
            // zipcode: 0
        }
    }
    render(){
        return (
            <div>
                Hello from UserTableAndDelete
                <UserInfoUpdate />
            </div>    
        );
    }
}

export default UserTableAndDelete;