import React, {Component} from 'react';
import APIURL from "../../helpers/environment";
import {Layout, Form, Input, Button, Row, Col, InputNumber, Select } from "antd"
import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'

const {Content} = Layout;
const { Option } = Select;

const layout = {
  labelCol:{ span: 6},
  wrapperCol: {span: 16},
};

const tailLayout = {
wrapperCol: { offset: 6, span: 4},
}

export interface DonationData{
  choice: string,
  amount: number,
  taxReceipt: boolean,
  messageToRecipient: string,
  logData: []
}

type PropsItems ={
  SessionToken:string;
  // fetchDonationInfo: () => void
}

class DonationCreate extends Component <PropsItems, DonationData> {
  constructor(props: PropsItems){
      super(props);
      this.state = {
          choice: '',
          amount: 0,
          taxReceipt: false,
          messageToRecipient: '',
          logData: []
      }
      // console.log("donation create", this.props.SessionToken)
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
        // Authorization: token ? token : "",
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      this.fetchDonationInfo();
      alert("Donation Form Submitted Successfully")
    });
  };

  fetchDonationInfo = () => {
    fetch(`${APIURL}/giveapenny/mydonations`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
        Authorization: this.props.SessionToken,
        }),
    })
    .then((res) => res.json())
    .then((logData) => {
        console.log (logData);
        this.setState({
            logData: logData
        })
    });
}
  // onChange = () => {
  //   this.setState({
  //     taxReceipt: !this.state.taxReceipt
  //   })    
  // }

    handleChangeTaxReceipt = (event: any) => {
      this.setState({
      taxReceipt: event,    
      })
      console.log("tax choice picked", event)
    }

  render(){
    return (
      <div>
      <div className="boxbg">
          <Layout>
              <h1 id="formTitles">Give A Penny Donation Form</h1>
          </Layout>
      </div>
      <div className="boxbg">
        <Layout>        
          <Content> 
            <Row justify="start" >
              <Col span={24} >  

      {(localStorage.getItem('role') ==="donor" || localStorage.getItem('role') === "admin") ?
      
                <Form {...layout} onFinish={this.handleSubmit}> 
                <h1 id="fieldWords">REQUIRED FIELDS</h1>
                  <Form.Item label="What would you like to do?" name="choice" rules={[{required: true, message: 'Please input a password'}]}>
                    <Input onChange={(event) =>(this.setState({choice: event.target.value}))} placeholder='Fill Request # ____; Give to the Operations Fund;  Give to the "Need A Penny" Fund'/>
                  </Form.Item>

                  <Form.Item label="Amount">
                    <Form.Item name="Amount" noStyle rules={[{required: true, message: 'Please input an amount'}]}>                     
                      <InputNumber onChange={(event) =>(this.setState({amount: event}))} min={0} />                    
                    </Form.Item>
                  </Form.Item>
                  
                  <h1 id="fieldWords">OPTIONAL FIELDS</h1>

                  <Form.Item name="taxReceipt" label="Would you like a tax reciept?" >
                        <Select defaultValue="false"
                        onChange={this.handleChangeTaxReceipt}
                        >
                            <Option value="false">No</Option>
                            <Option value="true">Yes</Option>
                        </Select>
                    </Form.Item>   

                  <Form.Item label="Message" name="messageToReceipient">
                    <Input.TextArea rows={10}
                    placeholder="Please enter a message to the recipient, if desired, 2000 character maximum" onChange={(event) =>(this.setState({messageToRecipient: event.target.value}))} />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                  </Form.Item>

                </Form> : 
                <div className="boxbg">
                <Layout>
                    <Content>                                
                        <Row justify="space-around" align="middle">
                            <div>
                            <Col span={8}>  
                            <img id="pennyJarImage2" width={500}  src={Image1} alt=''></img> 
                            </Col>
                            </div>
                            <Col span={12}>  
                            <br />
                            <h1 className='title'>The Penny Jar</h1>
                                <hr />                   
                                <h1 className='title'>Please Log In</h1>                                   
                            </Col>
                        </Row>
                    </Content>
                </Layout>  
                </div>}
                
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>  
      </div>  
    );
  }
}
export default DonationCreate;

    // handleChangeChoice = (event: any) => {
    //   this.setState({
    //   choice: event.target.value,    
    //   })
    //   console.log("choice picked", event)
    // } 

    // handleChangeAmount = (event: any) => {
    //   console.log("amount picked", event)
    //   this.setState({
    //   amount: event    
    //   })
    // } 

  // handleChangeTaxReceipt = (event: any) => {
  //     this.setState({
  //     taxReceipt: event.target.value,    
  //     })
  //     console.log("tax choice picked", event)
  //   }

    // handleChangeMessage = (event: any) => {
    //   this.setState({
    //   messageToRecipient: event.target.value,    
    //   })
    //   console.log("message submitted", event)
    // }