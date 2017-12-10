import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import SignUpForm from '../../components/Login/SignUpForm';

class SignUpPage extends Component {
    render() {
        return (
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <div className="uk-grid-large uk-grid-divider uk-grid-match uk-child-width-1-2@s uk-flex-center uk-text-center" data-uk-grid>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default {
    component: SignUpPage
};