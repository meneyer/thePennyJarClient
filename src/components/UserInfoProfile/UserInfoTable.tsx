import React, {Component} from 'react';
// import UserInfoUpdate from './UserInfoUpdate'
// import UserInfoDelete from './UserInfoDelete'
// import APIURL from "../../helpers/environment"
import { Layout } from 'antd';


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
    logData: [],
}

class UserTable extends Component <PropsItems, UserInfoData> {
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

    componentDidMount() {
        this.profileMap();
    };

    profileMap = () => {   
        return this.props.logData.map((profiles:UserInfoData, index: number) => {
            return (
                <tr key={index}>
                    <th scope="row">{profiles.id}</th>
                    <td>{profiles.firstName}</td>
                    <td>{profiles.lastName}</td>
                    <td>{profiles.email}</td>
                    <td>{profiles.phone}</td>
                    <td>{profiles.address}</td>
                    <td>{profiles.city}</td>
                    <td>{profiles.state}</td>
                    <td>{profiles.zipcode}</td>
                    {/* <td>
                        <UserInfoUpdate 
                        SessionToken={this.props.SessionToken} profiles={profiles} 
                        fetchProfileInfo={this.props.fetchProfileInfo}
                        />
                    </td>
                    <td>
                        <UserInfoDelete 
                        SessionToken={this.props.SessionToken} profiles={profiles.id} 
                        fetchProfileInfo={this.props.fetchProfileInfo}                        
                        />
                    </td> */}
                </tr>
            )
            })
        }

    render(){
        return (
            <div className="boxbg">
            <Layout>                  

            <h1 id="formTitlesSilver">Profile</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Profile ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Street Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            {/* <th>Update</th>
                            <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.profileMap()}
                    </tbody>
                </table>
            </Layout>
        </div>      
        );
    }
}

export default UserTable;