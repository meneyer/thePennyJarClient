import React, {Component} from 'react';

class RequestPage extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>
                Hello from RequestPage
            </div>    
        );
    }
}

export default RequestPage;

// displayName:{
//     type: DataTypes.STRING,
//     allowNull: false,  
// },
// description:{
//     type: DataTypes.STRING(1000),
//     allowNull: false,
// },    
// item:{
//     type: DataTypes.STRING,
//     allowNull: false
// },
// dateRequested:{
//     type: DataTypes.DATEONLY,
//     allowNull: false
// },
// dateNeeded:{
//     type: DataTypes.DATEONLY,
//     allowNull: false
// },
// giftRecipient:{
//     type: DataTypes.STRING,
//     allowNull: true
// },
// link:{
//     type: DataTypes.STRING,
//     allowNull: true
// },
// messageToDonor:{
//     type: DataTypes.STRING(2000),
//     allowNull:true,
// },
// requestFilled:{
//     type: DataTypes.BOOLEAN,
//     allowNull: true
// }