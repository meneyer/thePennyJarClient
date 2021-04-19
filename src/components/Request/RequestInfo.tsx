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

type PropsItems ={
    SessionToken:string
}

class RequestInfo extends Component <PropsItems, {}> {
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
                <div>
                    {this.props.SessionToken === localStorage.getItem('token') ? 
                        <div>
                            Hello from RequestInfo
                            <RequestCreate />
                            <RequestTableAndDelete />
                        </div> : <h1>Please log in</h1>  }
                    </div>
            </div>    
        );
    }
}

export default RequestInfo;

