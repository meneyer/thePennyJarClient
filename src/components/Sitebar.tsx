import React, {Component} from 'react';
import {Link} from "react-router-dom"
import { Layout, Menu, Button} from 'antd';
import Image1 from '../components/assets/thePennyJarLogo.png'

const {SubMenu} = Menu
const { Header } = Layout;

type PropsItems ={
    clearToken: () => void
}

class SiteBar extends Component <PropsItems, {}> {
    constructor(props: PropsItems){
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
                    
                    <Menu.Item key="1"> 
                        <img id="pennyJarLogo" src={Image1} 
                        width="125px"
                        height="auto"
                        alt=''
                        ></img>                              
                        <Link to='/' />  
                        </Menu.Item>                    

                        <SubMenu key="sub3" title="Need A Penny">
                            {/* <Menu.Item key="4">Request Everything REMOVE THIS ITEM<Link to='/needAPenny/' /> </Menu.Item> */}
                            <Menu.Item key="1">Request Form<Link to='/needAPenny/request' />  </Menu.Item>
                            <Menu.Item key="2">Request List<Link to='/needAPenny/requestlist' /> </Menu.Item>
                            <Menu.Item key="3">My Requests <Link to='/needAPenny/myrequests' /></Menu.Item>
                        </SubMenu>
                        
                        <SubMenu key="sub4" title="Give A Penny">                           
                            <Menu.Item key="1">Donation Form <Link to='/giveAPenny/donate' />  </Menu.Item>
                            <Menu.Item key="2">Donation List<Link to='/giveAPenny/donationlist' /> </Menu.Item>
                            <Menu.Item key="3">My Donations <Link to='/giveAPenny/mydonations'/></Menu.Item>
                        </SubMenu>
                        
                        <SubMenu key="sub5" title="My Info">
                            <Menu.Item key="1">My Profile<Link to='/profile/myprofile' />  </Menu.Item>                            
                            <Menu.Item key="3">My Requests <Link to='/needAPenny/myrequests' /></Menu.Item>
                            <Menu.Item key="4">My Donations <Link to='/giveAPenny/mydonations'/></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" title="Admin">
                            <Menu.Item key="4">User Profiles<Link to='/profile/' /></Menu.Item>
                            <Menu.Item key="2">Request List<Link to='/needAPenny/requestlistadmin' /> </Menu.Item>
                            <Menu.Item key="3">Donation List<Link to='/giveAPenny/donationlist' /> </Menu.Item>
                        </SubMenu>
                        
                        <Menu.Item key="6">
                            <Link to='/signup'><Button type="primary">SignUp/LogIn</Button></Link>                            
                        </Menu.Item> 

                        <Menu.Item key="7">
                        <Button type="primary" onClick={()=>this.props.clearToken()}>Logout</Button>
                        </Menu.Item>                       
                        
                    </Menu>
                </Header>       
            </Layout >       
            </div>
        );
    }
};

export default SiteBar;

/*
https://medium.com/zestgeek/ant-design-navbar-with-responsive-drawer-a8d718e471e0  <---this will give a way to do a left and right navbar components with a logo - in js not ts, so putting it here for future reference

LEFT MENU
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
    render() {
        return (
    <Menu mode="horizontal">
        <Menu.Item key="mail">
            <a href="">Home</a>
            </Menu.Item>
            <SubMenu title={<span>Blogs</span>}>
            <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
            <a href="">Contact Us</a>
            </Menu.Item>
        </Menu>
        );
    }
    }
export default LeftMenu;

RIGHT MENU
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
    render() {
        return (
        <Menu mode="horizontal">
            <Menu.Item key="mail">
            <a href="">Signin</a>
            </Menu.Item>
            <Menu.Item key="app">
            <a href="">Signup</a>
            </Menu.Item>
        </Menu>
        );
    }
    }
export default RightMenu;

MAIN COMPONENT
import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    }
    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };
    onClose = () => {
        this.setState({
        visible: false,
        });
    };
    render() {
        return (
            <nav className="menuBar">
            <div className="logo">
                <a href="">logo</a>
            </div>
            <div className="menuCon">
                <div className="leftMenu">
                <LeftMenu />
                </div>
                <div className="rightMenu">
                    <RightMenu />
                </div>
                <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                <span className="barsBtn"></span>
                </Button>
                <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                >
                <LeftMenu />
                <RightMenu />
                </Drawer>
    </div>
            </nav>
        );
    }
}
export default Navbar;
*/