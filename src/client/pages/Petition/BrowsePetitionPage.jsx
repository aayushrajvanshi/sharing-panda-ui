import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PetitionCard from '../../components/Petition/PetitionCard';
import Spinner from '../../components/Common/Spinner';
import { API_BASE_URL } from '../../constants';
import { fetchPetitions } from '../../actions';

class BrowsePetitionPage extends Component {
    componentDidMount() {
        this.props.fetchPetitions();
    }
    render() {
        let { petitions } = this.props;
        return (
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid" data-uk-grid>
                        <div className="uk-width-2-3@m">
                            <ul className="uk-subnav uk-subnav-pill" data-uk-switcher="animation: uk-animation-fade">
                                <li><a href="#">Featured</a></li>
                                <li><a href="#">Popular</a></li>
                                <li><a href="#">Recent</a></li>
                                <li><a href="#">My Petitions</a></li>
                            </ul>

                            <ul className="uk-switcher uk-margin">
                                <li>
                                    {
                                        petitions.isFetching
                                            ? <div className="uk-flex uk-flex-center uk-flex-middle uk-height-medium">
                                                <Spinner />
                                            </div>
                                            :
                                            <div>
                                                {petitions.data && petitions.data.length > 0
                                                    ? petitions.data.map((petition) => {
                                                        return <div key={petition._id}>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                        </div>;
                                                    })
                                                    : <h3 className="uk-text-center">No Petitions Found</h3>
                                                }
                                            </div>
                                    }
                                </li>
                                <li>
                                    {
                                        petitions.isFetching
                                            ? <div className="uk-flex uk-flex-center uk-flex-middle uk-height-medium">
                                                <Spinner />
                                            </div>
                                            :
                                            <div>
                                                {petitions.data && petitions.data.length > 0
                                                    ? petitions.data.map((petition) => {
                                                        return <div key={petition._id}>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                        </div>;
                                                    })
                                                    : <h3 className="uk-text-center">No Petitions Found</h3>
                                                }
                                            </div>
                                    }
                                </li>
                                <li>
                                    {
                                        petitions.isFetching
                                            ? <div className="uk-flex uk-flex-center uk-flex-middle uk-height-medium">
                                                <Spinner />
                                            </div>
                                            :
                                            <div>
                                                {petitions.data && petitions.data.length > 0
                                                    ? petitions.data.map((petition) => {
                                                        return <div key={petition._id}>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                        </div>;
                                                    })
                                                    : <h3 className="uk-text-center">No Petitions Found</h3>
                                                }
                                            </div>
                                    }
                                </li>
                                <li>
                                    {
                                        petitions.isFetching
                                            ? <div className="uk-flex uk-flex-center uk-flex-middle uk-height-medium">
                                                <Spinner />
                                            </div>
                                            :
                                            <div>
                                                {petitions.data && petitions.data.length > 0
                                                    ? petitions.data.map((petition) => {
                                                        return <div key={petition._id}>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="uk-flex-middle" data-uk-grid>
                                                                <div className="uk-width-2-3@m">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                </div>
                                                                <div className="uk-width-1-3@m uk-flex-first">
                                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                                </div>
                                                            </div>
                                                        </div>;
                                                    })
                                                    : <h3 className="uk-text-center">No Petitions Found</h3>
                                                }
                                            </div>
                                    }
                                </li>

                            </ul>
                        </div>
                        <div className="uk-width-1-3@m">
                            <Link to="/start-petition"><button className="uk-button uk-button-primary uk-button-large uk-width-1-1">Start a Petition</button></Link>
                            <div className="uk-margin-small-top">
                                {petitions.data && petitions.data.length > 0
                                    ? petitions.data.map((petition) => {
                                        return <div key={petition._id}>
                                            <div className="uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-2-3@m">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                </div>
                                                <div className="uk-width-1-3@m uk-flex-first">
                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                </div>
                                            </div>
                                            <div className="uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-2-3@m">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                </div>
                                                <div className="uk-width-1-3@m uk-flex-first">
                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                </div>
                                            </div>
                                            <div className="uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-2-3@m">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                </div>
                                                <div className="uk-width-1-3@m uk-flex-first">
                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                </div>
                                            </div>
                                            <div className="uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-2-3@m">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                </div>
                                                <div className="uk-width-1-3@m uk-flex-first">
                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                </div>
                                            </div>
                                            <div className="uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-2-3@m">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                </div>
                                                <div className="uk-width-1-3@m uk-flex-first">
                                                    <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
                                                </div>
                                            </div>
                                        </div>;
                                    })
                                    : <h3 className="uk-text-center">No Petitions Found</h3>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        petitions: state.petitions
    }
}

const loadData = (store) => {
    return store.dispatch(fetchPetitions());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchPetitions })(BrowsePetitionPage)
};