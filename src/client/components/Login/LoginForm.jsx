import React, { Component } from 'react';
import * as Redux from 'react-redux';
import { Link } from 'react-router-dom';
import googlelogo from '../../../public/assets/images/google-logo.svg';
import facebooklogo from '../../../public/assets/images/facebook-logo.svg';
import './styles/_login.scss';

export class LoginForm extends Component {
    render() {
        return (
            <div id="login-form">
                <div className="uk-text-center">
                    <h4 className="uk-text-bold uk-margin-small-bottom ">Log In</h4>
                    <p className="uk-h6 uk-margin-remove-top">Don't have an account? <span className="uk-link" data-uk-toggle="target: #sign-up-modal">Sign Up</span></p>
                </div>
                <div className="uk-margin-small">
                    <a href="/api/auth/google" target="_self">
                        <button id="google-button" type="button" className="uk-button uk-button-small uk-button-default uk-width-1-1 uk-box-shadow-small"><img className="uk-preserve uk-margin-small-right" src={googlelogo} width="25" height="25" data-uk-svg/>Log in with Google</button>
                    </a>
                </div>
                <div className="uk-margin-small">
                    <a href="/api/auth/facebook" target="_self">
                        <button id="facebook-button" type="button" className="uk-button uk-button-small uk-button-default uk-width-1-1"><img className="uk-preserve uk-margin-small-right"  src={facebooklogo} width="25" height="25" data-uk-svg/>Log In with Facebook</button>
                    </a>
                </div>
                <hr className="uk-divider-icon" />
                <form id="login-form" className="uk-form-stacked" action="/api/login" method="post" target="_parent">
                    <div className="uk-margin-small">
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                <input id="login-email" name="email" className="uk-input uk-form-width-large" type="text" placeholder="Email Id" onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                                <input id="login-password" name="password" className="uk-input uk-form-width-large" type="password" placeholder="Password" onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <div className="uk-form-controls">
                            <button className="uk-button uk-button-large uk-button-primary uk-width-1-1" type="submit">SIGN IN</button>
                        </div>
                    </div>
                    <div className="uk-clearfix">
                        <div className="uk-float-left">
                            <label style={{ 'fontSize': '0.7rem' }}>Forgot Details?</label>
                        </div>
                        <div className="uk-float-right">
                            <label style={{ 'fontSize': '0.7rem' }}><input className="uk-checkbox" type="checkbox" /> Remember me</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;