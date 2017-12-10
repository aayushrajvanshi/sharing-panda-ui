import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './styles/_footer.scss';
import logo from '../../../public/assets/images/sharing-panda-logo.svg';

const Footer = ({ match }) => (
    <footer id="footer">
        <div className="uk-section uk-section-primary">
            <div className="uk-container">
                <div className="uk-flex uk-flex-center uk-margin-medium">
                    <div className="footer-list uk-text-center">
                        <p>CONNECT WITH US</p>
                        <ul className="icon-list">
                            <li><a href="" className="uk-icon-button" data-uk-icon="icon: twitter"></a></li>
                            <li><a href="" className="uk-icon-button" data-uk-icon="icon: facebook"></a></li>
                            <li><a href="" className="uk-icon-button" data-uk-icon="icon: google-plus"></a></li>
                            <li><a href="" className="uk-icon-button" data-uk-icon="icon: whatsapp"></a></li>
                            <li><a href="" className="uk-icon-button" data-uk-icon="icon: youtube"></a></li>
                        </ul>
                    </div>
                </div>
                <div className="uk-grid-small uk-flex uk-flex-center" data-uk-grid>
                    <div className="footer-list uk-width-1-5@m">
                        <p>Fundraise</p>
                        <ul className="other-list">
                            <li> <a href="#">Movie & Film Projects </a></li>
                            <li> <a href="#">Music Projects</a></li>
                            <li> <a href="#">Other Entrepreneurial Projects</a></li>
                            <li> <a href="#">Fundraising for NGOs</a></li>
                            <li> <a href="#">Personal Causes</a></li>
                            <li> <a href="#">Crowdfunding for Education</a></li>
                        </ul>
                    </div>
                    <div className="footer-list uk-width-1-5@m">
                        <p>How it works</p>
                        <ul className="other-list">
                            <li> <a href="#">NGOS</a></li>
                            <li> <a href="#">Corporates</a></li>
                            <li> <a href="#">Individuals</a></li>
                        </ul>
                    </div>
                    <div className="footer-list uk-width-1-5@m">
                        <p>About Us</p>
                        <ul className="other-list">
                            <li><NavLink to="/support/team-sharing-panda" target="_self">Team Sharing Panda</NavLink></li>
                            <li> <a href="#">Our Partners</a></li>
                            <li> <a href="#">Careers</a></li>
                            <li> <a href="#">Press Club</a></li>
                            <li> <a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-list uk-width-1-5@m">
                        <p>Support</p>
                        <ul className="other-list">
                            <li><NavLink to="/support/faqs" target="_self">FAQs</NavLink></li>
                            <li><NavLink to="/support/fundraising-tips" target="_self">Fundraising Tips</NavLink></li>
                            <li><a href="#">Fundraiser Video</a></li>
                            <li><a href="#">Project Handbook</a></li>
                            <li><a href="#">Plans & Pricing</a></li>
                            <li><a href="#">Payouts</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Trust & Safety</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer >
);

export default withRouter(Footer);