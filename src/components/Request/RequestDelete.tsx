import React, {Component} from 'react';
import APIURL from "../../helpers/environment"
import {  Button, Popconfirm, message   } from 'antd';

export interface RequestData{
}

type PropsItems ={
    SessionToken:string
    fetchRequestInfo: () => void,
    requests: number
}

class RequestDelete extends Component <PropsItems, {}> {
    constructor(props: PropsItems){
        super(props);
        this.state = {}
    }

    text = "Are you sure you want to delete this request?"

    confirm(){
        message.info("Clicked on Yes")
    }

    deleteRequest = () => {
        fetch(`${APIURL}/needapenny/delete/${this.props.requests}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.SessionToken,
            }),
        }).then(() => this.props.fetchRequestInfo());  
    };
    
    render(){

        return (
            <div>  
                <Popconfirm placement="topLeft" title={this.text} onConfirm={this.deleteRequest} okText="Yes" cancelText="No">
                    <Button type="primary" >Delete</Button>
                </Popconfirm>
                
                {/* <Button type="primary" 
                onClick={this.deleteDonation}
                >Delete</Button> */}
            </div>    
        );
    }
}
export default RequestDelete;