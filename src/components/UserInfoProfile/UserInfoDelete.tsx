import React, {Component} from 'react';
import APIURL from "../../helpers/environment"
import {  Button, Popconfirm, message  } from 'antd';

export interface UserInfoData{
}

type PropsItems ={
    SessionToken:string
    fetchProfileInfo: Function,
    profiles: number
}

class UserInfoDelete extends Component <PropsItems, {}> {
    constructor(props: PropsItems){
        super(props);
        this.state = {}
    }

    text = "Are you sure you want to delete your profile?"

    deleteProfile = () => {
        fetch(`${APIURL}/profile/delete/${this.props.profiles}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.SessionToken,
            }),
        }).then(() => this.props.fetchProfileInfo());
    };
    
    render(){

        return (
            <div>  
                <Popconfirm placement="topLeft" title={this.text} onConfirm={this.deleteProfile} okText="Yes" cancelText="No">
                    <Button type="primary" >Delete</Button>
                </Popconfirm>
            </div>    
        );
    }
}
export default UserInfoDelete;