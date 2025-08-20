import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import ProductPage from "./pages/ProductPage"
import Cartpage from "./pages/Cartpage"
import SingleProductPage from "./pages/SingleProductPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProtectedRoute from "./utils/ProtectedRoute"
import LoginPage from "./pages/LoginPage"
import MainLayout from "./utils/MainLayout"


const App = () => {
  return (
    <div>
      <Routes>


        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cartpage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/product/:id" element={<SingleProductPage />} />

        {/* error page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
export default App