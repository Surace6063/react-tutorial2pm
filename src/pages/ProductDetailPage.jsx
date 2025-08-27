import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const ProductDetailPage = () => {

    const {id} = useParams()

     const {data:product,isLoading,isError,error} = useQuery({
        queryKey: ['product',id],
        queryFn: async () => {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            return response.data
        }
    })

  return (
    <div>
        {
            isLoading ? "loading....":
            isError ? <p>{error.message}</p>:
            <div className="max-w-6xl mx-auto px-3 flex gap-10 items-center my-20">
                <img src={product.images[0]} alt={product.title} className="h-[60vh] rounded-b-md" />

                <div>
                    <h1 className="text-2xl text-slate-800">{product.title}</h1>
                    <p className="text-slate-500 text-lg">${product.price}</p>

                    <h3 className="text-xl font-semibold mb-2 mt-4">Description</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        }
    </div>
  )
}
export default ProductDetailPage