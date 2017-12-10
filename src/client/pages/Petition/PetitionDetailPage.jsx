import React, { Component } from 'react';
import axios from 'axios';

class PetitionDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petition: {}
        }
    }

    componentDidMount() {
        if (typeof window !== undefined) {
            let quill = new Quill('#story', {
                theme: 'bubble'
            });
            quill.enable(false);

            axios({
                method: 'get',
                url: `/api/petitions/${this.props.match.params.petitionId}`
            })
                .then((petition) => {
                    this.setState({
                        petition: petition.data
                    }, () => {
                        quill.setContents(JSON.parse(this.state.petition.story));
                    })
                });
        }
    }
    render() {
        let { petition } = this.state;
        return (
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <h2>{petition.title}</h2>
                    <p>{petition.description}</p>
                    <div id="story" />
                </div>
            </div>
        );
    }
}

export default {
    component: PetitionDetailPage
};