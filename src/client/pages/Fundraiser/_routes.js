import BrowseFundraiserPage from './BrowseFundraiserPage'
import FundraiserDetailPage from './FundraiserDetailPage'
import AddFundraiserPage from './AddFundraiserPage'

export default [{
    ...AddFundraiserPage,
    path: '/fundraisers/start-fundraiser'
}, {
    ...FundraiserDetailPage,
    path: '/fundraisers/:fundraiserId'
}, {
    ...BrowseFundraiserPage,
    path: '/fundraisers'
}]