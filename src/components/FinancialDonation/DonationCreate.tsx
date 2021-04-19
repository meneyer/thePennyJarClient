import React, {Component} from 'react';
import APIURL from "../../helpers/environment"

export interface DonationData{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string
}

type PropsItems ={
    // SessionToken:string
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

    handleSubmit = () => {
        fetch(`${APIURL}/giveapenny/create`, {
            method: "POST",
            body: JSON.stringify({
                financialDonation:{ choice:this.state.choice, amount: this.state.amount, taxReceipt: this.state.taxReceipt, messageToRecipient: this.state.messageToRecipient}
                }),            
            headers: new Headers({
                "Content-Type": "application/json",
                // Authorization: props.token,
        }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // setRaceName("");
            // setLocation("");
            // setLength("");
            // setDate("");
            // setStartTime("");
            // setPackList("");
            // setLodging("");
            // setTravelPlan("");
            // props.fetchEventInfo();
        });
    };
    render(){
        return (
            <div>
                Hello from DonationCreate
                {/* <Container>
        <div className="columnHeader" style={{margin: "auto", width: "100%", minWidth: "300px" }}>
          <h2>Enter Your Race Details</h2>
        </div>
        <Row id="eventForm" style={{ width: "100%", marginLeft: "0" }}>
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label className="eventLabel" htmlFor="date">
                  Date of Race
                </Label>
                <Input
                  name="date"
                  type="date"
                  value={date}
                  placeholder="Date of Race"
                  onChange={(e) => setDate(e.target.value)}
                />                
              </FormGroup>

              <FormGroup>
                <Label className="eventLabel" htmlFor="packList">
                  Packing List
                </Label>
                <Input
                  type="textarea"
                  name="packList"
                  maxLength="1000"
                  value={packList}
                  placeholder="Trashbags, Towels, Racing Shoes, Gels, Hydration Pack, Salt, Cash, ID, Race Confirmation Number, etc.  (Maximum Length = 1000 characters)"
                  onChange={(e) => setPackList(e.target.value)}
                />
              </FormGroup>

              <Button
                className="eventSubmitBtn"
                style={{ margin: "20px" }}
                outline
                type="submit"
              >
                Submit Your Event Details
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>             */}
            </div>    
        );
    }
}
export default DonationCreate;