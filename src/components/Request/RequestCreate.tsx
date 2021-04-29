import React, {Component} from 'react';
import APIURL from "../../helpers/environment";
import {Layout, Form, Input, Button, Row, Col, Select } from "antd"

const {Sider, Content} = Layout
const { TextArea } = Input;
const { Option } = Select;

const layout = {
    labelCol:{ span: 6},
    wrapperCol: {span: 16},
};

const tailLayout = {
    wrapperCol: { offset: 6, span: 4},
}

export interface RequestData{
    displayName: string,
    description: string, 
    item: string, 
    dateRequested: Date,
    dateNeeded: Date,
    giftRecipient: string,
    link: string,
    messageToDonor: string,
    requestFilled: boolean
}

type PropsItems ={
    SessionToken:string;
    fetchRequestInfo: () => void
}

class RequestCreate extends Component <PropsItems, RequestData> {
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
            requestFilled: false
        }
    }

    handleSubmit = () => {
      // let token = this.props.SessionToken ? this.props.SessionToken : localStorage.getItem('token');
        console.log(this.props.SessionToken, this.state)
        fetch(`${APIURL}/needapenny/`, {
            method: "POST",
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
                    // role: req.user.role 
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
            this.props.fetchRequestInfo();
        });
    };

    handleChangeRequested = (event: any) => {
        this.setState({
        dateRequested: event.target.value,    
        })
        console.log("requested date picked", event)
    } 

    handleChangeNeeded = (event: any) => {
        this.setState({
        dateNeeded: event.target.value,    
        })
        console.log("needed by date picked", event)
    }

    date = new Date()

    render(){
        return (
            <div className="boxbg">              
                <Layout>        
                <Content> 
                    <Row justify="start" >
                    <Col span={24} >  
                        <h1 id="formTitles">Need A Penny</h1>
                        
                        <Form {...layout} onFinish={this.handleSubmit}> 
                    
                        <h1 id="fieldWords">REQUIRED FIELDS</h1>
    
                        <Form.Item label="Display Name" name="displayName" rules={[{required: true, message: 'Please input a display name'}]}>
                            <Input onChange={(event) =>(this.setState({displayName: event.target.value}))} placeholder="Examples: John, Sally Smith, NeedChristmasPresents42, etc."/>
                        </Form.Item>

                        <Form.Item label="Reason" name="reason" rules={[{required: true, message: 'Why do you need a penny?'}]}>
                            <Input.TextArea rows={5}
                            placeholder="Examples: Lost my job due to COVID-19; Spouse laid off work due to an unexpected medical event; Unexpected housing expense, like needing to replace an appliance; etc." onChange={(event) =>(this.setState({description: event.target.value}))} />
                        </Form.Item>

                        <Form.Item label="Today's Date">
                            <Input type="date" 
                            defaultValue= {this.date.toISOString().slice(0,10)}       
                            onChange={this.handleChangeRequested}
                            />
                        </Form.Item>

                        <Form.Item label="Date Needed">
                            <Input type="date" 
                            onChange={this.handleChangeNeeded}
                            />
                        </Form.Item>

                        <Form.Item label="What do you need?" name="item" rules={[{required: true, message: 'Please input what you need'}]}>
                            <Input onChange={(event) =>(this.setState({item: event.target.value}))} placeholder="Max Request: $100.  Must be an e-gift card or an Amazon item -- Examples: $50 Grocery Gift Card, Teddy Bear for my daugher's birthday, etc."/>
                        </Form.Item>

                        <h1 id="fieldWords">OPTIONAL FIELDS</h1>
                        <Form.Item label="Who is this for?" name="giftRecipient" >
                            <Input onChange={(event) =>(this.setState({giftRecipient: event.target.value}))} placeholder="Examples: For my daughter, Alexis, on her 3rd birthday; for my father, Derrick; groceries for my family; etc."/>
                        </Form.Item>

                        <Form.Item label="Link to item" name="link" >
                            <Input onChange={(event) =>(this.setState({link: event.target.value}))} placeholder="Please input the Amazon link if requesting a specific item"/>
                        </Form.Item>

                        <Form.Item label="Message" name="messageToDonor">
                            <Input.TextArea rows={10}
                            placeholder="Please enter a message to the donor, if desired, 2000 character maximum" onChange={(event) =>(this.setState({messageToDonor: event.target.value}))} />
                        </Form.Item>

                        <hr/>

                        <h1 id="fieldWords">ADMINS WILL UPDATE WHEN FILLED</h1>
                        <Form.Item name="requestFilled" label="Request Filled?" >
                        <Select defaultValue="no"
                    //    onChange={(event) =>(this.setState({requestFilled: value}))}
                        >
                            {/* <Option value="true">Yes</Option> */}
                            <Option value="false">No</Option>
                        </Select>
                    </Form.Item>                   
                        
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                        {/* </Form.Item> */}
    
                        </Form>
                    </Col>
                    </Row>
                </Content>
                </Layout>
            </div>    
        );
    }
}

export default RequestCreate;