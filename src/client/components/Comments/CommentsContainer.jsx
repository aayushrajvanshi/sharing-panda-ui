import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Posts from './Posts';

class CommentsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            user_id: '5a0323a019b7ef276cda8b5d',
            fundraiser_id: this.props.match.params.fundraiserId
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state;
        if (data.text) {
            axios({
                method: 'post',
                url: '/api/v1/comments',
                data: data
            })
                .then((comment) => {
                    this.resetForm();
                    console.log('Comment Added Successfully');
                });
        }

    }

    resetForm = () => {
        this.setState({
            'text': ''
        })
    }

    render() {
        let { comments } = this.props;
        return (
            <div className="comments-container">
                <div className="comment-post">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin">
                                <textarea id="text" name="text" className="uk-textarea" rows="5" value={this.state.text} placeholder="Write Comment..." onChange={this.handleInputChange}></textarea>
                            </div>
                            <button className="uk-button uk-button-primary">Post</button>
                        </fieldset>
                    </form>
                    <hr className="uk-divider-icon" />
                    <div className="uk-margin">
                        <div className="uk-comment-list">
                            {comments && comments.map(comment => <Posts key={comment._id} {...comment} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CommentsContainer);