import React, {Component} from 'react';
import APIURL from "../../helpers/environment";
import {Layout, Form, Input, Button, Row, Col, InputNumber } from "antd"
// import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'

const {Content} = Layout

const layout = {
    labelCol:{ span: 6},
    wrapperCol: {span: 16},
};

const tailLayout = {
    wrapperCol: { offset: 6, span: 4},
}

export interface UserInfoData{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zipcode: number
}

type PropsItems ={
    SessionToken:string;
    fetchProfileInfo: () => void
}

class UserCreate extends Component <PropsItems, UserInfoData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleSubmit = () => {
      console.log(this.props.SessionToken, this.state)
        fetch(`${APIURL}/profile/`, {
          method: "POST",
          body: JSON.stringify({
            userInfo:{ 
              firstName:this.state.firstName, 
              lastName:this.state.lastName, 
              email: this.state.email, 
              phone: this.state.phone, 
              address: this.state.address,
              city:this.state.city, 
              state: this.state.state, 
              zipcode: this.state.zipcode, 
              // role: req.user.role               
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
            this.props.fetchProfileInfo();
        });
    };

  render(){
    return (
      <div className="boxbg">
        <Layout>        
          <Content> 
            <Row justify="start" >
              <Col span={24} >  
                <h1 id="formTitles">User Profile</h1>
                <h2> To keep everything anonymous, this information will only be seen by admins. <br/> The information provided will be used to fill requests, send tax receipts, etc. <br /> <br /></h2>
                <Form {...layout} onFinish={this.handleSubmit}> 
                <h1 id="fieldWords">REQUIRED FIELDS</h1>
                  <Form.Item label="First Name" name="First Name" rules={[{required: true}]}>
                    <Input onChange={(event) =>(this.setState({firstName: event.target.value}))} />
                  </Form.Item>
                  <h1 id="fieldWords">OPTIONAL FIELDS</h1>
                  <Form.Item label="Last Name" name="Last Name">
                    <Input onChange={(event) =>(this.setState({lastName: event.target.value}))} />
                  </Form.Item>

                  <Form.Item name='E-mail' label="Email" rules={[{ type: 'email'}]}>
                    <Input onChange={(event) =>(this.setState({email: event.target.value}))} />
                  </Form.Item>

                  <Form.Item label="Phone Number" name="Phone Number">
                    <Input onChange={(event) =>(this.setState({phone: event.target.value}))} />
                  </Form.Item>

                  <Form.Item label="Street Address" name="Street Address">
                    <Input onChange={(event) =>(this.setState({address: event.target.value}))} />
                  </Form.Item>

                  <Form.Item label="City" name="City">
                    <Input onChange={(event) =>(this.setState({city: event.target.value}))} />
                  </Form.Item>

                  <Form.Item label="State" name="State">
                    <Input onChange={(event) =>(this.setState({state: event.target.value}))} />
                  </Form.Item>

                  <Form.Item label="Zip Code" name="Zip Code">
                    <InputNumber onChange={(event) =>(this.setState({zipcode: event}))} min={0} />
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

export default UserCreate;