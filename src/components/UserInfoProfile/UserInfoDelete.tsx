import React, {Component} from 'react';
import APIURL from "../../helpers/environment"
import {  Button  } from 'antd';

export interface UserInfoData{
}

type PropsItems ={
//     SessionToken:string
//     fetchDonationInfo: () => void,
//     donations: number
}

class UserInfoDelete extends Component <PropsItems, {}> {
    constructor(props: PropsItems){
        super(props);
        this.state = {}
    }

//     deleteDonation = () => {
//         fetch(`${APIURL}/giveapenny/delete/${this.props.donations}`, {
//             method: "DELETE",
//             headers: new Headers({
//                 "Content-Type": "application/json",
//                 Authorization: this.props.SessionToken,
//             }),
//         }).then(() => this.props.fetchDonationInfo());
//     // console.log(this.props.donations)
//     };
    
    render(){

        return (
            <div>  
                Hello from UserInfoDelete
                {/* <Button type="primary" 
                onClick={this.deleteDonation}
                >Delete</Button> */}
            </div>    
        );
    }
}
export default UserInfoDelete;