import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import PetitionNav from '../components/Common/PetitionNav';

// Sub Layouts
import BrowsePetitionPage from '../pages/Petition/BrowsePetitionPage';
import AddPetitionPage from '../pages/Petition/AddPetitionPage';
import PetitionDetailPage from '../pages/Petition/PetitionDetailPage';

const PetitionSubLayout = ({ match }) => (
  <div className="petition-sub-layout">
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={BrowsePetitionPage} />
        <Route path={`${match.path}/start-petition`} exact component={AddPetitionPage} />
        <Route path={`${match.path}/:petitionId`} component={PetitionDetailPage} />
      </Switch>
    </div>
  </div>
)

export default PetitionSubLayout