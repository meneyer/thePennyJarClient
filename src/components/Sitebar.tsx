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
                        
                        <img id="pennyJarLogo" src={Image1} width="125px"  height="auto"  alt=''></img>  

                        <Menu theme="dark" mode="horizontal" style={{float:"right"}} >   
                        
                            <SubMenu key="sub1" title="Home"> 
                                <Menu.Item key="1">Home <Link to='/' />    </Menu.Item>
                            </SubMenu>                    

                            <SubMenu key="sub3" title="Need A Penny">
                                <Menu.Item key="1">Request Form<Link to='/needAPenny/request' />  </Menu.Item>
                                <Menu.Item key="2">Request List<Link to='/needAPenny/requestlist' /> </Menu.Item>
                                <Menu.Item key="3">My Requests <Link to='/needAPenny/myrequests' /></Menu.Item>
                            </SubMenu>
                            
                            <SubMenu key="sub4" title="Give A Penny">                           
                                <Menu.Item key="1">Donation Form <Link to='/giveAPenny/donate' />  </Menu.Item>
                                <Menu.Item key="2">Donation List<Link to='/giveAPenny/donationlist' /> </Menu.Item>
                                <Menu.Item key="3">My Donations <Link to='/giveAPenny/mydonations'/></Menu.Item>
                                <Menu.Item key="4">Checkout <Link to='/giveAPenny/checkout'/></Menu.Item>
                            </SubMenu>
                            
                            <SubMenu key="sub5" title="My Info">
                                <Menu.Item key="1">My Profile<Link to='/profile/myprofile' />  </Menu.Item>                            
                                <Menu.Item key="2">My Requests <Link to='/needAPenny/myrequests' /></Menu.Item>
                                <Menu.Item key="3">My Donations <Link to='/giveAPenny/mydonations'/></Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub2" title="Admin">
                                <Menu.Item key="4">User Profiles - Admin<Link to='/profile/' /></Menu.Item>
                                <Menu.Item key="2">Request List - Admin<Link to='/needAPenny/requestlistadmin' /> </Menu.Item>
                                <Menu.Item key="3">Donation List - Admin<Link to='/giveAPenny/donationlist' /> </Menu.Item>
                                {/* <Menu.Item key="3">Donation List - Admin<Link to='/giveAPenny/donationlistadmin' /> </Menu.Item> */}
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