import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';

// Sub Layouts
import TeamPage from '../pages/Support/TeamPage';
import FaqsPage from '../pages/Support/FaqsPage';

const SupportSubLayout = ({ match }) => (
    <div className="support-sub-layout">
        <div className="primary-content">
            <Switch>
                <Route path={`${match.path}/team-sharing-panda`} component={TeamPage} />
                <Route path={`${match.path}/faqs`} component={FaqsPage} />
            </Switch>
        </div>
    </div>
)

export default SupportSubLayout