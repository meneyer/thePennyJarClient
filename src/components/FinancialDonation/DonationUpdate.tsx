import React, {Component} from 'react';

export interface DonationData{
    // choice: string,
    // amount: number,
    // taxReceipt: boolean,
    // messageToRecipient: string
}

// type PropsItems ={

// }

class DonationUpdate extends Component <{}, {}> {
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
                Hello from DonationUpdate
            
            </div>    
        );
    }
}
export default DonationUpdate;