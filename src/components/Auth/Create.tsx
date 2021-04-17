import React, {Component} from "react";
import {Form, Input, Button, Radio} from "antd"
import APIURL from "../../helpers/environment"

const layout = {
        labelCol:{ span: 8},
        wrapperCol: {span: 16},
    };
    
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16},
    }

type SignUpData = {
    username: string,
    password: string,
    role: string
}

type PropsItems ={
    updateToken: (newToken: string) => void
}

class Create extends Component <PropsItems, SignUpData>{
    constructor(props:any){
        super(props)
        this.state={
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

    handleSubmit = (event:any) => {
        console.log("form submitted");
        // event.preventDefault();
        fetch(`${APIURL}/user/create`, {
            method: "POST",
            body: JSON.stringify({ user: { username: this.state.username, password: this.state.password, role: this.state.role } }),
            headers: new Headers({
                "Content-Type": "application/json",
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
        })
    }

    render(){
        return(
            <div>                
                <Form {...layout} onFinish={this.handleSubmit}>
                    <Form.Item label="Username" name="username" rules={[{required: true, message: 'Please input a username'}]}>
                        <Input onChange={this.handleChangeUsername}/>
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={[{required: true, message: 'Please input a password'}]}>
                        <Input onChange={this.handleChangePassword} />
                    </Form.Item>

                    <Form.Item name="radio-group" label="Role" >
                        <Radio.Group onChange={this.handleChangeRole}>
                            <Radio value="user">User</Radio>
                            <Radio value="donor">Donor</Radio>
                            <Radio value="admin">Admin</Radio>
                        </Radio.Group>                
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button id="formButton" type="primary" htmlType="submit">Sign Up!</Button>
                    </Form.Item>
                </Form>
            </div> 
        )
}
}
export default Create;



// const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);



        
//         handleChange = (event:any) => {
//             event.preventDefault();
//             const {username, value} = event.target;
//             let errors = this.state.errors;
//             switch(username){
//                 case 'username' :
//                     errors.username = value.length < 5 ? 'Username must be 5 characters long': '';
//                 break;
//                 case 'password':
//                     errors.password = value.length < 8 ? 'Password must be 8 characters long': '';
//                 break;
//                 default:
//                 break;    
