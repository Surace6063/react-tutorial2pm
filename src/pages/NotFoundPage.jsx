import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
    const nagivate = useNavigate()

    // const handleNavigate = () => nagivate('/')
 

  return (
    <div>
        404 Not Found Page
        <button onClick={() => nagivate('/')} className="bg-teal-600 text-white px-4 py-2 rounded-md">
            go back to home page
        </button>
    </div>
  )
}
export default NotFoundPage