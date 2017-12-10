import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ViewProfilePage extends Component {
    render() {
        const { auth } = this.props;
        return (
            <div className="uk-section">
                <div className="uk-container uk-container-small" style={{'maxWidth': '650px'}}>
                    <div className="uk-text-center">
                        <h2>{auth.google.name}</h2>
                        <p>India</p>
                        <Link to={`/user/${auth._id}/edit`}><button className="uk-button uk-button-default">Edit Profile</button></Link>
                    </div>
                    <div className="uk-margin-medium-top">
                        <ul className="uk-subnav uk-subnav-pill uk-flex-center" data-uk-switcher="animation: uk-animation-fade">
                            <li><a href="#">Signed (3)</a></li>
                            <li><a href="#">Started (5)</a></li>
                        </ul>

                        <ul className="uk-switcher uk-margin">
                            <li>
                                <div className="uk-grid-small uk-child-width-1-1 uk-flex-center uk-text-center" data-uk-grid>
                                    <div>
                                        <div className="uk-card uk-card-default uk-card-body">
                                            <h3 className="uk-card-title">Default</h3>
                                            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-card uk-card-default uk-card-body">
                                            <h3 className="uk-card-title">Default</h3>
                                            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-card uk-card-default uk-card-body">
                                            <h3 className="uk-card-title">Default</h3>
                                            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="uk-grid-small uk-child-width-1-1 uk-flex-center uk-text-center" data-uk-grid>
                                    <div>
                                        <div className="uk-card uk-card-default uk-card-body">
                                            <h3 className="uk-card-title">Default</h3>
                                            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-card uk-card-default uk-card-body">
                                            <h3 className="uk-card-title">Default</h3>
                                            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-card uk-card-default uk-card-body">
                                            <h3 className="uk-card-title">Default</h3>
                                            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-card uk-card-default uk-card-body">
                                            <h3 className="uk-card-title">Default</h3>
                                            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-card uk-card-default uk-card-body">
                                            <h3 className="uk-card-title">Default</h3>
                                            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default {
    component: connect(mapStateToProps)(ViewProfilePage)
};