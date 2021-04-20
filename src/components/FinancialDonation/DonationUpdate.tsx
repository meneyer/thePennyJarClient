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


// import React, { useState } from "react";

// import APIURL from "../../helpers/environment";

// const EventUpdate = (props) => {
//   console.log(props.updateEvent);

//   const [editRaceName, setEditRaceName] = useState(props.updateEvent.raceName);
//   const [editLocation, setEditLocation] = useState(props.updateEvent.location);
//   const [editLength, setEditLength] = useState(props.updateEvent.length);
//   const [editDate, setEditDate] = useState(props.updateEvent.date);
//   const [editStartTime, setEditStartTime] = useState(
//     props.updateEvent.startTime
//   );
//   const [editPackList, setEditPackList] = useState(props.updateEvent.packList);
//   const [editLodging, setEditLodging] = useState(props.updateEvent.lodging);
//   const [editTravelPlan, setEditTravelPlan] = useState(
//     props.updateEvent.travelPlan
//   );

//   const eventUpdate = (event, updateEvent) => {
//     event.preventDefault();
//     fetch(`${APIURL}/events/update/${props.updateEvent.id}`, {
//       method: "PUT",
//       body: JSON.stringify({
//         events: {
//           raceName: editRaceName,
//           location: editLocation,
//           length: editLength,
//           date: editDate,
//           startTime: editStartTime,
//           packList: editPackList,
//           lodging: editLodging,
//           travelPlan: editTravelPlan,
//         },
//       }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     }).then((res) => {
//       props.fetchEventInfo();
 
//       props.toggle();
//     });
//   };


//   return (
//     <div>
//       <p className="placeholder"></p>
//       <Container>
  
//         <Popover
//           placement="bottom"
//           isOpen={props.popoverOpen}
//           target="Popover1"
//           toggle={props.toggle}
//         >
//           <PopoverHeader className="popoverHeader">
//             Update Your Race Details
//           </PopoverHeader>
//           <PopoverBody className="popoverBody">
//             <Form onSubmit={eventUpdate}>
//               <FormGroup className="popoverText">
//                 <Label htmlFor="raceName">Race Name</Label>
//                 <Input
//                   name="raceName"
//                   value={editRaceName}
//                   onChange={(e) => setEditRaceName(e.target.value)}
//                 />
//               </FormGroup>

//               <FormGroup className="popoverText">
//                 <Label htmlFor="location">Race Location</Label>
//                 <Input
//                   name="location"
//                   value={editLocation}
//                   onChange={(e) => setEditLocation(e.target.value)}
//                 />
//               </FormGroup>

//               <FormGroup className="popoverText">
//                 <Label htmlFor="length">Race Length</Label>
//                 <Input
//                   name="length"
//                   value={editLength}
//                   onChange={(e) => setEditLength(e.target.value)}
//                 />
//               </FormGroup>

//               <FormGroup className="popoverText">
//                 <Label htmlFor="date">Date of Race</Label>
//                 <Input
//                   name="date"
//                   type="date"
//                   value={editDate}
//                   onChange={(e) => setEditDate(e.target.value)}
//                 />
//               </FormGroup>

//               <FormGroup className="popoverText">
//                 <Label htmlFor="Race Start Time">Start Time</Label>
//                 <Input
//                   name="startTime"
//                   type="time"
//                   value={editStartTime}
//                   onChange={(e) => setEditStartTime(e.target.value)}
//                 />
//                 <FormText> </FormText>
//               </FormGroup>

//               <FormGroup className="popoverText">
//                 <Label htmlFor="packList">Packing List</Label>
//                 <Input
//                   type="textarea"
//                   name="packList"
//                   value={editPackList}
//                   onChange={(e) => setEditPackList(e.target.value)}
//                 />
//                 <FormText> </FormText>
//               </FormGroup>

//               <FormGroup className="popoverText">
//                 <Label htmlFor="lodging">Lodging Plans</Label>
//                 <Input
//                   name="lodging"
//                   value={editLodging}
//                   onChange={(e) => setEditLodging(e.target.value)}
//                 />
//               </FormGroup>

//               <FormGroup className="popoverText">
//                 <Label htmlFor="travelPlan">Travel Plans</Label>
//                 <Input
//                   type="textarea"
//                   name="travelPlan"
//                   value={editTravelPlan}
//                   onChange={(e) => setEditTravelPlan(e.target.value)}
//                 />
//               </FormGroup>

//               <Button className="updateBtn" type="submit">
//                 Update Your Event Details!
//               </Button>
//             </Form>
//           </PopoverBody>
//         </Popover>
//       </Container>
//     </div>
//   );
// };

// export default EventUpdate;
