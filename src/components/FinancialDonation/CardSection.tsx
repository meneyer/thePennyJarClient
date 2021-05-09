import React, { Component } from "react";
import { CardElement } from "@stripe/react-stripe-js";

class CardSection extends Component {

CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
        color: "#303238",
        fontSize: "16px",
        fontFamily: "sans-serif",
        fontSmoothing: "antialiased",
        "::placeholder": {
            color: "#CFD7DF"
        }
        },
        invalid: {
        color: "#e5424d",
        ":focus": {
            color: "#303238"
        }
        }
    }
};

    render(){    
    return (
        // <label>
        // Card details
        <CardElement options={this.CARD_ELEMENT_OPTIONS} />
        // </label>
    );
}
}

export default CardSection;