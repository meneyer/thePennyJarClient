import React, {Component} from 'react';
// import {loadStripe, Stripe} from '@stripe/stripe-js';
// import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

type PropsData = {
  // stripe: any,
  // elements: any
}

type Data = {

}

class StripeDonation extends Component <PropsData, Data> {
  constructor(props: PropsData){
    super(props);
    this.state = ({

    })
  }

// handleSubmit = async (event:any) => {
//     event.preventDefault();
//     const {stripe, elements} = this.props

//     if (stripe) {
//       const {error, paymentMethod} = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });
//       if (error) {
//         console.log('[error]', error);
//         this.setState({error:true})
//       } else {
//         console.log('[PaymentMethod]', paymentMethod);   
//       }
//     };
//     }

    render(){  
// const {stripe} = this.props
  return (
    <div>
      Hello from Stripe Donation
    </div>
  //   <form onSubmit={this.handleSubmit}>
  //     <CardElement
  //       options={{
  //         style: {
  //           base: {
  //             fontSize: '16px',
  //             color: '#424770',
  //             '::placeholder': {
  //               color: '#aab7c4',
  //             },
  //           },
  //           invalid: {
  //             color: '#9e2146',
  //           },
  //         },
  //       }}
  //     />
  //     <button type="submit" disabled={!stripe}>
  //       Pay
  //     </button>
  //   </form>
  );
};
}

export default StripeDonation

// const stripePromise = loadStripe('pk_test_51IoFgIGo0JALJHtfdCoyBl0DgA37XLOcig7woGtXQNlyYSOFRtoQOw8fAeMMeCjVkGA4S0Er76PIUqQahKOc6uFY00QMvshjTq');

// const App = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default StripeDonation
