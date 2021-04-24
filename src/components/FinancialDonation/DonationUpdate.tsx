import React, {Component, MouseEvent} from 'react';
import APIURL from "../../helpers/environment"
// import DonationTableAndDelete from "./DonationTableAndDelete"
import { Modal, Button  } from 'antd';

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
    donations: number
}

class DonationUpdate extends Component <PropsItems, DonationDataState> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            choice: '',
            amount: 0,
            taxReceipt: false,
            messageToRecipient: '',
            isModalVisible: false,
        }
    }

    // showModal = (isModalVisible: boolean) => {
    //     this.setState=({
    //         isModalVisible: true,
    //     });
    // };
    
    // handleOk = (e: MouseEvent)  => {
    //     this.setState=({
    //     isModalVisible: false
    //     });
    // };
    
    // handleCancel = (e: MouseEvent)  => {
    //     this.setState=({
    //     isModalVisible: false
    //     });
    // };
    

    updateDonation = () => {            
        fetch(`${APIURL}/giveapenny/update/${this.props.donations}`, {
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
        return (
            <div>
                {/* <Button type="primary" onClick={this.showModal}> Open Modal  </Button>
                <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p> */}
                        <Button type="primary" 
                        onClick={this.updateDonation}
                        >Update</Button>            
                {/* </Modal> */}
            </div>    
        );
    }
}
export default DonationUpdate;


