import React, {Component} from 'react';
import DonationCreate from './DonationCreate';
import DonationTableAndDelete from './DonationTableAndDelete'
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
    constructor(props: any){
        super(props);
        this.state = {
            choice: '',
            amount: 0,
            taxReceipt: false,
            messageToRecipient: '',  
            logData: []                  
        }
    }

    fetchDonationInfo = () => {
        // let localLogData: [] = []
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
            // localLogData=logData
        });
        // return localLogData
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
                            <DonationTableAndDelete SessionToken={this.props.SessionToken} fetchDonationInfo={this.fetchDonationInfo} logData={this.state.logData}/>
                        </div> : <h1>Please log in</h1>  }
                </div>
            </div>    
        );
    }
}
export default DonationInfo;



//   const editEvent = (eventInfoUpdate) => {
//     setUpdateEvent(eventInfoUpdate);
//     console.log(eventInfoUpdate);
//   };

//   const updateOn = () => {
//     setUpdateRace(true);
//   };

//   const updateOff = () => {
//     setUpdateRace(false);
//   };

//         <div>

//           {events !== undefined ? (
//             <EventTableAndDelete
//               token={props.token}
//               events={events}
//               editEvent={editEvent}
//               updateOn={updateOn}
//               updateOff={updateOff}
//               fetchEventInfo={fetchEventInfo}
//               updateRace={updateRace}
//               updateEvent={updateEvent}
//             />
//           ) : (
//             ""
//           )}


