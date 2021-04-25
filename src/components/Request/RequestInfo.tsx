import React, {Component} from 'react';
import RequestCreate from './RequestCreate'
import RequestTableAndDelete from './RequestTableAndDelete'
import APIURL from '../../helpers/environment'

export interface RequestData{
    displayName: string,
    description: string, 
    item: string, 
    dateReqeusted: Date,
    dateNeeded: Date,
    giftReciptient: string,
    link: string,
    messageToDonor: string,
    requestFilled: boolean,
    logData: []
}

type PropsItems ={
    SessionToken:string
}

class RequestInfo extends Component <PropsItems, RequestData> {
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
            requestFilled: false,
            logData: []  
        }
    }

    fetchRequestInfo = () => {
        fetch(`${APIURL}/needapenny/`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
            Authorization: this.props.SessionToken,
            }),
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log (logData);
            this.setState({
                logData: logData
            })
        });
    }

    componentDidMount() {
        this.fetchRequestInfo();
    };

    render(){
        return (
            <div>
                <div>
                    {this.props.SessionToken === localStorage.getItem('token') ? 
                        <div>
                            <RequestCreate 
                            SessionToken={this.props.SessionToken} 
                            fetchRequestInfo={this.fetchRequestInfo}
                            />
                            <RequestTableAndDelete />
                        </div> : <h1>Please log in</h1>  }
                    </div>
            </div>    
        );
    }

                                
    //                         <DonationCreate SessionToken={this.props.SessionToken} 
    //                         fetchDonationInfo={this.fetchDonationInfo}
    //                         />
    //                         <DonationTableAndDelete SessionToken={this.props.SessionToken} fetchDonationInfo={this.fetchDonationInfo} logData={this.state.logData}/>
    //                     </div> : <h1>Please log in</h1>  }
    //             </div>
    //         </div>    
    //     );
    // }
}

export default RequestInfo;

