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
            <div>
                <Layout className="Layout" id="footerLayout">
                    <Footer id="footerText">
                        <div id="footerLeft">The Penny Jar</div> 
                        <div id="footerCenter"> Give a Penny, Take a Penny -- Anonymous Help, Anonymous Requests </div>
                        <div id="footerRight"> M. Neyer, 2021</div>                     
                    </Footer>
                </Layout>,
            </div>
        );
    };
};

export default FooterSection;