import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import { useDispatch, useSelector } from "react-redux"
import { loginSucess } from "../redux/authSlice"

const Homepage = () => {
  const {count,increment} = useContext(CounterContext)

  const dispatch = useDispatch()

  const {user, isAuthenticated} = useSelector(state => state.auth)
  
  console.log(isAuthenticated);

  const handleLogin = () => {
    dispatch(loginSucess("John Doe"))
  }

  return (
    <div className="p-10">This is Home page. count: {count}
     <button onClick={increment}>add</button>

     <div>
      <p>Username: {user}</p>
     </div>

     <div>
        <button onClick={handleLogin} className="bg-teal-700 text-white px-4 py-2 rounded-b-md cursor-pointer">
          login
        </button>
     </div>

     <p>
      {isAuthenticated ? "User is loggedIn" : "User is not loggedIn."}
     </p>
    </div>
  )
}
export default Homepage