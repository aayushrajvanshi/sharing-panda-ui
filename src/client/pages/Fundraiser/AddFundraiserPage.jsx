import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../constants';
import { addFundraiser } from '../../actions';

let quill;
class AddFundraiserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fundraiser_id: '',
            title: '',
            description: '',
            story: ''
        }
    }

    componentDidMount() {
        if (typeof window !== undefined) {
            let toolbarOptions = [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['link', 'image', 'video'],
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
                url: '/api/fundraisers',
                data: data
            })
                .then((fundraisers) => {
                    console.log('Fundraiser Added Successfully');
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
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset className="uk-fieldset">
                            <legend className="uk-legend">Legend</legend>
                            <div className="uk-margin">
                                <input id="fundraiser_id" name="fundraiser_id" className="uk-input" type="text" placeholder="Fundraiser Unique Id" onChange={this.handleInputChange} />
                            </div>
                            <div className="uk-margin">
                                <input id="title" name="title" className="uk-input" type="text" placeholder="Title" onChange={this.handleInputChange} />
                            </div>
                            <div className="uk-margin">
                                <textarea id="description" name="description" className="uk-textarea" rows="5" placeholder="Description" onChange={this.handleInputChange}></textarea>
                            </div>
                            <div className="uk-margin">
                                <div id="story" name="story" className="uk-height-large" />
                            </div>
                            <button className="uk-button uk-button-primary">Submit</button>
                        </fieldset>
                    </form>
                </div>
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
    component: connect(mapStateToProps)(AddFundraiserPage)
};