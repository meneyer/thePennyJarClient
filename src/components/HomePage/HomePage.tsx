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
                                    <hr />                   
                                    <h1 id="homePageWords">Need a Penny?  Take a Penny.</h1>
                                    <h1 id="homePageWords"> Have a Penny?  Give a Penny.</h1>                                
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
                                
                            <h3>Have you ever wanted to do a random act of kindness, but weren't sure how? </h3>
                            <h3>Have you ever needed a hand when life got a little complicated, but didn't know who to ask - or maybe just didn't feel comfortable doing so?</h3>
                            <h3>That's why the Penny Jar was created - as a way for people to connect with one another anonymously.</h3>
                                                            
                                </Col>
                                {/* <div>
                                <Col span={8}>  
                                <img id="pennyJarImage2" width={350}  src="http://blog.goldeneaglecoin.com/wp-content/uploads/2015/12/brian_muzik.jpg" alt=''></img> 
                                </Col>
                                </div> */}
                            </Row>
                            </Content>
                    </Layout>
                </div>

                            {/* <div className="boxbg"> */}
                    {/* <Layout>
                        <Content>
                            <h2>The Founder's Story</h2>
                            <p>When I was a child, I remember seeing small containers by the checkout at a gas station or a diner with a little sign that read "Need a Penny, Take a Penny.  Have a Penny, Give a Penny." </p>
                            <p> These containers usually contained the loose change that a person was given after they had paid their bill.  It was never much, 10 cents from one person, 3 cents from another, but it was so meaningful for me.  People were anonymously helping other people they didn't know and would probably never meet just because.  These small acts of kindness are what inspired The Penny Jar</p>
                            <p>When COVID-19 hit and the unemployment rate skyrocketed, I wanted to help.  I wanted to give a small gift card to help cover groceries for someone so they had one less thing to worry about while they looked for a new job.  I wanted to give someone an item that their child wanted for Christmas just to make sure they had something under the tree as the pandemic continued.  But I didn't know how or who needed help. </p> */}
                            
                            {/* <p>COVID-19 affected many people.  Personally, I worked in the live events industry, an industry that was thriving before the pandemic, but was brought to a complete hault in a matter of weeks in March of 2020.  Many of my friends and co-workers were laid off and I desperately wanted to help.  I asked some of them if I could send them a gift card for groceries so they would have one less thing to worry about as they searched for a new career, but they all politley declined.  They were grateful for the offer, but since they knew the gift card was coming from me (and my future was still uncertain), they didn't feel comfortable taking it.  I searched for a crowd funding site where people could donate to a fund anonymously so that wouldn't be an issue in the future, but I would not find one.  Now, there is one.</p> */}
                        {/* </Content>
                    </Layout> */}
                {/* </div> */}
            </div>
        );
    }
}


export default HomePage;