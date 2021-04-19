import React, {Component} from 'react';

export interface DonationData{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string
}

type PropsItems ={

}

class DonationCreate extends Component <PropsItems, DonationData> {
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
                Hello from DonationCreate            
            </div>    
        );
    }
}
export default DonationCreate;