import React, {Component} from 'react';
import DonationCreate from './DonationCreate';
import DonationTableAndDelete from './DonationTableAndDelete'

export interface DonationData{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string
}

// type PropsItems ={

// }

class DonationInfo extends Component <{}, DonationData> {
    constructor(props: any){
        super(props);
        this.state = {
            choice: '',
            amount: 0,
            taxReceipt: false,
            messageToRecipient: ''
        }
    }
    render(){
        return (
            <div>
                Hello from DonationInfo
                <DonationCreate />
                <DonationTableAndDelete />
            </div>    
        );
    }
}
export default DonationInfo;