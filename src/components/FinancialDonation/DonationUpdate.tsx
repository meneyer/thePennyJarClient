import React, {Component, MouseEvent} from 'react';
import APIURL from "../../helpers/environment"
import {Modal, Button, InputNumber, Form, Input, Select } from "antd"

const { Option } = Select;

export interface DonationDataState{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string,
    isModalVisible:boolean
}

type PropsItems ={
    SessionToken:string
    fetchDonationInfo: () => void,
    donations: any,
}

class DonationUpdate extends Component <PropsItems, DonationDataState> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            choice: this.props.donations.choice,
            amount: this.props.donations.amount,
            taxReceipt: this.props.donations.taxReceipt,
            messageToRecipient: this.props.donations.messageToReceipient,
            isModalVisible: false,
        }
    }

    showModal = (e: MouseEvent) => {
        this.setState({
            isModalVisible: true
        });
    };
    
    handleOk = (e: MouseEvent)  => {
        this.setState({
        isModalVisible: false
        });
    };
    
    handleCancel = (e: MouseEvent)  => {
        this.setState({
        isModalVisible: false
        });
    };
    
    updateDonation = () => {            
        fetch(`${APIURL}/giveapenny/update/${this.props.donations.id}`, {
            method: "PUT",
            body: JSON.stringify({
                financialdonation:{ 
                    choice:this.state.choice, 
                    amount: this.state.amount, 
                    taxReceipt: this.state.taxReceipt, 
                    messageToRecipient: this.state.messageToRecipient
            },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.SessionToken,
            }),
            }).then((res) => {
                this.props.fetchDonationInfo()
            });
            }
    

    render(){
        // console.log(this.props.donations.taxReceipt)
        // console.log(this.props.donations.messageToRecipient)
        return (
            <div>
                <Button type="primary" onClick={this.showModal}> Update  </Button>
                <Modal title="Update Donation" visible={this.state.isModalVisible} onOk={this.updateDonation} onCancel={this.handleCancel}>
            
                <Form> 
                    <Form.Item label="What would you like to do?" name="choice" >
                        <Input defaultValue={this.props.donations.choice} value={this.props.donations.choice} onChange={(event) =>(this.setState({choice: event.target.value}))} />
                    </Form.Item>

                    <Form.Item label="Amount">
                    <Form.Item name="Amount" noStyle >                     
                        <InputNumber defaultValue={this.props.donations.amount} value={this.props.donations.amount} onChange={(event) =>(this.setState({amount: event}))} min={0} />                    
                    </Form.Item>
                    </Form.Item>

                    <Form.Item
                        name="taxReceipt"
                        label="Would you like a tax reciept?"                        
                    >
                        <Select defaultValue={this.props.donations.taxReceipt} value={this.props.donations.taxReceipt} onChange={(event) =>(this.setState({taxReceipt: event}))}>
                            <Option value="false">No</Option>
                            <Option value="true">Yes</Option>
                        </Select>
                    </Form.Item>                  

                    <Form.Item label="Message" name="messageToReceipient">
                    <Input.TextArea defaultValue={(this.props.donations.messageToRecipient)} value={this.props.donations.messageToReceipient} rows={10} 
                    onChange={(event) =>(this.setState({messageToRecipient: event.target.value}))} />
                    </Form.Item>                   
                    </Form>
                </Modal>
            </div>    
        );
    }
}
export default DonationUpdate;


