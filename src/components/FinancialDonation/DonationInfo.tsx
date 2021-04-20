import React, {Component} from 'react';
import DonationCreate from './DonationCreate';
import DonationTableAndDelete from './DonationTableAndDelete'

export interface DonationData{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string
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
        }
    }
    render(){
        return (
            <div>
                <div>
                    {this.props.SessionToken === localStorage.getItem('token') ? 
                        <div> 
                            Hello from DonationInfo
                            <DonationCreate SessionToken={this.props.SessionToken}/>
                            {/* <DonationCreate/> */}
                            <DonationTableAndDelete SessionToken={this.props.SessionToken}/>
                        </div> : <h1>Please log in</h1>  }
                </div>
            </div>    
        );
    }
}
export default DonationInfo;



// import React, { useEffect, useState } from "react";
// import {} from "reactstrap";
// import EventCreate from "./EventCreate";
// import EventTableAndDelete from "./EventTableAndDelete";
// import LoggedIn from "../Auth/LoggedIn";
// import BeforeLogIn from "../Auth/BeforeLogin";
// import APIURL from "../../helpers/environment";

// const EventInfo = (props) => {
//   const [events, setEvents] = useState([]);
//   const [updateRace, setUpdateRace] = useState(false);
//   const [updateEvent, setUpdateEvent] = useState({});

//   const fetchEventInfo = () => {
//     fetch(`${APIURL}/events/`, {
//       method: "GET",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     })
//       .then((res) => res.json())
//       .then((logData) => {
//         setEvents(logData);
//         console.log(logData);
//       });
//   };

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

//   useEffect(() => {
//     fetchEventInfo();
//   }, []);

//   //Below: Had to wrap the entire events display in a ternary so that you wouldn't see it if you weren't logged in with a token -Ginger
//   return (
//     <div id="eventInfoBG" style={{ paddingBottom: "50px" }}>
//       {" "}
//       {props.token === localStorage.getItem("token") ? (
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

//           <EventCreate token={props.token} fetchEventInfo={fetchEventInfo} />{" "}
//         </div>
//       ) : (
//         <BeforeLogIn />
//       )}
//     </div>
//   );
// };

// export default EventInfo;
