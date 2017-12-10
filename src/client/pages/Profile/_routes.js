import ViewProfilePage from './ViewProfilePage';
import EditProfilePage from './EditProfilePage';
import UserSettingsPage from './UserSettingsPage';

export default [{
    ...EditProfilePage,
    path: '/user/:id/edit',
}, {
    ...UserSettingsPage,
    path: '/user/:id/settings'
}, {
    ...ViewProfilePage,
    path: '/user/:id'
}]