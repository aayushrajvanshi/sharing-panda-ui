import React, { Component } from 'react';;
import { NavLink } from 'react-router-dom'
import CommentsContainer from '../../components/Comments/CommentsContainer';
import DonationContainer from '../../components/Donation/DonationContainer';
import img1 from '../../../public/assets/images/img1.jpg';
import axios from 'axios';
import { API_BASE_URL } from './../../../constants';
// import Quill from 'quill';

class FundraiserDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fundraiser: {}
        }
    }

    componentDidMount() {
        var tour = new Tour({
            steps: [
                {
                    element: "#title",
                    title: "Title of my step",
                    content: "Content of my step",
                    placement: "right",
                    smartPlacement: true
                },
                {
                    element: "#donation",
                    title: "Title of my step",
                    content: "Content of my step",
                    placement: "bottom",
                    smartPlacement: true
                }
            ],
            container: "body",
            smartPlacement: true,
            keyboard: false,
            debug: false,
            backdrop: true,
            backdropContainer: 'body',
            backdropPadding: 40,
            redirect: true,
            orphan: false,
            duration: false,
            delay: false,
            basePath: "",
            template: `<div class='popover tour'>
              <div class='arrow'></div>
              <h3 class='popover-title'></h3>
              <div class='popover-content'></div>
              <div class='popover-navigation'>
                  <button class='btn btn-default' data-role='prev'>« Prev</button>
                  <span data-role='separator'>|</span>
                  <button class='btn btn-default' data-role='next'>Next »</button>
              </div>
              <button class='btn btn-default' data-role='end'>End tour</button>
            </div>`
        });

        // Initialize the tour
        tour.init();
        // Start the tour
        tour.start();
        let quill;
        if (typeof window !== undefined) {
            quill = new Quill('#story', {
                theme: 'bubble'
            });
            quill.enable(false);
        }

        axios({
            method: 'get',
            url: `${API_BASE_URL}/fundraisers/${this.props.match.params.fundraiserId}`
        })
            .then((fundraiser) => {
                this.setState({
                    fundraiser: fundraiser.data
                }, () => {
                    quill.setContents(JSON.parse(this.state.fundraiser.story));
                })
            });
    }

    render() {
        let { fundraiser } = this.state;
        return (
            <div className="uk-container uk-container-small">
                <div className="uk-section">
                    <h2 id="title" className="uk-margin-remove-bottom">{fundraiser.title}</h2>
                    <p>{fundraiser.description}</p>
                    <div className="uk-background-cover uk-height-large" style={{ 'backgroundImage': 'url(' + img1 + ')' }}>
                    </div>
                    <div className="uk-h4">Story</div>
                    <div id="story" />

                    <div id="post" className="uk-h4">
                        Posts
                    <CommentsContainer {...fundraiser} />
                    </div>
                    <div id="donation" className="uk-h4">Donations
                    <DonationContainer {...fundraiser} />
                    </div>
                    <NavLink style={{ 'color': 'black' }} to='/donations' activeClassName="uk-active">
                        <button className="uk-button uk-button-primary" id="donate">Donate Now</button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default {
    component: FundraiserDetailPage
};