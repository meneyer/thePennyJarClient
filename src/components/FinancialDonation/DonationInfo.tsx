import React, {Component} from 'react';
import DonationCreate from './DonationCreate';
import DonationTable from './DonationTable'
import APIURL from '../../helpers/environment'

export interface DonationData{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string,
    logData: []
}

type PropsItems ={
    SessionToken:string
}

class DonationInfo extends Component <PropsItems, DonationData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            choice: '',
            amount: 0,
            taxReceipt: false,
            messageToRecipient: '',  
            logData: []                  
        }
        console.log("donation info", this.props.SessionToken)
    }

    fetchDonationInfo = () => {
        fetch(`${APIURL}/giveapenny/`, {
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
        this.fetchDonationInfo();
    };

    render(){
        return (
            <div>
                <div>
                    {this.props.SessionToken === localStorage.getItem('token') ? 
                        <div>                            
                            <DonationCreate SessionToken={this.props.SessionToken} 
                            fetchDonationInfo={this.fetchDonationInfo}
                            />
                            <DonationTable SessionToken={this.props.SessionToken} fetchDonationInfo={this.fetchDonationInfo} logData={this.state.logData}/>
                        </div> : <h1>Please log in</h1>  }
                </div>
            </div>    
        );
    }
}
export default DonationInfo;