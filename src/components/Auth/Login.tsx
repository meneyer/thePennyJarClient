import React, {Component} from 'react';
import {Layout, Form, Input, Button, Radio, Row, Col} from "antd"
import APIURL from "../../helpers/environment"
import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'

const {Sider, Content} = Layout

const layout = {
    labelCol:{ span: 11},
    wrapperCol: {span: 16},
};

const tailLayout = {
    wrapperCol: { offset: 11, span: 16},
}

type SignInData = {
    username: string,
    password: string,
    role: string
}

type PropsItems ={
    updateToken: (newToken: string, userRole:string) => void
}

class Login extends Component <PropsItems, SignInData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            username: "",
            password: "",
            role: "",
        }
    }

    handleChangeUsername= (event:any) => {
        this.setState({
            username: event.target.value
        })
        console.log("handle change username", event)
    }

    handleChangePassword= (event:any) => {
        this.setState({
            password: event.target.value
        })
        console.log("handle change pw", event)
    }

    handleChangeRole= (event:any) => {
        this.setState({
            role: event.target.value
        })
        console.log("handle change role", event)
    }

    handleSubmit = () => {
        console.log("form submitted");
        fetch(`${APIURL}/user/login`, {
            method: "POST",
            body: JSON.stringify({ user: { username: this.state.username, password: this.state.password, role: this.state.role } }),
            headers: new Headers({
                "Content-Type": "application/json",
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken, data.user.role);
            console.log(data.user.role)
            if(data.sessionToken === undefined){
                console.log("Not a valid username/password combination") 
                alert("Not a valid username/password combination")       
            } else {
                console.log(data.sessionToken);
                console.log("User logged in");
                alert("User sucessfully logged in");
            }              
        })
    }

    render(){
        return (
            <div className="boxbg"> 
                <Layout>
                    <Sider width={350}>
                        <img id="pennyJarImage2" width={350}  src={Image1} alt=''></img>  
                    </Sider>
                    <Content>
                        <Row align="middle">              
                            <Col span={16} >              
                                <h1>Login</h1>
                                <Form {...layout} onFinish={this.handleSubmit}>
                                    <Form.Item label="Username" name="username" rules={[{required: true, message: 'Please input a username'}]}>
                                        <Input onChange={this.handleChangeUsername} style={{fontFamily: "'Montserrat', sans-serif" }}/>
                                    </Form.Item>

                                    <Form.Item label="Password" name="password" rules={[{required: true, message: 'Please input a password'}]}>
                                        <Input onChange={this.handleChangePassword} style={{fontFamily: "'Montserrat', sans-serif" }}/>
                                    </Form.Item>

                                    <Form.Item name="radio-group" label="What would you like to do?" rules={[{ required: true, message: 'Please pick an item' }]}>
                                        <Radio.Group onChange={this.handleChangeRole} buttonStyle="solid" >
                                            <Radio.Button value="recipient">Make A Request</Radio.Button>
                                            <Radio.Button value="donor">Fill A Request</Radio.Button>
                                            <Radio.Button value="admin">Admin</Radio.Button>
                                        </Radio.Group>                
                                    </Form.Item>

                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit">Login</Button>
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

export default Login;