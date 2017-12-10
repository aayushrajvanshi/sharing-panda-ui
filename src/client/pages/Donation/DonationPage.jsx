import React, { Component } from 'react';
import axios from 'axios';

class DonationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 3000,
            description: 'Fundraiser Payment',
            currency: 'INR'
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRazorPay = (e) => {
        e.preventDefault();

        let razorpay = new Razorpay({
            "key": "rzp_test_pEBJwqm1DVxFh1",
            "amount": this.state.amount * 100,
            "name": "Sharing Panda",
            "description": this.state.description,
            "image": "https://stripe.com/img/documentation/checkout/marketplace.png",
            "handler": this.handleAfterRazorPayPayment,
            "prefill": {
                "name": "Aayush Rajvanshi",
                "email": "aayushrajvanshii@gmail.com",
                "contact": "9997064005"
            },
            "notes": {

            },
            "theme": {
                "color": "#F2D023"
            }
        });
        razorpay.open();

        window.addEventListener('popstate', function () {
            razorpay.close();
        });
    }

    handleAfterRazorPayPayment = (response) => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/v1/payments',
            data: {
                payment_id: response.razorpay_payment_id
            }
        })
            .then((payment) => {
                if (payment.data.status === "authorized") {
                    let data = {
                        amount: payment.data.amount / 100,
                        user_id: '5a0323a019b7ef276cda8b5d', //TODO
                        fundraiser_id: '5a03245e19b7ef276cda8b5f' //TODO
                    }
                    axios({
                        method: 'post',
                        data: data,
                        url: 'http://localhost:3000/api/v1/donations'
                    })
                        .then((donation) => {
                            console.log('Donated succesfully');
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                console.log('Error', err);
            });
    };

    handleStripePay = (e) => {
        e.preventDefault();

        let stripe = StripeCheckout.configure({
            key: 'pk_test_pRhXSzUXgPy7K6If90yUe53t',
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            name: 'Aayush Rajvanshi',
            description: this.state.description,
            currency: this.state.currency,
            panelLabel: 'Pay {{amount}}',
            amount: this.state.amount * 100,
            token: this.handleAfterStripePayment
        });

        stripe.open();

        window.addEventListener('popstate', function () {
            stripe.close();
        });
    }

    handleAfterStripePayment = (token) => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/v1/charge',
            data: {
                stripeToken: token.id,
                stripeEmail: token.email,
                amount: this.state.amount * 100,
                description: this.state.description,
                currency: this.state.currency
            }
        })
            .then((payment) => {
                if (payment.data.status === "succeeded") {
                    let data = {
                        amount: payment.data.amount / 100,
                        user_id: '5a0323a019b7ef276cda8b5d', //TODO
                        fundraiser_id: '5a03245e19b7ef276cda8b5f' //TODO
                    }
                    axios({
                        method: 'post',
                        data: data,
                        url: 'http://localhost:3000/api/v1/donations'
                    })
                        .then((donation) => {
                            console.log('Donated succesfully');
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                console.log('Error', err);
            });
    }

    render() {
        return (
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <form>
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin">
                                <select name="currency" id="currency" className="uk-select" value={this.state.currency} onChange={this.handleInputChange}>
                                    <option value="INR">INR</option>
                                    <option value="AUD">AUD</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                            <div className="uk-margin">
                                <input id="amount" name="amount" className="uk-input" type="text" placeholder="Amount" value={this.state.amount} onChange={this.handleInputChange} />
                            </div>
                            <div className="uk-margin">
                                <button className="uk-button uk-button-primary" onClick={this.handleRazorPay}>Pay Now By Razor Pay</button>
                            </div>
                            <div className="uk-margin">
                                <button className="uk-button uk-button-primary" onClick={this.handleStripePay}>Pay Now By Stripe</button>
                            </div>
                        </fieldset>
                    </form>
                    <form action="/your-server-side-code" method="POST">
                        <script
                            src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                            data-key="pk_test_pRhXSzUXgPy7K6If90yUe53t"
                            data-amount="999"
                            data-name="Aayush Rajvanshi"
                            data-description="Widget"
                            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                            data-locale="auto">
                        </script>
                    </form>
                </div>
            </div>
        );
    }
}

export default {
    component: DonationPage
};