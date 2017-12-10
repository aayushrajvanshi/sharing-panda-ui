import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '../Common/Button';
import img1 from '../../../public/assets/images/img5.jpg';
import './styles/_fundraiserCard.scss';

const FundraiserCard = ({ match, fundraiser_id, id, title, description, author }) => {
    return (
        <div className="campaign-card">
            <div className="card-image">
                <Link to={`${match.path}/${fundraiser_id}`}>
                    <div className="uk-background-cover uk-height-medium" style={{ 'backgroundImage': 'url(' + img1 + ')' }}>
                    </div>
                </Link>
                <div className="category">
                    <span>Wildlife Conservation</span>
                </div>
            </div>
            <div className="social">
                <span><i className="fa fa-facebook"></i></span>
                <span><i className="fa fa-whatsapp"></i></span>
            </div>
            <div className="campaign-info">
                <p>{title}</p>
                <span>by</span>
                {<span>{`${author.first_name}  ${author.last_name}`}</span>}
                <p>{description}</p>
            </div>
            <div className="campaign-progress">
                <span>
                    <p>Raised </p>
                    <i className="fa fa-inr"></i>
                    <p> 5,60,400</p>
                </span>
                <span><p>56%</p></span>
                <progress id="progressbar" className="uk-progress" value="55" max="100"></progress>
            </div>
            <hr />
            <div className="campaign-status">
                <div className="goal">
                    <i className="fa fa-inr"></i>
                    <span>10,00,000</span>
                    <p>goal</p>
                </div>
                <div className="supporter">
                    <i className="fa fa-heart"></i>
                    <span>145</span>
                    <p>supporters</p>
                </div>
                <div className="days">
                    <i className="fa fa-clock-o"></i>
                    <span>26</span>
                    <p>days left</p>
                </div>
            </div>
        </div >
    );
}

export default withRouter(FundraiserCard);