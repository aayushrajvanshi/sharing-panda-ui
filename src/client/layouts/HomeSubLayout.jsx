import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import SignUpPage from '../pages/Login/SignUpPage';

const HomeSubLayout = ({ match }) => (
    <div className="home-sub-layout">
        <div className="primary-content">
            <Switch>
                <Route path={match.path} exact component={HomePage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignUpPage} />
            </Switch>
        </div>
    </div>
)

export default HomeSubLayout;