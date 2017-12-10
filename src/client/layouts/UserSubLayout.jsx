import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';

// Sub Layouts
import ViewProfilePage from '../pages/Profile/ViewProfilePage';
import EditProfilePage from '../pages/Profile/EditProfilePage';
import UserSettingsPage from '../pages/Profile/UserSettingsPage';

const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <div className="primary-content">
      <Switch>
        <Route path={`${match.path}/:userId`} exact component={ViewProfilePage} />
        <Route path={`${match.path}/:userId/edit`} component={EditProfilePage} />
        <Route path={`${match.path}/:userId/settings`} component={UserSettingsPage} />
      </Switch>
    </div>
  </div>
)

export default UserSubLayout