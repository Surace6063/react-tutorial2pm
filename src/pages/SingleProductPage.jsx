import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CounterContext } from "../context/CounterContext";

const SingleProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { count, increment,decrement } = useContext(CounterContext);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    //calling fetchProducts function
    fetchProduct();
  }, []);

  console.log(product);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1>{product?.title}</h1>
      {/* <img src={product?.images[0]} alt={product?.title} className="mb-4 rounded-md" loading="lazy" /> */}
      <button onClick={increment} className="bg-teal-500 text-white px-4 py-2 rounded-md">
        add
      </button>
      <p>quantity: {count}</p>
      <button onClick={decrement} className="bg-teal-500 text-white px-4 py-2 rounded-md">
        subtract
      </button>
    </div>
  );
};
export default SingleProductPage;
