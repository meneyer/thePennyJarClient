import React, {Component} from 'react';
import DonationCreate from './DonationCreate';
import DonationTableAndDelete from './DonationTableAndDelete'

export interface DonationData{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string
}

type PropsItems ={
    SessionToken:string
}

class DonationInfo extends Component <PropsItems, DonationData> {
    constructor(props: any){
        super(props);
        this.state = {
            choice: '',
            amount: 0,
            taxReceipt: false,
            messageToRecipient: '',  
            // SessionToken: ''          
        }
    }
    render(){
        return (
            <div>
                <div>
                    {this.props.SessionToken === localStorage.getItem('token') ? 
                        <div> 
                            Hello from DonationInfo
                            {/* <DonationCreate SessionToken={this.state.SessionToken}/> */}
                            <DonationCreate/>
                            <DonationTableAndDelete />
                        </div> : <h1>Please log in</h1>  }
                </div>
            </div>    
        );
    }
}
export default DonationInfo;