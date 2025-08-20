import axios from "axios";
import { useEffect, useState } from "react";
import { ShoppingCart } from 'lucide-react';

const ProductPage = () => {

const [products,setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    //calling fetchProducts function
    fetchProducts()
  }, [])

  console.log(products);


  return (
    <div className="max-w-6xl mx-auto my-10 grid grid-cols-4 gap-6">
      {
        products?.map(item => (
          <div key={item.id}>
            <img src={item.images[0]} alt={item.title} className="mb-4 rounded-md" loading="lazy" />
            <h2 className="text-slate-800 font-medium truncate">{item.title}</h2>
            <p className="text-sm text-slate-400 my-2">${item.price}</p>
            <button 
            className="bg-slate-800 text-white py-2 w-full rounded-md flex items-center gap-1 justify-center">
              Add to cart
              <ShoppingCart size={20} />
            </button>
          </div>
        ))
      }
    </div>
  )
}
export default ProductPage