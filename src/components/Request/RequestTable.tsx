import React, {Component} from 'react';
import RequestUpdate from './RequestUpdate'
import RequestDelete from './RequestDelete'
import APIURL from "../../helpers/environment"
import { Table, Button, Layout } from 'antd';
const {Content} = Layout


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
            dateRequested: new (Date),
            dateNeeded: new (Date),
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
                <td>{requests.requestFilled}</td>
                {/* <td>
                    <DonationUpdate SessionToken={this.props.SessionToken} donations={donations.id} fetchDonationInfo={this.props.fetchDonationInfo}/>
                </td>
                <td>
                    <DonationDelete SessionToken={this.props.SessionToken} donations={donations.id} fetchDonationInfo={this.props.fetchDonationInfo}/>
                </td> */}
            </tr>
        )
        })
    }

    render(){
        return (
            <div className="boxbg">
                <Layout>
                    
                <h2>Requests</h2>
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
                </Layout>
                <RequestDelete />
                <RequestUpdate />
            </div>    
        );
    }
}

export default RequestTable;