import React, {Component} from 'react';
import {Link} from "react-router-dom"
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class SiteBar extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>  
            <Layout className="layout" >
                <Header>   
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>              
                    <Menu.Item key="1">Home
                        <Link to='/' />  
                        </Menu.Item> 

                        <Menu.Item key="2">Profile
                            <Link to='/profile' />
                        </Menu.Item>
                        
                        <Menu.Item key="3">Need A Penny
                            <Link to='/needAPenny' />
                        </Menu.Item>
                        
                        <Menu.Item key="4">Give A Penny
                        <Link to='/giveAPenny' />  
                        </Menu.Item>                          
                    </Menu>
                </Header>       
            </Layout >       
            </div>
        );
    }
};

export default SiteBar;