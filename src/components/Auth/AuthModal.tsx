import React, {Component} from 'react';



class AuthModal extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>
                Hello from AuthModal
            </div>    
        );
    }
}

export default AuthModal;

// import React, { useState } from "react";
// import { Button, Modal, ModalBody } from "reactstrap";
// import Login from "./Login";
// import Create from "./Create";
// const AuthModal = (props) => {
//   const { className } = props;

//   const [modal, setModal] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [signup, setSignup] = useState(false);
//   const toggle = () => {
//     setModal(!modal);
//     setSignup(false);
//   };

//   const signupOpen = () => {
//     setSignup(true);
//   };

//   const externalCloseBtn = (
//     <button
//       className="close"
//       style={{ position: "absolute", top: "15px", right: "15px" }}
//       onClick={toggle}
//     >
//       &times;
//     </button>
//   );
//   return (
//     <>
//       <Button id="userLoginBtn" onClick={toggle}>
//         Create User / Login
//       </Button>
//       <Modal
//         style={{ opacity: "0.95" }}
//         isOpen={modal}
//         toggle={toggle}
//         className={className}
//         external={externalCloseBtn}
//       >
//         {/* <ModalHeader>Modal title</ModalHeader> */}
//         <ModalBody className="modalBody">
//           {signup === false ? (
//             <div>
//               <Login
//                 updateToken={props.updateToken}
//                 open={open}
//                 setOpen={setOpen}
//               />
//             </div>
//           ) : (
//             <div style={{ display: "none" }}>
//               <Login
//                 updateToken={props.updateToken}
//                 open={open}
//                 setOpen={setOpen}
//               />
//             </div>
//           )}

//           {/* GINGER MODAL */}

//           {/* {signup === false ? 
//         <div><Login updateToken={props.updateToken} open={open} setOpen={setOpen}/></div>
//         :  <div style={{display: 'none'}}><Login updateToken={props.updateToken} open={open} setOpen={setOpen}/></div> }
        

//         {signup === false ? <p><a href="#" onClick={signupOpen}>Create New Account</a><div style={{display: 'none'}}><Create updateToken={props.updateToken} open={open} setOpen={setOpen} /></div></p> : 
//         <Create updateToken={props.updateToken} open={open} setOpen={setOpen} /> } */}

//           {signup === false ? (
//             <div>
//               <a id="createAccLink" href="#" onClick={signupOpen}>
//                 Create New Account
//               </a>
//               <div style={{ display: "none" }}>
//                 <Create
//                   updateToken={props.updateToken}
//                   open={open}
//                   setOpen={setOpen}
//                   displayEmail={props.displayEmail}
//                 />
//               </div>
//             </div>
//           ) : (
//             <Create
//               updateToken={props.updateToken}
//               open={open}
//               setOpen={setOpen}
//               displayEmail={props.displayEmail}
//             />
//           )}
//         </ModalBody>
//       </Modal>
//     </>
//   );
// };

// export default AuthModal;
