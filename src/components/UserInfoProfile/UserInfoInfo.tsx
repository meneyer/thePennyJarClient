import React, {Component} from 'react';
import UserInfoCreate from './UserInfoCreate';
import UserInfoTableAndDelete from './UserInfoTableAndDelete'
import APIURL from '../../helpers/environment'


export interface UserInfoData{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zipcode: number
}

type PropsItems ={
    SessionToken:string
}

class UserInfo extends Component <PropsItems, UserInfoData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

        // fetchProfileInfo = () => {
    //     fetch(`${APIURL}/needapenny/`, {
    //         method: "GET",
    //         headers: new Headers({
    //             "Content-Type": "application/json",
    //         Authorization: this.props.SessionToken,
    //         }),
    //     })
    //     .then((res) => res.json())
    //     .then((logData) => {
    //         console.log (logData);
    //         this.setState({
    //             logData: logData
    //         })
    //     });
    // }

    // componentDidMount() {
    //     this.fetchProfileInfo();
    // };

    render(){
        return (
            <div>
                <div>
                    {this.props.SessionToken === localStorage.getItem('token') ? 
                        <div> 
                            Hello from UserInfo
                            <UserInfoCreate />
                            <UserInfoTableAndDelete />
                        </div> : <h1>Please log in</h1>  }
                </div>
            </div>    
        );
    }

     // render(){
    //     return (
    //         <div>
    //             <div>
    //                 {this.props.SessionToken === localStorage.getItem('token') ? 
    //                     <div>                            
    //                         <DonationCreate SessionToken={this.props.SessionToken} 
    //                         fetchDonationInfo={this.fetchDonationInfo}
    //                         />
    //                         <DonationTableAndDelete SessionToken={this.props.SessionToken} fetchDonationInfo={this.fetchDonationInfo} logData={this.state.logData}/>
    //                     </div> : <h1>Please log in</h1>  }
    //             </div>
    //         </div>    
    //     );
    // }
}

export default UserInfo;