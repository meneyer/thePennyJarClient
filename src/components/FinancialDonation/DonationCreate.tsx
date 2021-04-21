import React, {Component} from 'react';
import APIURL from "../../helpers/environment";
import {Layout, Form, Input, Button, Radio, Row, Col, InputNumber } from "antd"

const {Sider, Content} = Layout
const { TextArea } = Input;

const layout = {
  labelCol:{ span: 7},
  wrapperCol: {span: 16},
};

const tailLayout = {
wrapperCol: { offset: 11, span: 16},
}

export interface DonationData{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string
}

type PropsItems ={
    SessionToken:string;
    // fetchDonationInfo = () => void
}

class DonationCreate extends Component <PropsItems, DonationData> {
    constructor(props: any){
        super(props);
        this.state = {
            choice: '',
            amount: 0,
            taxReceipt: false,
            messageToRecipient: ''
        }
    }

    handleChangeChoice = (event: any) => {
      this.setState({
      choice: event.target.value,    
      })
      console.log("choice picked", event)
    } 

    handleChangeAmount = (event: any) => {
      console.log("amount picked", event)
      this.setState({
      amount: event    
      })
    } 

  handleChangeTaxReceipt = (event: any) => {
      this.setState({
      taxReceipt: event.target.value,    
      })
      console.log("tax choice picked", event)
    }

    handleChangeMessage = (event: any) => {
      this.setState({
      messageToRecipient: event.target.value,    
      })
      console.log("message submitted", event)
    }

    handleSubmit = () => {
      console.log(this.props.SessionToken, this.state)
        fetch(`${APIURL}/giveapenny/`, {
          method: "POST",
          body: JSON.stringify({
            financialdonation:{ 
              choice:this.state.choice, 
              amount: this.state.amount, 
              taxReceipt: this.state.taxReceipt, 
              messageToRecipient: this.state.messageToRecipient
            }
          }),            
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.SessionToken,
          }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // this.props.fetchDonationInfo();
        });
    };
    render(){
      return (
      <div className="boxbg">
        <Layout>        
          <Content> 
            <Row justify="start" >
              <Col span={24} >  
                <h1>Give A Penny</h1>
                <Form {...layout} onFinish={this.handleSubmit}> 

                  <Form.Item label="What would you like to do?" name="choice" rules={[{required: true, message: 'Please input a password'}]}>
                  <Input 
                  // value={this.state.choice} 
                  onChange={(event) =>(this.setState({choice: event.target.value}))} 
                  // onChange={this.handleChangeChoice}
                  placeholder='Fill Request # ____; Give to the Operations Fund;  Give to the "Need A Penny" Fund'/>
                  </Form.Item>

                  <Form.Item label="Amount">
                    <Form.Item name="Amount" noStyle rules={[{required: true, message: 'Please input an amount'}]}>                     
                      <InputNumber 
                      onChange={this.handleChangeAmount} min={0}
                      // <Input
                      // value={this.state.amount} onChange={(e) =>(e.target.value)}
                      />                    
                    </Form.Item>
                  </Form.Item>

                  <Form.Item name="taxReceipt" label="Would you like a tax receipt?" >
                    <Radio.Group onChange={this.handleChangeTaxReceipt}>
                      <Radio.Button value="yes">Yes</Radio.Button>
                      <Radio.Button value="no">No</Radio.Button>
                    </Radio.Group>                
                  </Form.Item>

                  <Form.Item label="Message" name="messageToReceipient">
                    <TextArea rows={10}
                    placeholder="Please enter a message to the recipient, if desired, 2000 character maximum"
                    onChange={this.handleChangeMessage}
                    // value={this.state.messageToRecipient} onChange={(e) =>(e.target.value)} 
                    />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                  </Form.Item>

                </Form>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>    
    );
  }
}
export default DonationCreate;