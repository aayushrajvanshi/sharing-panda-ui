import React, { Component } from 'react';
import * as Redux from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import googlelogo from '../../../public/assets/images/google-logo.svg';
import facebooklogo from '../../../public/assets/images/facebook-logo.svg';
import './styles/_login.scss';

export class SignUpForm extends Component {
    render() {
        return (
            <div id="sign-up-form">
                <div className="uk-text-center">
                    <h4 className="uk-text-bold uk-margin-small-bottom ">Sign Up</h4>
                    <p className="uk-h6 uk-margin-remove-top">Already have an account? <span className="uk-link" data-uk-toggle="target: #login-modal">Log In</span></p>
                </div>
                <div className="uk-margin-small">
                    <a href="/api/auth/google" target="_self">
                        <button id="google-button" type="button" className="uk-button uk-button-small uk-button-default uk-width-1-1 uk-box-shadow-small"><img className="uk-preserve uk-margin-small-right" src={googlelogo} width="25" height="25" data-uk-svg />Sign up with Google</button>
                    </a>
                </div>
                <div className="uk-margin-small">
                    <a href="/api/auth/facebook" target="_self">
                        <button id="facebook-button" type="button" className="uk-button uk-button-small uk-button-default uk-width-1-1"><img className="uk-preserve uk-margin-small-right" src={facebooklogo} width="25" height="25" data-uk-svg />Sign up with Facebook</button>
                    </a>
                </div>
                <hr className="uk-divider-icon" />
                <form action="/api/signup" method="post" target="_parent" id="signup-form" className="uk-form-stacked">
                    <div className="uk-margin-small">
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                <input id="first_name" name="first_name" className="uk-input uk-form-width-large" type="text" placeholder="First Name" />
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                <input id="last_name" name="last_name" className="uk-input uk-form-width-large" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                <input id="signup-email" name="email" className="uk-input uk-form-width-large" type="text" placeholder="Email Id" />
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                                <input id="signup-password" name="password" className="uk-input uk-form-width-large" type="password" placeholder="Password" />
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <div className="uk-form-controls">
                            <button type="submit" className="uk-button uk-button-large uk-button-primary uk-width-1-1">SIGN UP</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;