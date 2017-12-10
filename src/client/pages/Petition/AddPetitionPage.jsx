import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import './styles/_addPetition.scss';

let quill;
class AddPetitionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            story: ''
        }
    }

    head() {
        return (
            <Helmet>
                <title>Start a Petition | SharingPanda.org</title>
            </Helmet>
        );
    }
    componentDidMount() {
        if (typeof window !== undefined) {
            let toolbarOptions = [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean']
            ];

            quill = new Quill('#story', {
                modules: {
                    toolbar: toolbarOptions
                },
                placeholder: 'Write your story...',
                theme: 'snow'
            });
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let story = quill.getContents();
        this.setState({
            story: JSON.stringify(story)
        }, function () {
            let data = this.state;
            axios({
                method: 'post',
                url: '/api/petitions',
                data: data
            })
                .then((petitions) => {
                    console.log('Petition Added Successfully');
                });
        });
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div id="add-petition">
                {this.head()}
                <section className="uk-section uk-padding-medium">
                    <div className="uk-container uk-container-small">
                        <ul className="uk-subnav uk-subnav-pill" data-uk-switcher="animation: uk-animation-fade">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                        </ul>
                        <ul className="uk-switcher uk-margin">
                            <li id="step-1">
                                <div className="form">
                                    <h1>Write your petition title</h1>
                                    <p>This is the first thing people will see about your petition. Get their attention with a short title that focusses on the change you’d like them to support.</p>
                                    <textarea className="uk-textarea" name="" id="" placeholder="What do you want to achieve"></textarea>
                                    <button className="uk-button uk-button-primary" data-uk-switcher-item="next">Continue</button>
                                </div>
                                <div className="tips">
                                    <p className="tip">Keep it short and to the point</p>
                                    <p className="tip-example">Example: "Buy organic, free-range eggs for your restaurants"
                <br />Not: "Stop the inhumane treatment of chickens in battery farms that are force-fed..."</p>
                                    <p className="tip">Focus on the solution</p>
                                    <p className="tip-example">Example: "Raise the minimum wage in to 300₹ a day"
                <br />Not: "Stop rising income inequality"</p>
                                    <p className="tip">Communicate urgency</p>
                                    <p className="tip-example">Example: "Approve life-saving medication for my daughter's insurance before it’s too late"</p>
                                </div>
                            </li>
                            <li id="step-2">
                                <div className="form">
                                    <h1>Choose a decision maker</h1>
                                    <p>This is the person, organisation, or group that can make a decision about your petition. Change.org will send them updates on your petition and encourage a response.</p>
                                    <textarea className="uk-textarea" name="" id="" placeholder="What do you want to achieve"></textarea>
                                    <button className="uk-button uk-button-primary" data-uk-switcher-item="next">Continue</button>
                                </div>
                                <div className="tips">
                                    <p className="tip">Choose someone who can give you what you want</p>
                                    <p className="tip-example">You might need to do some research to find the right person who can make or influence the decision.</p>
                                    <p className="tip">Don't go straight to the top</p>
                                    <p className="tip-example">You might see faster results if you choose a more junior person who is petitioned less often than more recognisable figures.</p>
                                    <p className="tip">Choose someone you can work with</p>
                                    <p className="tip-example">Your petition is most likely to win by reaching an agreement with your decision maker.</p>
                                </div>
                            </li>
                            <li id="step-3">
                                <div className="form">
                                    <h1>Explain the problem you want to solve</h1>
                                    <p>People are more likely to support your petition if it’s clear why you care. Explain how this change will impact you, your family, or your community.</p>
                                    <div id="story" name="story" className="uk-height-medium uk-margin-small-bottom" />
                                    <button className="uk-button uk-button-primary" data-uk-switcher-item="next">Save and Continue</button>
                                </div>
                                <div className="tips">
                                    <p className="tip">Describe the people involved and the problem they are facing</p>
                                    <p className="tip-example">Readers are most likely to take action when they understand who is affected.</p>
                                    <p className="tip">Describe the solution</p>
                                    <p className="tip-example">Explain what needs to happen and who can make the change. Make it clear what happens if you win or lose.</p>
                                    <p className="tip">Make it personal</p>
                                    <p className="tip-example">Respect others</p>
                                </div>
                            </li>
                            <li id="step-4">
                                <div className="form">
                                    <h1>Add a photo or video</h1>
                                    <p>Petitions with a photo or video receive six times more signatures than those without. Include one that captures the emotion of your story.</p>
                                    <div className="js-upload uk-placeholder uk-text-center">
                                        <span data-uk-icon="icon: cloud-upload"></span>
                                        <span className="uk-text-middle">Attach binaries by dropping them here or </span>
                                        <div data-uk-form-custom>
                                            <input type="file" multiple />
                                            <span className="uk-link">selecting one</span>
                                        </div>
                                    </div>

                                    <progress id="js-progressbar" className="uk-progress" value="0" max="100" hidden></progress>
                                    <button className="uk-button uk-button-primary">Save and Preview</button>
                                </div>
                                <div className="tips">
                                    <p className="tip">Choose a photo that captures the emotion of your petition</p>
                                    <p className="tip-example">Photos of people or animals work well.</p>
                                    <p className="tip">Try to upload photos that are 1600 x 900 pixels or larger</p>
                                    <p className="tip-example">Large photos look good on all screen sizes.</p>
                                    <p className="tip">Keep it friendly for all audiences</p>
                                    <p className="tip-example">Make sure your photo doesn't include graphic violence or sexual content.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default {
    component: connect(mapStateToProps)(AddPetitionPage)
};