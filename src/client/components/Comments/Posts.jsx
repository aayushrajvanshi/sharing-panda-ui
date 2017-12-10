import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Reply from './Reply';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            user_id: '5a0323ac19b7ef276cda8b5e',
            fundraiser_id: this.props.match.params.fundraiserId,
            toggleReplyBox: false,
            viewReplies: false,
            viewReplyRequested: false,
            replies: []
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
            text: ''
        })
    }

    handleViewReplyClick = (e) => {
        e.preventDefault();
        this.setState({
            viewReplyRequested: true
        }, () => {
            axios({
                method: 'get',
                url: `/api/v1/comments/${this.props._id}`
            })
                .then((comment) => {
                    this.setState({
                        replies: comment.data.replies,
                        viewReplies: true
                    })
                });
        })

    }


    render() {
        let { _id, text, comment_date, commentor } = this.props;
        let { toggleReplyBox, viewReplies, viewReplyRequested, replies } = this.state;
        return (
            <li>
                <article className="uk-comment uk-visible-toggle">
                    <header className="uk-comment-header uk-position-relative">
                        <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                            <div className="uk-width-auto">
                                <img className="uk-border-circle" src="http://lorempixel.com/80/80" width="80" height="80" alt="" />
                            </div>
                            <div className="uk-width-expand">
                                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset">{`${commentor.first_name} ${commentor.last_name}`}</a></h4>
                                <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset">{moment(comment_date).fromNow()}</a></p>
                            </div>
                        </div>
                        <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" onClick={this.handleReplyClick} >Reply</a></div>
                    </header>
                    <div className="uk-comment-body">
                        <p>{text}</p>
                    </div>
                    <button className="uk-button uk-buttom-primary" onClick={this.handleViewReplyClick}>View Replies</button>
                </article>
                {toggleReplyBox ? <div className="uk-margin">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin">
                                <textarea id="text" name="text" className="uk-textarea" rows="5" value={this.state.text} placeholder="Reply..." onChange={this.handleInputChange} onBlur={this.handleReplyClick}></textarea>
                            </div>
                            <button className="uk-button uk-button-primary">Post</button>
                        </fieldset>
                    </form>
                </div> : null}
                {viewReplyRequested ? viewReplies ? <ul>
                    {replies && replies.map(reply => <Reply key={reply._id} {...reply} />)}
                </ul> : <div>Spinner</div> : null}

            </li>
        );
    }
}

export default withRouter(Posts);