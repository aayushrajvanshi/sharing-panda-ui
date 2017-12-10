import React, { Component } from 'react';

class TeamMember extends Component {
    render() {
        return (
            <div className="uk-text-center">
                <img className="uk-border-circle" src="https://api.adorable.io/avatars/200/excite.png" width="200" height="200" alt="Border circle" />
                <h4 className="uk-text-bold uk-margin-remove-bottom">Bernard Scott</h4>
                <p className="uk-text-primary uk-margin-remove-top">Co-Founder</p>
                <a className="uk-icon-button uk-margin-small-right" data-uk-icon="icon: facebook"></a>
                <a className="uk-icon-button  uk-margin-small-right" data-uk-icon="icon: twitter"></a>
                <a className="uk-icon-button" data-uk-icon="icon: google-plus"></a>
            </div>
        );
    }
}

export default TeamMember;