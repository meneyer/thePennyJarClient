import React, {Component} from 'react';

class DonationPage extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>
                Hello from DonationPage
            </div>    
        );
    }
}
export default DonationPage;

// choice: {
//     type: DataTypes.STRING,
//     allowNull: false,           
// },
// amount:{
//     type: DataTypes.INTEGER,
//     allowNull: false,
// },
// taxReceipt:{
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
// },
// messageToRecipient:{
//     type: DataTypes.STRING(2000),
//     allowNull:true,
// },