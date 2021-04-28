import React, {Component} from 'react';
import UserInfoUpdate from './UserInfoUpdate'
import UserInfoDelete from './UserInfoDelete'
import APIURL from "../../helpers/environment"
import { Table, Button, Layout } from 'antd';
const {Content} = Layout

export interface UserInfoData{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zipcode: number
}

type PropsItems ={
    // SessionToken:string
    // fetchDonationInfo: () => void,
    // logData: [],
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
            zipcode: 0
        }
    }
    render(){
        return (
            <div>
                Hello from UserTable
                <UserInfoDelete />
                <UserInfoUpdate />
            </div>    
        );
    }
}

export default UserTable;



// place under the construtor


// componentDidMount() {
//     this.donationMap();
// };

// donationMap = () => {  
//     return this.props.logData.map((donations:DonationData, index: number) => {
//         return (
//             <tr key={index}>
//                 <th scope="row">{donations.id}</th>
//                 <td>{donations.choice}</td>
//                 <td>{donations.amount}</td>
//                 {/* <td>{donations.taxReceipt}</td> */}
//                 <td>{donations.messageToRecipient}</td>
//                 <td>
//                     <DonationUpdate SessionToken={this.props.SessionToken} donations={donations.id} fetchDonationInfo={this.props.fetchDonationInfo}/>
//                 </td>
//                 <td>
//                     <DonationDelete SessionToken={this.props.SessionToken} donations={donations.id} fetchDonationInfo={this.props.fetchDonationInfo}/>
//                 </td>
//             </tr>
//         )
//         })
//     }
    
// render(){
    
//     return (
//         <div className="boxbg">
//             <Layout>
//                 {/* <Content> */}

//             <h2>Past Donations</h2>
//             {/* <Table> */}
//                 <table>

//                 <thead>
//                     <tr>
//                         <th>Request Number</th>
//                         <th>Choice</th>
//                         <th>Amount</th>
//                         {/* <th>TaxReceipt?</th> */}
//                         <th>Message To Recipient</th>
//                         <th>Update</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.donationMap()}
//                 </tbody>
//                 </table>
//             {/* </Table> */}
//             {/* <DonationUpdate /> */}
//                 {/* </Content> */}
//             </Layout>
//         </div>    
//     );
// }
// }
// export default DonationTableAndDelete;


