import { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const { count } = useContext(CounterContext);

  const disptach = useDispatch()

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    disptach(logout())
  }

  return (
    <div className="border-b border-slate-500 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold">Logo</div>

        <nav>
          <ul className="flex gap-10 text-lg font-semibold items-center">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/products">
              <li>products</li>
            </Link>

            <Link to="/cart">
              <li>cart ({count})</li>
            </Link>

             <Link to="/login">
                  <li>
                  <button>login</button>
                </li>
              </Link>

            {isAuthenticated ? 
              <>
                <li>{user}</li>
                <li>
                  <button onClick={handleLogout}>logout</button>
                </li>
              </>
             : 
              <>
               

                <li>
                  <button className="border border-slate-600 px-4 py-2 rounded-md">
                    register
                  </button>
                </li>
              </>
            }
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
