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
    dateReqeusted: Date,
    dateNeeded: Date,
    giftReciptient: string,
    link: string,
    messageToDonor: string,
    requestFilled: boolean
}

type PropsItems ={
    // SessionToken:string
    // fetchDonationInfo: () => void,
    // logData: [],
}

class RequestTableAndDelete extends Component <PropsItems, RequestData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            displayName: '',
            description: '', 
            item: '', 
            dateReqeusted: new (Date),
            dateNeeded: new (Date),
            giftReciptient: '',
            link: '',
            messageToDonor: '',
            requestFilled: false
        }
    }
    render(){
        return (
            <div>
                Hello from RequestTableAndDelete
                <RequestDelete />
                <RequestUpdate />
            </div>    
        );
    }
}

export default RequestTableAndDelete;

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


