import React, {Component} from 'react';
import APIURL from "../../helpers/environment"
// import DonationTableAndDelete from "./DonationTableAndDelete"
import {  Button, Popconfirm, message  } from 'antd';

export interface DonationData{
}

type PropsItems ={
    SessionToken:string
    fetchDonationInfo: () => void,
    donations: number
}

class DonationDelete extends Component <PropsItems, {}> {
    constructor(props: PropsItems){
        super(props);
        this.state = {}
    }

    text = "Are you sure you want to delete this donation?"

    confirm(){
        message.info("Clicked on Yes")
    }

    deleteDonation = () => {
        fetch(`${APIURL}/giveapenny/delete/${this.props.donations}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.SessionToken,
            }),
        }).then(() => this.props.fetchDonationInfo());
    // console.log(this.props.donations)
    };
    
    render(){

        return (
            <div>
                <Popconfirm placement="topLeft" title={this.text} onConfirm={this.deleteDonation} okText="Yes" cancelText="No">
                    <Button type="primary" >Delete</Button>
                </Popconfirm>
                            
                {/* <Button type="primary" 
                onClick={this.deleteDonation}
                >Delete</Button> */}
            </div>    
        );
    }
}
export default DonationDelete;