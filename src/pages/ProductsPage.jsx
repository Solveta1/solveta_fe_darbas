import { useEffect, useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productsError, setProductsError] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_PRODUCTS_URL);
        const data = await response.json();
        setProducts(data.products);
        setProductsError(false);
      } catch (error) {
        setProductsError(true);
      }
      setIsLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (productsError) {
    return <h1>Something went wrong while getting products</h1>;
  }

  if (!products.length) {
    return <h1>No products found</h1>;
  }

  return (
    <div className=' grid grid-cols-3 ml-8 mr-8'>
      {products &&
        products.map((product) => (
          <div className='border-2 border-solid w-80 p-4' key={product.id}>
            <img
              className='w-80 h-64'
              src={product.thumbnail}
              alt='lalala'
              width='300px'
            />
            <p className='mb-1'>Title: {product.title}</p>
            <p className='mb-1 mt-1'>Description: {product.description}</p>
            <p className='mb-1 mt-1'>Price: {product.price}</p>
            <p className='mb-1 mt-1'>Rating: {product.rating}</p>
            <p className='mb-1 mt-1'>Brand: {product.brand}</p>
            <p className='mb-1 mt-1'>Category: {product.category}</p>
          </div>
        ))}
    </div>
  );
}

export default ProductsPage;
