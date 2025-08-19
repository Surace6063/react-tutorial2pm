import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="border-b border-slate-500 p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="text-2xl font-bold">Logo</div>

        <nav>
            <ul className="flex gap-10 text-lg font-semibold items-center">
                <Link to="/">
                   <li>Home</li> 
                </Link>
                
                <Link to='/products'>
                   <li>products</li>
                </Link>

                <Link to="/cart">
                   <li>cart</li>
                </Link>
            </ul>
        </nav>
        </div>
    </div>
  )
}
export default Navbar