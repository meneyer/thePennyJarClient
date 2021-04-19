import React, {Component} from 'react';
import RequestCreate from './RequestCreate'
import RequestTableAndDelete from './RequestTableAndDelete'

// export interface RequestData{
//     displayName: string,
//     description: string, 
//     item: string, 
//     dateReqeusted: Date,
//     dateNeeded: Date,
//     giftReciptient: string,
//     link: string,
//     messageToDonor: string,
//     requestFilled: boolean
// }

// type PropsItems ={

// }

class RequestInfo extends Component <{}, {}> {
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
                Hello from RequestInfo
                <RequestCreate />
                <RequestTableAndDelete />
            </div>    
        );
    }
}

export default RequestInfo;

