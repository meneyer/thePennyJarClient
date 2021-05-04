import React, {Component} from 'react';
import APIURL from "../../helpers/environment"
import {Modal, Form, Input, Button, Select  } from "antd"


const { Option } = Select;

export interface RequestData{
    displayName: string,
    description: string, 
    item: string, 
    dateRequested: Date,
    dateNeeded: Date,
    giftRecipient: string,
    link: string,
    messageToDonor: string,
    requestFilled: boolean,
    isModalVisible:boolean
}

type PropsItems ={
    SessionToken:string
    fetchRequestInfo: () => void,
    requests: any,
}

class RequestUpdate extends Component <PropsItems, RequestData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            displayName: this.props.requests.displayName,
            description: this.props.requests.description, 
            item: this.props.requests.item, 
            dateRequested: this.props.requests.dateRequested,
            dateNeeded: this.props.requests.dateNeeded,
            giftRecipient: this.props.requests.giftRecipient,
            link: this.props.requests.link,
            messageToDonor: this.props.requests.messageToDonor,
            requestFilled: this.props.requests.requestFilled,
            isModalVisible: false,
        }
    }

    showModal = () => {
        this.setState({
            isModalVisible: true
        });
    };
    
    handleOk = ()  => {
        this.setState({
        isModalVisible: false
        });
    };
    
    handleCancel = ()  => {
        this.setState({
        isModalVisible: false
        });
    };

    updateRequest = () => {  
        fetch(`${APIURL}/needapenny/update/${this.props.requests.id}`, {
            method: "PUT",
            body: JSON.stringify({
                request:{ 
                    displayName:this.state.displayName, 
                    description: this.state.description, 
                    item: this.state.item, 
                    dateRequested: this.state.dateRequested,
                    dateNeeded:this.state.dateNeeded, 
                    giftRecipient: this.state.giftRecipient, 
                    link: this.state.link, 
                    messageToDonor: this.state.messageToDonor,
                    requestFilled: this.state.requestFilled,
            },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.SessionToken,
            }),
            }).then((res) => {
                this.props.fetchRequestInfo()
            });
    }

    handleChangeRequestFilled = (event: any) => {
        this.setState({
        requestFilled: event,    
        })
        console.log("requestFilled", event)
        }

    handleChangeNeeded = (event: any) => {
        this.setState({
        dateNeeded: event.target.value,    
        })
        console.log("needed by date picked", event)
    }

    // date = new Date()

    render(){
        // console.log(this.props.requests.item)
        return (
            <div>
                <Button type="primary" 
                onClick={this.showModal}
                > Update  </Button>
                <Modal title="Update Request" visible={this.state.isModalVisible} onOk={this.updateRequest} 
                onCancel={this.handleCancel}
                >

                <Form> 
                    <Form.Item label="Display Name" name="displayName" >
                        <Input defaultValue={this.props.requests.displayName} value={this.props.requests.displayName} onChange={(event) =>(this.setState({displayName: event.target.value}))}/>
                    </Form.Item>

                    <Form.Item label="Reason" name="reason">
                        <Input.TextArea defaultValue={(this.props.requests.description)} value={this.props.requests.description}
                        rows={5}
                        onChange={(event) =>(this.setState({description: event.target.value}))} />
                    </Form.Item>

                    <Form.Item label="Date Requested">
                        <Input type="date" 
                        defaultValue={(this.props.requests.dateRequested)} value={this.props.requests.dateRequested}     
                        // onChange={this.handleChangeRequested}
                        />
                    </Form.Item>

                    <Form.Item label="Date Needed">
                        <Input type="date" 
                        defaultValue={(this.props.requests.dateNeeded)} 
                        // value={this.props.requests.dateNeeded} 
                        onChange={this.handleChangeNeeded}
                        />
                    </Form.Item>

                    <Form.Item label="What do you need?" name="item" >
                        <Input defaultValue={(this.props.requests.item)} value={this.props.requests.item} onChange={(event) =>(this.setState({item: event.target.value}))} />
                    </Form.Item>
                    
                    <Form.Item label="Who is this for?" name="giftRecipient" >
                        <Input defaultValue={(this.props.requests.giftRecipient)} value={this.props.requests.giftRecipient} onChange={(event) =>(this.setState({giftRecipient: event.target.value}))} />
                    </Form.Item>

                    <Form.Item label="Link to item" name="link" >
                        <Input defaultValue={(this.props.requests.link)} value={this.props.requests.link} onChange={(event) =>(this.setState({link: event.target.value}))} />
                    </Form.Item>

                    <Form.Item label="Message" name="messageToDonor">
                        <Input.TextArea rows={10} defaultValue={(this.props.requests.messageToDonor)} value={this.props.requests.messageToDonor}
                        onChange={(event) =>(this.setState({messageToDonor: event.target.value}))} />
                    </Form.Item>
                    
                    {(localStorage.getItem('role')==="admin") ?
                    <Form.Item name="requestFilled" label="Request Filled?" >
                    <Select defaultValue={this.props.requests.requestFilled=== true ? "Yes" : "No"} value={this.props.requests.requestFilled === true ? "Yes" : "No"}  onChange={this.handleChangeRequestFilled} >
                        <Option value="true">Yes</Option>
                        <Option value="false">No</Option>
                    </Select>
                </Form.Item>  : ''}               
                    
                    </Form> : 

                    </Modal>
            </div>        
        );
    }
}

export default RequestUpdate;