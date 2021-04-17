import React, {Component} from "react";


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
        return (
            <div>
                Hello Home Page
            </div>
        );
    };
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
