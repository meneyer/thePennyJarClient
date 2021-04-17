import React, {Component} from 'react';

class Login extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>
                Hello from Login
            </div>    
        );
    }
}

export default Login;

// import React, { useState } from "react";

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import APIURL from "../../helpers/environment";

// const Login = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [nope, setNope] = useState("");


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     //keeps page from reloading after submit
//     fetch(`${APIURL}/user/login`, {
//       method: "POST",
//       body: JSON.stringify({ user: { email: email, password: password } }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         props.updateToken(data.sessionToken);
//         if (data.sessionToken === undefined) {
//           //if localstorage token is not returned means login failed 502 bad gateway
//           setNope("*Not a valid username/password combination");
//           return;
//         } else {
//         console.log(data.sessionToken);
//         localStorage.setItem("owner", 0);
//         console.log("User logged in!");
//         setNope("");
//         props.setOpen(false);}
//       })
//       .catch((err) => 
//         {console.log(err)
//         //if .catch happens, means there is no email address matching. 500 error.
//         setNope("*User does not exist, Please create new account")
//       });
//   };

//   return (
//     <div>
//       <Form>
//         <Label>
//           <h3 className="modalTitle">Login</h3>
//         </Label>
//         <FormGroup>
//           <Label className="modalLabel" for="email">
//             Email
//           </Label>
//           <Input
//             type="email"
//             name="email"
//             id="loginEmail"
//             placeholder=""
//             onChange={(e) => {
//               setEmail(e.target.value);
//               localStorage.setItem("beastEmail", e.target.value);
//             }}
//             value={email}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label className="modalLabel" for="password">
//             Password
//           </Label>
//           <Input
//             type="password"
//             name="password"
//             id="loginPassword"
//             placeholder=""
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//         </FormGroup>
//         <Button className="modalBtn" onClick={handleSubmit}>
//           Submit
//         </Button>
//         <p>{nope}</p>
//       </Form>
//     </div>
//   );
// };

// export default Login;
