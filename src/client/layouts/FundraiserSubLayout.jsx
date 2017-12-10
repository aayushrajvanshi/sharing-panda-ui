import React from 'react'
import { Switch, Route } from 'react-router-dom';

// Sub Layouts
import BrowseFundraiserPage from '../pages/Fundraiser/BrowseFundraiserPage';
import AddFundraiserPage from '../pages/Fundraiser/AddFundraiserPage';
import FundraiserDetailPage from '../pages/Fundraiser/FundraiserDetailPage';

const FundraiserSubLayout = ({ match }) => (
  <div className="fundraiser-sub-layout">
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={BrowseFundraiserPage} />
        <Route path={`${match.path}/start-fundraiser`} exact component={AddFundraiserPage} />
        <Route path={`${match.path}/:fundraiserId`} component={FundraiserDetailPage} />
      </Switch>
    </div>
  </div>
)

export default FundraiserSubLayout