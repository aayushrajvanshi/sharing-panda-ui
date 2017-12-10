import React, { Component } from 'react';

class DonationCard extends Component {
    render() {
        let { amount, donor } = this.props;
        return (
            <div className="uk-card uk-card-default">
                <p>{`Amount : ${amount}`}</p>
                <p>{`By : ${donor.first_name} ${donor.last_name}`}</p>
            </div>
        );
    }
}

export default DonationCard;