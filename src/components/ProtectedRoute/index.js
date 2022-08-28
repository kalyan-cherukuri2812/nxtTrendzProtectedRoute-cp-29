import {Route, Redirect} from 'react-router-dom'
import cookies from 'js-cookie'

const ProtectedRoute = props => {
  if (cookies.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
