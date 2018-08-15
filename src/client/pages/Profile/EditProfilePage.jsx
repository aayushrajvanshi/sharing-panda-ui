import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditProfilePage extends Component {
    render() {
        const { auth } = this.props;
        return (
            <div className="uk-section">
                <div className="uk-container uk-container-small" style={{ 'maxWidth': '650px' }}>
                    <div className="uk-text-center">
                        <h2>Edit Profile</h2>
                        <img className="uk-border-circle uk-margin-small-bottom" src="https://getuikit.com/docs/images/avatar.jpg" width="200" height="200" alt="Profile Photo" />
                        <div>
                            <button className="uk-button uk-button-default">Upload</button>
                        </div>
                    </div>
                    <div className="uk-margin-medium-top">
                        <form className="uk-form-stacked">
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="firstname">First Name</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="firstname" name="firstname" type="text" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="lastname">Last Name</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="lastname" type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="about">About Me</label>
                                <div className="uk-form-controls">
                                    <input className="uk-textarea" id="about" name="about" type="text" placeholder="Write a short description about yourself" />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="city">City</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="city" name="city" type="text" placeholder="City" />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="country">Country</label>
                                <div className="uk-form-controls">
                                    <select className="uk-select" id="country" name="country">
                                        <option>India</option>
                                        <option>Australia</option>
                                        <option>United States</option>
                                    </select>
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="twitter">Twitter</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="twitter" name="twitter" type="text" placeholder="@username" />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="profile">Profile Shortcut</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="profile" name="profile" type="text" placeholder="Create a shortcut link to your profile" />
                                </div>
                            </div>
                        </form>
                        <div className="uk-margin">
                            <button className="uk-button uk-button-primary uk-margin-small-right">Save</button>
                            <Link to={`/user/${auth._id}`} target="_self"><button className="uk-button uk-button-default">Cancel</button></Link>
                        </div>
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
    component: connect(mapStateToProps)(EditProfilePage)
};