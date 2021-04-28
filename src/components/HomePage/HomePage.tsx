import React, {Component} from "react";
import { Image, Layout, Row, Col, } from 'antd';
import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'

const {Sider, Content} = Layout

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
                        {/* <Sider width={350}> */}
                            {/* <img id="pennyJarImage2" width={350}  src='https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1990&q=80'></img>                          */}
                        {/* </Sider> */}
                        <Content> 
                                {/* <h1 className='title'>The Penny Jar</h1> */}
                            <Row justify="space-around" align="middle">
                                <div>
                                <Col span={8}>  
                                <img id="pennyJarImage2" width={500}  src={Image1}></img> 
                                </Col>
                                </div>
                                <Col span={12}>  
                                <br />
                                <h1 className='title'>The Penny Jar</h1>
                                    <hr />                   
                                    <h1>For those times when we need a little help, but are afraid to ask.</h1>
                                    <h1>For those times when we want to help, but don't know how.</h1>
                                    <hr />
                                    <h1>Anoynymous Requests - Anonymous Help</h1>   
                                    <hr />                   
                                    <h1>Need a Penny?  Take a Penny.</h1>
                                    <h1> Have a Penny?  Give a Penny.</h1>
                                    {/* <hr />  
                                    <p> blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p> */}
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


export default HomePage;

// username:{
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
// },
// password:{
//     type: DataTypes.STRING,
//     allowNull: false
// },
// role:{
//     type: DataTypes.STRING,
//     allowNull: false,
// }

// const CarouselPage = () => {
//   return (
//     <div id="mainPageBG">
//       <MDBContainer id="carouselCont">
//         <MDBCarousel
//           activeItem={1}
//           length={4}
//           showControls={true}
//           showIndicators={false}
//           className="z-depth-1"
//         >
//           <MDBCarouselInner id="carouselInner">
//             <MDBCarouselItem itemId="1">
//               <MDBView>
//                 <img className="d-block w-100" src={Image1} alt="First slide" />
//                 <MDBMask overlay="black-slight" />
//               </MDBView>
//               <MDBCarouselCaption>
//                 <h1 className="h1-responsive">TRAIN</h1>
//               </MDBCarouselCaption>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="2">
//               <MDBView>
//                 <img
//                   className="d-block w-100"
//                   src={Image2}
//                   alt="Second slide"
//                 />
//                 <MDBMask overlay="black-slight" />
//               </MDBView>
//               <MDBCarouselCaption>
//                 <h1 className="h1-responsive">WORK</h1>
//               </MDBCarouselCaption>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="3">
//               <MDBView>
//                 <img className="d-block w-100" src={Image3} alt="Third slide" />
//                 <MDBMask overlay="black-slight" />
//               </MDBView>
//               <MDBCarouselCaption>
//                 <h1 className="h1-responsive">FIGHT</h1>
//               </MDBCarouselCaption>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="4">
//               <MDBView>
//                 <img
//                   className="d-block w-100"
//                   src={Image4}
//                   alt="fourth slide"
//                 />
//                 <MDBMask overlay="black-slight" />
//               </MDBView>
//               <MDBCarouselCaption>
//                 <h1 className="h1-responsive">WIN</h1>
//               </MDBCarouselCaption>
//             </MDBCarouselItem>
//           </MDBCarouselInner>
//         </MDBCarousel>
//       </MDBContainer>
//     </div>
//   );
// };

// export default CarouselPage;
