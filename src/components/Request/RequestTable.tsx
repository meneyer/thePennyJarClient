import React, {Component} from 'react';
import RequestUpdate from './RequestUpdate'
import RequestDelete from './RequestDelete'
// import APIURL from "../../helpers/environment"
import {Col, Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'


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
    id: number
}

type PropsItems ={
    SessionToken:string
    fetchRequestInfo: () => void,
    logData: [],
}

class RequestTable extends Component <PropsItems, RequestData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            displayName: '',
            description: '', 
            item: '', 
            dateRequested: new Date(),
            dateNeeded: new Date(),
            giftRecipient: '',
            link: '',
            messageToDonor: '',
            requestFilled: false,
            id: 0
        }
    }
    
    componentDidMount() {
        this.requestMap();
    };

    requestMap = () => {  
    return this.props.logData.map((requests:RequestData, index: number) => {
        return (
            <tr key={index}>
                <th scope="row">{requests.id}</th>
                <td>{requests.displayName}</td>
                <td>{requests.description}</td>
                <td>{requests.item}</td>
                <td>{requests.dateRequested}</td>
                <td>{requests.dateNeeded}</td>
                <td>{requests.giftRecipient}</td>
                <td>{requests.link}</td>
                <td>{requests.messageToDonor}</td>
                <td>{requests.requestFilled === true ? "Yes" : "No"}</td>
                <td>
                    <RequestUpdate SessionToken={this.props.SessionToken} requests={requests} fetchRequestInfo={this.props.fetchRequestInfo}/>
                </td>
                <td>
                    <RequestDelete SessionToken={this.props.SessionToken} requests={requests.id} fetchRequestInfo={this.props.fetchRequestInfo}/>
                </td>
            </tr>
        )
        })
    }

    render(){
        return (
            <div>

            <div className="boxbg">
            <Layout>
                {(localStorage.getItem('role') ==="recipient" || localStorage.getItem('role') === "admin") ?
                <div> <h1 id="formTitlesSilver">My Need A Penny Requests</h1>
                    <table>
                        
                        <thead>
                            <tr>
                                <th>Request Number</th>
                                <th>Display Name</th>
                                <th>Reason</th>
                                <th>Item</th>
                                <th>Date Requested</th>
                                <th>Date Needed</th>
                                <th>Gift Recipient</th>
                                <th>Link</th>
                                <th>Message To Donor</th>
                                <th>Request Filled?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.requestMap()}
                        </tbody>
                    </table> 
                    </div>:
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
                                    <h1 className='title'>Not Authorized</h1>                                   
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </div>
                }
                
                </Layout>         
                </div> 
            </div>               
        );
    }
}

export default RequestTable;