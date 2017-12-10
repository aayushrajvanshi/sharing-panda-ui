import React, { Component } from 'react';
import FundraiserCard from '../../components/Fundraiser/FundraiserCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import { fetchFundraisers } from '../../actions';

class BrowseFundraiserPage extends Component {
  componentDidMount() {
    this.props.fetchFundraisers();
  }

  head() {
    return (
      <Helmet>
        <meta property="og:title" content="CrowdFunding App" />
      </Helmet>
    );
  }

  render() {
    let { fundraisers } = this.props;
    return (
      <div>
        {this.head()}
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-small uk-grid-match uk-flex" data-uk-grid>
              {fundraisers && fundraisers.map((fundraiser) => {
                return <div key={fundraiser._id}>
                  <FundraiserCard id={fundraiser._id} {...fundraiser}></FundraiserCard>
                </div>;
              })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fundraisers: state.fundraisers.docs
  }
}

const loadData = (store) => {
  return store.dispatch(fetchFundraisers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchFundraisers })(BrowseFundraiserPage)
};
