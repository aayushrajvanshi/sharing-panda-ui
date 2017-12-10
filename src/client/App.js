import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    );
};

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
