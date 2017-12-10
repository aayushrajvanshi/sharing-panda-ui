import React, { Component } from 'react';
import DonationCard from './DonationCard';

class DonationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donations: []
        }
    }

    componentDidMount() {

    }

    render() {
        let { donations } = this.props;
        return (
            <div className="uk-margin">
                {donations && donations.map(donation => <DonationCard key={donation._id} {...donation} />)}
            </div>
        );
    }
}

export default DonationContainer;