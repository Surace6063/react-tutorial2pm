import { useParams } from "react-router-dom"

const SingleProductPage = () => {
  const {id} = useParams()


  return (
    <div>SingleProductPage: {id}</div>
  )
}
export default SingleProductPage