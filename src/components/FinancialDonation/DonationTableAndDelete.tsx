import React, {Component} from 'react';
import DonationUpdate from './DonationUpdate'

export interface DonationData{
    // choice: string,
    // amount: number,
    // taxReceipt: boolean,
    // messageToRecipient: string
}

// type PropsItems ={

// }

class DonationTableAndDelete extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {
            // choice: '',
            // amount: 0,
            // taxReceipt: false,
            // messageToRecipient: ''
        }
    }
    render(){
        return (
            <div>
                Hello from DonationTableAndDelete
                <DonationUpdate />
            </div>    
        );
    }
}
export default DonationTableAndDelete;