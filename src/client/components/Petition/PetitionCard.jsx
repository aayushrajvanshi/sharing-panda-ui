import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import img1 from '../../../public/assets/images/img5.jpg';
import './styles/petition-card.scss';

const PetitionCard = ({ match, id, title, description, author }) => (
    <div className="petition-card">
        <div className="bookmark">
            <i className={false ? "fa fa-heart" : "fa fa-heart-o"}></i>
        </div>
        <Link to={`${match.path}/${id}`}>
            <div className="petition-image">
                <img src={img1} alt="Petition Image" />
            </div>
        </Link>
        <div className="petition-info">
            <div className="petition-title">
                {title}
            </div>
            <div className="petitioner">
                <img src="https://api.adorable.io/avatars/200/excite.png" width="30" height="30" alt="Border circle" />
                <span> by</span>
                <span>{`${author.first_name}  ${author.last_name}`}</span>
            </div>
            <div className="petition-description">
                {description}
            </div>
        </div>
        <hr className="uk-divider" />
        <div className="petition-status">
            <div className="supporter">
                <i className="fa fa-heart"></i>
                <span>145</span>
                <p>supporters</p>
            </div>
        </div>
    </div>
);

export default withRouter(PetitionCard);