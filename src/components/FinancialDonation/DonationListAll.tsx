import React, {Component} from 'react';
import APIURL from '../../helpers/environment'
import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'
import DonationListTable from './DonationListTable';

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

class DonationListAll extends Component <PropsItems, DonationData> {
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

    fetchDonationList = () => {
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
        this.fetchDonationList();
    };

    render(){
        return (
            <div>               
                <div>
                    {this.props.SessionToken === localStorage.getItem('token') ? 
                        <div>
                            <DonationListTable SessionToken={this.props.SessionToken} fetchDonationList={this.fetchDonationList} logData={this.state.logData}/>
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
                                        <h1 className='title'>Please Log In</h1>                                   
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
export default DonationListAll;