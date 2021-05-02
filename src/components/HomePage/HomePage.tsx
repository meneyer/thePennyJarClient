import React, {Component} from "react";
import { Layout, Row, Col, } from 'antd';
import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'

const {Content} = Layout

type PropsItems ={
    token: string
}

class HomePage extends Component <PropsItems, {}>{
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
                                    <h1 id="homePageWords">For those times when we need a little help, but are afraid to ask.</h1>
                                    <h1 id="homePageWords">For those times when we want to help, but don't know how.</h1>
                                    <hr />
                                    <h1 id="homePageWords">Anoynymous Requests - Anonymous Donations</h1>   
                                    {/* <hr />                   
                                    <h1 id="homePageWords">Need a Penny?  Take a Penny.</h1>
                                    <h1 id="homePageWords"> Have a Penny?  Give a Penny.</h1>                                 */}
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </div>
                <div className="boxbg">
                    <Layout>
                        <Content>
                            <Row justify="space-around" align="middle">
                                <Col span={16}>  
                                <h1 id="homePageWords">Need a Penny?  Take a Penny.</h1>
                                <h1 id="homePageWords"> Have a Penny?  Give a Penny.</h1>  
                                <hr /> 
                            <h3>Have you ever wanted to do a random act of kindness, but weren't sure how? </h3>
                            <h3>Have you ever needed a hand when life got a little complicated, but didn't know who to ask - or maybe just didn't feel comfortable doing so? </h3>
                                {/* <p>(maybe you were laid off due to COVID-19, had an unexpected repair bill, or someone in your family is in the midst of a medical situaion), </p> */}
                            <hr />
                            <h3>That's why the Penny Jar was created - a way for people to connect with one another anonymously.</h3>
                            {/* <h3>If you were laid off due to COVID-19, in the midst of a family medical situation, had an unexpected housing repair bill, or some other unexpected life event occurred that has you needing a little extra help, </h3> */}
                                                            
                                </Col>
                                <div>
                                <Col span={8}>  
                                <img id="pennyTrayImage" width={350}  src="http://blog.goldeneaglecoin.com/wp-content/uploads/2015/12/brian_muzik.jpg" alt=''></img> 
                                </Col>
                                </div>
                            </Row>
                            </Content>
                    </Layout>
                </div>

                <div className="boxbg">
                    <Layout>
                        <Content>
                            <h1 id="howItWorksTitle">How The Penny Jar Works</h1>
                            <h2 id="howItWorksSubTitle">Need A Penny</h2>
                                <ol>You may request an e-gift card or an item from Amazon
                                    <ul>
                                        <li>Requested items must be $150 or less.</li>
                                        <li>You may request no more than 2 items per month.</li>
                                        <li>Please allow at least 30 days for any requests to be fulfilled</li>
                                        <li>Fill out your profile information so the admins know where to send your request.</li>
                                        <li>Remember to include a reason for your request (ex: laid off due to COVID-19, a family medical situation, an unexpected housing bill, etc.)</li>
                                    </ul>
                                </ol>
                            <h2 id="howItWorksSubTitle">Give A Penny</h2>
                                <ol>Donors can choose 3 different ways to donate:
                                    <ol>
                                        <li>Pick an item from the Request List</li>
                                            <ul>
                                                <li>Navigate to the "Need A Penny" tab at the top of the website and click on the "Request List."  This brings up every request that has been made to The Penny Jar.</li>
                                                <li>Pick a request that has not yet been filled.</li> 
                                                <li>Write down the number of that request, along with the item requested</li>
                                                <li>Navigate to the "Give A Penny" tab at the top of the website and click on the "Donation Form" and fill out the information</li>
                                                <li>Fill out the payment information and the admins will fill your request and send you a tax receipt (if requested)</li>
                                            </ul>
                                        <li>Donate to the <u>Need A Penny</u> Fund </li>
                                            <ul>
                                                <li>If you do not have a specific request you'd like to fill, you can choose to donate to the Need A Penny fund.  These donations will be collected and the admins will fill any remaining requests when the funds reach the necessary amounts</li>
                                            </ul>
                                        <li>Donate to the <u>Operations</u> Fund</li>
                                            <ul>
                                                <li>In order to keep 100% of donations going to the recipients, you can choose to give to the Operations fund.  This fund will cover all operational expenses (ex: credit card processing fees, an Amazon Prime Account, etc.) </li>
                                            </ul>
                                    </ol>
                                </ol>
                            <h2 id="howItWorksSubTitle">Admin</h2>
                            <ol>Admin Responsibilities
                                    <ul>
                                        {/* <li>General Rules</li> */}
                                            {/* <ul> */}
                                                <li>Admins will fill all requests made through donors filling specific request or by donations through the Need A Penny Fund</li>
                                                <li>Admins will utilize the Operations Fund donations for all operational expenses</li>
                                                <li>Admins will keep all user information anonymous as they are the only people with access to user profiles.</li>
                                                <li>Admins will send out tax receipts and other documentation as requested by users.</li>
                                            {/* </ul> */}
                                    </ul>
                                </ol>
                            {/* <p>When I was a child, I remember seeing small containers by the checkout at a gas station or a diner with a little sign that read "Need a Penny, Take a Penny.  Have a Penny, Give a Penny." </p>
                            <p> These containers usually contained the loose change that a person was given after they had paid their bill.  It was never much, 10 cents from one person, 3 cents from another, but it was so meaningful for me.  People were anonymously helping other people they didn't know and would probably never meet just because.  These small acts of kindness are what inspired The Penny Jar</p>
                            <p>When COVID-19 hit and the unemployment rate skyrocketed, I wanted to help.  I wanted to give a small gift card to help cover groceries for someone so they had one less thing to worry about while they looked for a new job.  I wanted to give someone an item that their child wanted for Christmas just to make sure they had something under the tree as the pandemic continued.  But I didn't know how or who needed help. </p> */}
                            
                            {/* <p>COVID-19 affected many people.  Personally, I worked in the live events industry, an industry that was thriving before the pandemic, but was brought to a complete hault in a matter of weeks in March of 2020.  Many of my friends and co-workers were laid off and I desperately wanted to help.  I asked some of them if I could send them a gift card for groceries so they would have one less thing to worry about as they searched for a new career, but they all politley declined.  They were grateful for the offer, but since they knew the gift card was coming from me (and my future was still uncertain), they didn't feel comfortable taking it.  I searched for a crowd funding site where people could donate to a fund anonymously so that wouldn't be an issue in the future, but I would not find one.  Now, there is one.</p> */}
                        </Content>
                    </Layout>
                </div>
            </div>
        );
    }
}


export default HomePage;