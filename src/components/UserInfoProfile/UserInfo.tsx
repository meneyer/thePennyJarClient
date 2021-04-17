import React, {Component} from 'react';

class UserInfo extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>
                Hello from UserInfo
            </div>    
        );
    }
}

export default UserInfo;

// firstName:{
//     type: DataTypes.STRING,
//     allowNull: false,  
// },
// lastName:{
//     type: DataTypes.STRING,
//     allowNull: true
// },
// email:{
//     type: DataTypes.STRING,
//     allowNull: true
// },
// phone:{
//     type: DataTypes.STRING,
//     allowNull: true
// },
// address:{
//     type: DataTypes.STRING,
//     allowNull: true
// },
// city:{
//     type: DataTypes.STRING,
//     allowNull: true
// },
// state:{
//     type: DataTypes.STRING,
//     allowNull: true
// },
// zipcode:{
//     type: DataTypes.INTEGER,
//     allowNull: true