import React, {Component} from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

class FooterSection extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="backgroundColor">
                <Layout>
                    <Footer id="footerText">
                        <h3 id="footerLeft">The Penny Jar</h3> 
                        <h3 id="footerCenter"> Give a Penny, Take a Penny -- Anonymous Help, Anonymous Requests </h3>
                        <h3 id="footerRight"> M. Neyer, 2021</h3>                     
                    </Footer>
                </Layout>,
            </div>
        );
    };
};

export default FooterSection;