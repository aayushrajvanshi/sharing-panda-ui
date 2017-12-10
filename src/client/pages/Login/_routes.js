import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'

export default [{
    ...LoginPage,
    path: '/login',
    exact: true
}, {
    ...SignUpPage,
    path: '/signup'
}]