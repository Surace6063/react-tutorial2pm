import axios from "axios";
import { useEffect, useState } from "react";
import { ShoppingCart } from 'lucide-react';
import {Link} from 'react-router-dom'

const ProductPage = () => {

const [products,setProducts] = useState(null)
const [isLoading,setIsLoading] = useState(false)
const [error,setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setError('')
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        setError(error)
      }finally{
        setIsLoading(false)
      }
    }
    //calling fetchProducts function
    fetchProducts()
  }, [])

  console.log(products);


  return (
    <div className="max-w-6xl mx-auto my-10 grid grid-cols-4 gap-6">
      {
        isLoading ? "loading..." :
        error ? "Something went wrong!":
        products?.map(item => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <img src={item.images[0]} alt={item.title} className="mb-4 rounded-md" loading="lazy" />
            <h2 className="text-slate-800 font-medium truncate">{item.title}</h2>
            <p className="text-sm text-slate-400 my-2">${item.price}</p>
            <button 
            className="bg-slate-800 text-white py-2 w-full rounded-md flex items-center gap-1 justify-center">
              Add to cart
              <ShoppingCart size={20} />
            </button>
          </Link>
        ))
      }
    </div>
  )
}
export default ProductPage