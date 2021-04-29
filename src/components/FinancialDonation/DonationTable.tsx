import React, {Component} from 'react';
import DonationDelete from './DonationDelete'
import DonationUpdate from './DonationUpdate'
import APIURL from "../../helpers/environment"
import { Table, Button, Layout } from 'antd';
const {Content} = Layout

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
            <div className="boxbg">
                <Layout>
                    {/* <Content> */}

                <h2>Donations</h2>
                {/* <Table> */}
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
        );
    }
}
export default DonationTable;




// const columns = [
    // {
    //   title: 'Donation Choice',
    //   dataIndex: 'choice',
    //   render: text => <a>{text}</a>,
    // },
    // {
    //   title: 'Amount',
    //   className: 'column-money',
    //   dataIndex: 'money',
    //   align: 'right',
//     },
//     {
//       title: 'Message to Recipient',
//       dataIndex: 'message',
//     },
//   ];
  
//   const data = [
//     {
//       key: '1',
//       name: 'John Brown',
//       money: '￥300,000.00',
//       address: 'New York No. 1 Lake Park',
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       money: '￥1,256,000.00',
//       address: 'London No. 1 Lake Park',
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       money: '￥120,000.00',
//       address: 'Sidney No. 1 Lake Park',
//     },
//   ];


  //render
//   <Table>
                // columns={columns}
                // dataSource={data}
                // bordered
                // title={() => 'Header'}
                // footer={() => 'Footer'}
                // </Table>