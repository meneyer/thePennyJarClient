import React, {Component} from 'react';
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



class DonationTableAndDelete extends Component <PropsItems, DonationData> {
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

    // // donations = eventInfoUpdate
    // const deleteDonation = (donations) => {
        //     fetch(`${APIURL}/events/delete/${eventInfoUpdate.id}`, {
        //       method: "DELETE",
        //       headers: new Headers({
        //         "Content-Type": "application/json",
        //         Authorization: props.token,
        //       }),
        //     }).then(() => props.fetchEventInfo());
        //   };

    // componentDidMount() {
    //     this.donationMap();
    // };

    donationMap = () => {
    //     // donations = eventInfoUpdate
        return this.props.logData.map((donations:DonationData, index: number) => {
            return (
                <tr key={index}>
                    <th scope="row">{donations.id}</th>
                    <td>{donations.choice}</td>
                    <td>{donations.amount}</td>
                    {/* <td>{donations.taxReceipt}</td> */}
                    <td>{donations.messageToRecipient}</td>
                    <td>
                        <Button type="primary">Update</Button>
                        <Button type="primary">Delete</Button>
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

                <h2>Past Donations</h2>
                {/* <Table> */}
                    <table>

                    <thead>
                        <tr>
                            <th>Request Number</th>
                            <th>Choice</th>
                            <th>Amount</th>
                            {/* <th>TaxReceipt?</th> */}
                            <th>Message To Recipient</th>
                            <th>Update/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.donationMap()}
                    </tbody>
                    </table>
                {/* </Table> */}
                <DonationUpdate />
                    {/* </Content> */}
                </Layout>
            </div>    
        );
    }
}
export default DonationTableAndDelete;




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