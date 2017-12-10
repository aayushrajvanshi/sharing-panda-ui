import React from 'react'
import { Switch, Route } from 'react-router-dom';

// Sub Layouts
import DonationPage from '../pages/Donation/DonationPage';

const DonationSubLayout = ({ match }) => (
    <div className="donation-sub-layout">
        <div className="primary-content">
            <Switch>
                <Route path={match.path} exact component={DonationPage} />
            </Switch>
        </div>
    </div>
)

export default DonationSubLayout