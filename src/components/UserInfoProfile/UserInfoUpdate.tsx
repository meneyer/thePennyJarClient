import React, {Component} from 'react';
import APIURL from "../../helpers/environment"
import {Modal, Form, Input, Button, InputNumber } from "antd"

export interface UserInfoData{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zipcode: number,
    isModalVisible:boolean
}

type PropsItems ={
    SessionToken:string
    fetchProfileInfo: () => void,
    profiles: any
}

class UserInfoUpdate extends Component <PropsItems, UserInfoData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            firstName: this.props.profiles.firstName,
            lastName: this.props.profiles.lastName,
            email: this.props.profiles.email,
            phone: this.props.profiles.phone,
            address: this.props.profiles.address,
            city: this.props.profiles.city,
            state: this.props.profiles.state,
            zipcode: this.props.profiles.zipcode,
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

        updateProfile = () => {            
        fetch(`${APIURL}/profile/update/${this.props.profiles.id}`, {
            method: "PUT",
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
            },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.SessionToken,
            }),
            }).then((res) => {
                this.props.fetchProfileInfo()
            });
    }

    // handleChangeFirstName = (event: any) => {
    //     this.setState({
    //     firstName: event.target.value,    
    //     })
    //     console.log("first name", event)
    // }

    render(){
        return (
            <div>
                <Button type="primary" onClick={this.showModal}> Update  </Button>
                <Modal title="Update Profile" visible={this.state.isModalVisible} onOk={this.updateProfile} onCancel={this.handleCancel}>

                <Form>                
                    <Form.Item label="First Name" name="First Name" >
                        <Input defaultValue={this.props.profiles.firstName} value={this.props.profiles.firstName}
                        onChange={(event) =>(this.setState({firstName: event.target.value}))} 
                        />
                    </Form.Item>
                    
                    <Form.Item label="Last Name" name="Last Name">
                        <Input defaultValue={this.props.profiles.lastName} value={this.props.profiles.lastName}
                        onChange={(event) =>(this.setState({lastName: event.target.value}))} 
                        />
                    </Form.Item>

                    <Form.Item name='E-mail' label="Email" rules={[{ type: 'email'}]}>
                        <Input defaultValue={this.props.profiles.email} value={this.props.profiles.email}
                        onChange={(event) =>(this.setState({email: event.target.value}))} 
                        />
                    </Form.Item>

                    <Form.Item label="Phone Number" name="Phone Number">
                        <Input defaultValue={this.props.profiles.phone} value={this.props.profiles.phone}
                        onChange={(event) =>(this.setState({phone: event.target.value}))} 
                        />
                    </Form.Item>

                    <Form.Item label="Street Address" name="Street Address">
                        <Input defaultValue={this.props.profiles.address} value={this.props.profiles.address}
                        onChange={(event) =>(this.setState({address: event.target.value}))} 
                        />
                    </Form.Item>

                    <Form.Item label="City" name="City">
                        <Input defaultValue={this.props.profiles.city} value={this.props.profiles.city}
                        onChange={(event) =>(this.setState({city: event.target.value}))} 
                        />
                    </Form.Item>

                    <Form.Item label="State" name="State">
                        <Input defaultValue={this.props.profiles.state} value={this.props.profiles.state}
                        onChange={(event) =>(this.setState({state: event.target.value}))} 
                        />
                    </Form.Item>

                    <Form.Item label="Zip Code" name="Zip Code">
                        <InputNumber defaultValue={this.props.profiles.zipcode} value={this.props.profiles.zipcode}
                        onChange={(event) =>(this.setState({zipcode: event}))} min={0} 
                        />
                    </Form.Item>  

                    </Form>
                </Modal>
            </div>    
        );
    }
}

export default UserInfoUpdate;