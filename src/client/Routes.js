import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';

import FundraiserRoutes from './pages/Fundraiser/_routes';
import PetitionRoutes from './pages/Petition/_routes';
import LoginRoutes from './pages/Login/_routes';
import DonationRoutes from './pages/Donation/_routes';
import SupportRoutes from './pages/Support/_routes';
import ProfileRoutes from './pages/Profile/_routes';

export default [{
    ...App,
    routes: [
        {
            ...HomePage,
            path: '/',
            exact: true
        },
        ...FundraiserRoutes,
        ...PetitionRoutes,
        ...LoginRoutes,
        ...DonationRoutes,
        ...ProfileRoutes,
        ...SupportRoutes
    ]
}];
