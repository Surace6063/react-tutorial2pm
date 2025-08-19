import { Navigate } from "react-router-dom"

const ProtectedRoute = () => {
    const isAuthenticated = false
  return !isAuthenticated && <Navigate to='/login' />
}
export default ProtectedRoute