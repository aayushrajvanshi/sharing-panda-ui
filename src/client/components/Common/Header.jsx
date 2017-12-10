import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './styles/_header.scss';
import { connect } from 'react-redux';
import logo from '../../../public/assets/images/logo.svg';
import profile from '../../../public/assets/images/profile.jpg';
import LoginForm from '../Login/LoginForm';
import SignUpForm from '../Login/SignUpForm';

const Header = ({ auth }) => (
    <header>
        <nav className="uk-navbar-container uk-navbar-default" data-uk-navbar="mode: click">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-logo">
                        <NavLink to='/' exact>
                            <img src={logo} width="250" height="160" alt="" />
                        </NavLink>
                    </li>
                    <li className="uk-visible@m">
                        <NavLink to='/start-petition'>Start Petition</NavLink>
                    </li>
                    <li className="uk-visible@m">
                        <NavLink to='/petitions'>Browse</NavLink>
                    </li>
                </ul>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li className="uk-visible@m"><a><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    {auth
                        ? <li className="uk-visible@m">
                            <a><i className="fa fa-bell-o" aria-hidden="true"></i></a>
                            <div className="uk-text-center uk-width-large" data-uk-dropdown="mode: click; pos: bottom-center">
                                <h4>You don't have any notifications.</h4>
                                <p>When there is activity on a petition you support, you will see it here. Meanwhile, you can browse Change.org to find other petitions you want to support.</p>
                                <Link to="/petitions" target="_self"><h4 className="uk-link">Discover Petitions</h4></Link>
                            </div>
                        </li>
                        : null
                    }
                    {auth
                        ? <li className="uk-visible@m">
                            <a><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><Link to={`/user/${auth._id}`} target="_self">Profile</Link></li>
                                    <li><Link to={`/user/${auth._id}/settings`} target="_self">Settings</Link></li>
                                    <li><Link to={`/user/${auth._id}`} target="_self">My Petitions</Link></li>
                                    <li className="uk-nav-divider"></li>
                                    <li><a className="uk-text-bold">{auth.google.name}</a></li>
                                    <li><a href="/api/logout" target="_self">Log Out</a></li>
                                </ul>
                            </div>
                        </li>
                        : <li className="uk-visible@m"><a data-uk-toggle="target: #login-modal">Log In</a></li>
                    }
                    {auth
                        ? <li className="uk-hidden@m">
                            <a><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Settings</a></li>
                                    <li><a href="#">Start Petition</a></li>
                                    <li><a href="#">My Petitions</a></li>
                                    <li><a href="#">Search</a></li>
                                    <li className="uk-nav-divider"></li>
                                    <li><a className="uk-text-bold">{auth.google.name}</a></li>
                                    <li><a href="/api/logout" target="_self">Log Out</a></li>
                                </ul>
                            </div>
                        </li>
                        : <li className="uk-hidden@m">
                            <a><i className="fa fa-bars" aria-hidden="true"></i></a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><Link to="/start-petition" target="_self">Start Petition</Link></li>
                                    <li><Link to="/petitions" target="_self">Browse Petition</Link></li>
                                    <li><a href="#">Search</a></li>
                                    <li><a data-uk-toggle="target: #login-modal">Log In</a></li>
                                </ul>
                            </div>
                        </li>
                    }
                    <div id="login-modal" className="uk-flex-top" data-uk-modal>
                        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                            <LoginForm />
                        </div>
                    </div>
                    <div id="sign-up-modal" className="uk-flex-top" data-uk-modal>
                        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                            <SignUpForm />
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    </header>
)

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);