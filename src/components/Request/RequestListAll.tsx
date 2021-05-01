import React, {Component} from 'react';
// import RequestCreate from './RequestCreate'
// import RequestTable from './RequestTable'
import APIURL from '../../helpers/environment'
import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'
import {Row, Col, Layout } from "antd"
import { Content } from 'antd/lib/layout/layout';
import RequestListTable from './RequestListTable';

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

class RequestListAll extends Component <PropsItems, RequestData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            displayName: '',
            description: '', 
            item: '', 
            dateReqeusted: new Date(),
            dateNeeded: new Date(),
            giftReciptient: '',
            link: '',
            messageToDonor: '',
            requestFilled: false,
            logData: []  
        }
    }

    fetchRequestList = () => {
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
        this.fetchRequestList();
    };

    render(){
        return (
            <div>
                <div>
                    {this.props.SessionToken === localStorage.getItem('token') ? 
                        <div>                            
                            <RequestListTable SessionToken={this.props.SessionToken} 
                            fetchRequestList={this.fetchRequestList} logData={this.state.logData} />
                        </div> : 
                        <div className="boxbg">
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
                    </div>
    }
                    </div>
            </div>    
        );
    }
}

export default RequestListAll;