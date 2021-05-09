import React, {Component} from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import {Layout, Form, Input, Button, Row, Col, InputNumber, Select } from "antd"

import CardSection from "./CardSection";
import { Content } from "antd/lib/layout/layout";

type PropsData = {
    stripe: any,
    elements: any
}

class CheckoutForm extends Component <PropsData, {}>{
    handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const { stripe, elements } = this.props;
        if (!stripe || !elements) {
        return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
        console.log(result.error.message);
        } else {
        console.log(result.token);
        }
    };

    render() {
        return (
            <div>
            <br />
            <hr />
            <br />
            <Layout>        
                <Content> 
                    <Row justify="start" >
                        <Col span={6}></Col>
                        <Col span={12} > 
            {/* <div className="product-info"> */}
            <h1 id="formTitles" className="product-title">Make a donation</h1>
            {/* <input className="product-price"></input> */}
            <Form.Item label="Amount:" labelCol={{span:24}} wrapperCol={{span:24}}>
                    <Input className="product-price" placeholder="Please Input the Amount listed above"></Input>
            </Form.Item> 
            {/* </div> */}
            <form onSubmit={this.handleSubmit}>
            <Form.Item label="Card Details:" labelCol={{span:24}} wrapperCol={{span:24}}>
            <CardSection />
            </Form.Item> 
            <button disabled={!this.props.stripe} className="btn-pay">
                Donate
            </button>
            </form>
            </Col>
                </Row>
            </Content>
        </Layout>
    </div>
    );
    
    }
}

export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
        {({ stripe, elements }) => (
            <CheckoutForm stripe={stripe} elements={elements} />
        )}
        </ElementsConsumer>
    );
}

