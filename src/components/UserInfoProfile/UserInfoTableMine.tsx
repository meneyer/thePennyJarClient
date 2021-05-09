import React, {Component} from 'react';
import UserInfoUpdate from './UserInfoUpdate'
import UserInfoDelete from './UserInfoDelete'
// import APIURL from "../../helpers/environment"
import { Layout, Card } from 'antd';
import Image2 from '../assets/thePennyJarLogo.png'


export interface UserInfoData{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zipcode: number,
    id: number
}

type PropsItems ={
    SessionToken:string
    fetchProfileInfo: () => void,
    logData: any,
}

class UserTableMine extends Component <PropsItems, UserInfoData> {
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
            zipcode: 0,
            id: 0
        }
    }

    updatedAddress = (event:any) => {
        this.setState({
            address: event.target.value
        })
    }

    render(){
        console.log(this.props.logData)
        console.log(this.props.logData.firstName)
        return (
            <div className="boxbg">
            <h1 id="formTitlesSilver">Profile</h1>
            <Layout >
                <Card hoverable id="userProfileCard"
                style={{ width: 300, borderRadius: "2%" }}
                cover={<img alt="example" src={Image2} />}>
                    <h1 style={{color: "#0D2149", fontWeight:"bold"}}>{this.props.logData.firstName}</h1>
                    <h1 style={{color: "#0D2149", fontWeight:"bold"}}>{this.props.logData.lastName}</h1>
                    <h4 style={{color: "#0D2149", fontWeight:"bold"}}>{this.props.logData.email}</h4>
                    <h4 style={{color: "#0D2149", fontWeight:"bold"}}>{this.props.logData.phone}</h4>
                    <h4 style={{color: "#0D2149", fontWeight:"bold"}}>{this.props.logData.address}</h4>
                    <h4 style={{color: "#0D2149", fontWeight:"bold"}}>{this.props.logData.city}</h4>
                    <h4 style={{color: "#0D2149", fontWeight:"bold"}}>{this.props.logData.state}</h4>
                    <h4 style={{color: "#0D2149", fontWeight:"bold"}}>{this.props.logData.zipcode}</h4>
                    <h1 style={{color: "#0D2149", fontWeight:"bold"}}><UserInfoUpdate 
                                SessionToken={this.props.SessionToken} 
                                profiles={this.props.logData} 
                                fetchProfileInfo={this.props.fetchProfileInfo}/>
                                </h1>
                            <h1 style={{color: "#0D2149", fontWeight:"bold"}}><UserInfoDelete 
                                SessionToken={this.props.SessionToken} 
                                profiles={this.props.logData.id} 
                                fetchProfileInfo={this.props.fetchProfileInfo}/>
                                </h1>
                </Card>
                </Layout>
        
        </div>      
        );
    }
}

export default UserTableMine;