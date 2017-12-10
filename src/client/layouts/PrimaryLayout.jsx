import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Components
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

//Sub Layouts 
import HomeSubLayout from '../layouts/HomeSubLayout';
import UserSubLayout from '../layouts/UserSubLayout';
import FundraiserSubLayout from '../layouts/FundraiserSubLayout';
import DonationSubLayout from '../layouts/DonationSubLayout';
import PetitionSubLayout from '../layouts/PetitionSubLayout';
import SupportSubLayout from '../layouts/SupportSubLayout';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children
    }
}

const PrimaryLayout = ({ match }) => (
    <div className="primary-layout">
        <Header />
        <main>
            <Switch>
                <ScrollToTop>
                    <Route path='/' component={HomeSubLayout} />
                    <Route path='/fundraisers' component={FundraiserSubLayout} />
                    <Route path='/donations' component={DonationSubLayout} />
                    <Route path='/petitions' component={PetitionSubLayout} />
                    <Route path='/support' component={SupportSubLayout} />
                    <Route path='/user' component={UserSubLayout} />
                </ScrollToTop>
            </Switch>
        </main>
        <Footer />
    </div>
)

export default PrimaryLayout