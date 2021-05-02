import React, {Component} from 'react';
import DonationDelete from './DonationDelete'
import DonationUpdate from './DonationUpdate'
// import APIURL from "../../helpers/environment"
import { Layout } from 'antd';

export interface DonationData{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string,
    id: number
}

type PropsItems ={
    SessionToken:string
    fetchDonationInfo: () => void,
    logData: [],
}

class DonationTable extends Component <PropsItems, DonationData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            choice: '',
            amount: 0,
            taxReceipt: false,
            messageToRecipient: '',
            id: 0,
        }
    }

    componentDidMount() {
        this.donationMap();
    };

    donationMap = () => {   
        return this.props.logData.map((donations:DonationData, index: number) => {
            return (
                <tr key={index}>
                    <th scope="row">{donations.id}</th>
                    <td>{donations.choice}</td>
                    <td>{donations.amount}</td>
                    <td>{donations.taxReceipt === true ? "Yes" : "No"}</td>
                    <td>{donations.messageToRecipient}</td>
                    <td>
                        <DonationUpdate SessionToken={this.props.SessionToken} donations={donations} fetchDonationInfo={this.props.fetchDonationInfo}/>
                    </td>
                    <td>
                        <DonationDelete SessionToken={this.props.SessionToken} donations={donations.id} fetchDonationInfo={this.props.fetchDonationInfo}/>
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
                <h1 id="formTitlesSilver">My Pennies Given</h1>
                </Layout>
            </div>
            <div className="boxbg">
                <Layout>                  

                
                    <table>
                        <thead>
                            <tr>
                                <th>Donation Number</th>
                                <th>Choice</th>
                                <th>Amount</th>
                                <th>TaxReceipt?</th>
                                <th>Message To Recipient</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.donationMap()}
                        </tbody>
                    </table>
                </Layout>
            </div>  
            </div> 
        );
    }
}
export default DonationTable;