import React, {Component} from 'react';
import {Layout } from 'antd';


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
    fetchRequestList: () => void,
    logData: [],
}

class RequestListTable extends Component <PropsItems, RequestData> {
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
        this.requestMapList();
    };

    requestMapList = () => {  
    return this.props.logData.map((requests:RequestData, index: number) => {
        return (
            <tr key={index}>
                <th scope="row">{requests.id}</th>
                <td>{requests.requestFilled === true ? "Yes" : "No"}</td>              
                <td>{requests.dateRequested}</td>
                <td>{requests.dateNeeded}</td>
                <td>{requests.displayName}</td>
                <td>{requests.description}</td>
                <td>{requests.item}</td>
                <td>{requests.giftRecipient}</td>
                <td>{requests.link}</td>
                <td>{requests.messageToDonor}</td>
            </tr>
        )
        })
    }

    render(){
        return (
            <div>
            <div className="boxbg">
                <Layout>
                <h1 id="formTitlesSilver" >All Need A Penny Requests</h1>  
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Request Number</th>
                                <th>Request Filled?</th>
                                <th>Date Requested</th>
                                <th>Date Needed</th>
                                <th>Display Name</th>
                                <th>Reason</th>
                                <th>Item</th>
                                <th>Gift Recipient</th>
                                <th>Link</th>
                                <th>Message To Donor</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.requestMapList()}
                        </tbody>
                    </table>
                </Layout>         
            </div>
            </div>    
        );
    }
}

export default RequestListTable;