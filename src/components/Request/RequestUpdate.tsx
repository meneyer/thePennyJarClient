import React, {Component} from 'react';

export interface RequestData{
    // displayName: string,
    // description: string, 
    // item: string, 
    // dateReqeusted: Date,
    // dateNeeded: Date,
    // giftReciptient: string,
    // link: string,
    // messageToDonor: string,
    // requestFilled: boolean
}

// type PropsItems ={

// }

class RequestUpdate extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {
            // displayName: '',
            // description: '', 
            // item: '', 
            // dateReqeusted: new (Date),
            // dateNeeded: new (Date),
            // giftReciptient: '',
            // link: '',
            // messageToDonor: '',
            // requestFilled: false
        }
    }
    render(){
        return (
            <div>
                Hello from RequestUpdate                
            </div>    
        );
    }
}

export default RequestUpdate;

