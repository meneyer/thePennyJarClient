import React, {Component} from 'react';
import APIURL from "../../helpers/environment"
import {Modal, Layout, Form, Input, Button, Row, Col, Select  } from "antd"

const {Sider, Content} = Layout
const { TextArea } = Input;
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
            displayName: '',
            description: '', 
            item: '', 
            dateRequested: new (Date),
            dateNeeded: new (Date),
            giftRecipient: '',
            link: '',
            messageToDonor: '',
            requestFilled: false,
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

    updateRequest = () => {            
        fetch(`${APIURL}/giveapenny/update/${this.props.requests}`, {
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

    render(){
        return (
            <div>
                <Button type="primary" 
                // onClick={this.showModal}
                > Update  </Button>
                <Modal title="Update Request" visible={this.state.isModalVisible} onOk={this.updateRequest} 
                // onCancel={this.handleCancel}
                >
                <Form> 
                    <Form.Item label="Display Name" name="displayName" rules={[{required: true, message: 'Please input a display name'}]}>
                        <Input onChange={(event) =>(this.setState({displayName: event.target.value}))} placeholder="Examples: John, Sally Smith, NeedChristmasPresents42, etc."/>
                    </Form.Item>

                    <Form.Item label="Reason" name="reason" rules={[{required: true, message: 'Why do you need a penny?'}]}>
                        <Input.TextArea rows={5}
                        placeholder="Examples: Lost my job due to COVID-19; Spouse laid off work due to an unexpected medical event; Unexpected housing expense, like needing to replace an appliance; etc." onChange={(event) =>(this.setState({description: event.target.value}))} />
                    </Form.Item>

                    <Form.Item label="Today's Date">
                        <Input type="date" 
                        // defaultValue= {this.date.toISOString().slice(0,10)}       
                        // onChange={this.handleChangeRequested}
                        />
                    </Form.Item>

                    <Form.Item label="Date Needed">
                        <Input type="date" 
                        // onChange={this.handleChangeNeeded}
                        />
                    </Form.Item>

                    <Form.Item label="What do you need?" name="item" rules={[{required: true, message: 'Please input what you need'}]}>
                        <Input onChange={(event) =>(this.setState({item: event.target.value}))} />
                    </Form.Item>

                    <h1 id="fieldWords">OPTIONAL FIELDS</h1>
                    <Form.Item label="Who is this for?" name="giftRecipient" >
                        <Input onChange={(event) =>(this.setState({giftRecipient: event.target.value}))} />
                    </Form.Item>

                    <Form.Item label="Link to item" name="link" >
                        <Input onChange={(event) =>(this.setState({link: event.target.value}))} />
                    </Form.Item>

                    <Form.Item label="Message" name="messageToDonor">
                        <Input.TextArea rows={10}
                        onChange={(event) =>(this.setState({messageToDonor: event.target.value}))} />
                    </Form.Item>
                    
                    <Form.Item name="requestFilled" label="Request Filled?" >
                    <Select defaultValue="no"
                    // onChange={(event) =>(this.setState({requestFilled: value}))}
                    >
                        <Option value="true">Yes</Option>
                        <Option value="false">No</Option>
                    </Select>
                </Form.Item>                   
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                    {/* </Form.Item> */}

                    </Form>
                    </Modal>
            </div>        
        );
    }
}

export default RequestUpdate;


    
    // render(){
    //     return (
    //         <div>
    //             <Button type="primary" 
    //             onClick={this.updateRequest}
    //             >Update</Button>   

                {/* <Button type="primary" onClick={this.showModal}> Open Modal  </Button>
                <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>

                <Form 
                onFinish={this.handleSubmit}
                > 

                    <Form.Item label="What would you like to do?" name="choice" rules={[{required: true, message: 'Please input a password'}]}>
                        <Input onChange={(event) =>(this.setState({choice: event.target.value}))} placeholder='Fill Request # ____; Give to the Operations Fund;  Give to the "Need A Penny" Fund'/>
                    </Form.Item>

                    <Form.Item label="Amount">
                    <Form.Item name="Amount" noStyle rules={[{required: true, message: 'Please input an amount'}]}>                     
                        <InputNumber onChange={(event) =>(this.setState({amount: event}))} min={0} />                    
                    </Form.Item>
                    </Form.Item>

                    <Form.Item name="taxReceipt" label="Would you like a tax receipt?" >
                    <Radio.Group onChange={(event) =>(this.setState({taxReceipt: event.target.value}))}>
                        <Radio.Button value="yes">Yes</Radio.Button>
                        <Radio.Button value="no">No</Radio.Button>
                    </Radio.Group>                
                    </Form.Item>

                    <Form.Item label="Message" name="messageToReceipient">
                    <TextArea rows={10}
                    placeholder="Please enter a message to the recipient, if desired, 2000 character maximum" onChange={(event) =>(this.setState({messageToRecipient: event.target.value}))} />
                    </Form.Item>

                    <Form.Item >
                    <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>

                    </Form> */}
                {/* </Modal> */}
//             </div>    
//         );
//     }
// }
// export default RequestUpdate;




