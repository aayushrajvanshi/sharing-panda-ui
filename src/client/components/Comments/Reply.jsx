import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            toggleReplyBox: false,
            viewReplies: true
        }

    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleReplyClick = (e) => {
        this.setState({
            toggleReplyBox: !this.state.toggleReplyBox
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state;
        if (data.text) {
            axios({
                method: 'post',
                url: `/api/v1/comments/${this.props._id}`,
                data: data
            })
                .then((comment) => {
                    this.resetForm();
                    this.setState({
                        toggleReplyBox: false
                    })
                    console.log('Replied.');
                });
        }
    }


    resetForm = () => {
        this.setState({
            'text': ''
        })
    }

    render() {
        let { text, comment_date, commentor } = this.props;
        return (
            <li>
                <article className="uk-comment uk-comment-secondary uk-visible-toggle">
                    <header className="uk-comment-header uk-position-relative">
                        <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                            <div className="uk-width-auto">
                                <img className="uk-border-circle" src="http://lorempixel.com/80/80" width="80" height="80" alt="" />
                            </div>
                            <div className="uk-width-expand">
                                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">{`${commentor.first_name} ${commentor.last_name}`}</a></h4>
                                <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">{moment(comment_date).fromNow()}</a></p>
                            </div>
                        </div>
                        <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                    </header>
                    <div className="uk-comment-body">
                        <p>{text}</p>
                    </div>
                </article>
            </li>
        );
    }
}

export default Reply;