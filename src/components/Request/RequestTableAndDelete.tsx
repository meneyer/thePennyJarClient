import React, {Component} from 'react';
import RequestUpdate from './RequestUpdate'


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

type PropsItems ={

}

class RequestTableAndDelete extends Component <{}, {}> {
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
                Hello from RequestTableAndDelete
                <RequestUpdate />
            </div>    
        );
    }
}

export default RequestTableAndDelete;

