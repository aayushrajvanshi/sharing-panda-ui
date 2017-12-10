import BrowsePetitionPage from './BrowsePetitionPage'
import PetitionDetailPage from './PetitionDetailPage'
import AddPetitionPage from './AddPetitionPage'

export default [{
    ...AddPetitionPage,
    path: '/start-Petition'
}, {
    ...PetitionDetailPage,
    path: '/petitions/:petitionId'
}, {
    ...BrowsePetitionPage,
    path: '/petitions'
}]