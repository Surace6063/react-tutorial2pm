import { Navigate } from "react-router-dom"

const ProtectedRoute = () => {
    const isAuthenticated = true
  return !isAuthenticated && <Navigate to='/login' />
}
export default ProtectedRoute