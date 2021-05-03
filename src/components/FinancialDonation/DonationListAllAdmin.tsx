import React, {Component} from 'react';
// import DonationCreate from './DonationCreate';
import DonationTable from './DonationTable'
import APIURL from '../../helpers/environment'
import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'

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
                    {this.props.SessionToken === localStorage.getItem('token') && (localStorage.getItem('role') ==="admin" ) ? 
                        <div>                            
                            <DonationTable SessionToken={this.props.SessionToken} fetchDonationInfo={this.fetchDonationInfo} logData={this.state.logData}/>
                            {/* <DonationCreate SessionToken={this.props.SessionToken} fetchDonationInfo={this.fetchDonationInfo}
                            /> */}
                        </div> :  <div className="boxbg">
                        <Layout>
                            <Content>                                
                                <Row justify="space-around" align="middle">
                                    <div>
                                    <Col span={8}>  
                                    <img id="pennyJarImage2" width={500}  src={Image1} alt=''></img> 
                                    </Col>
                                    </div>
                                    <Col span={12}>  
                                    <br />
                                    <h1 className='title'>The Penny Jar</h1>
                                        <hr />                   
                                        <h1 className='title'>Admin Only</h1>                                   
                                    </Col>
                                </Row>
                            </Content>
                        </Layout>  
                        </div>}
                </div>
            </div>    
        );
    }
}
export default DonationInfo;