import React, {Component} from "react";
import { Image, Layout, Row, Col } from 'antd';

const {Sider, Content} = Layout

type PropsItems ={
    token: string
}

class SplashPageInitial extends Component <PropsItems, {}>{
    constructor(props:any){
        super(props);
            this.state={

            }
        }       

    render(){
        return(
            <div>
                <div className="boxbg">
                    <Layout>
                        <Sider width={350}>
                            <img id="pennyJarImage2" width={350}  src='https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1990&q=80'></img>                         
                        </Sider>
                        <Content> 
                            <Row justify="center" align="middle">
                                <Col span={20}>  
                                    <h1>HHHHThe Penny Jar</h1>
                                    <hr />                   
                                    <h3>Need a Penny?  Take a Penny.</h3>
                                    <h3> Have a Penny?  Give a Penny.</h3>
                                    <hr />
                                    <h3>Anoynymous Requests - Anonymous Help</h3>   
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </div>
                <div className="boxbg">
                    <Layout>
                        <Content>
                            <p> blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                        </Content>
                    </Layout>
                </div>
            </div>
        );
    }
}


export default SplashPageInitial;

