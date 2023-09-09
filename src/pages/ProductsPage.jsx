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
    return;
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
    <div>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <img src={product.thumbnail} alt='lalala' width='300px' />
          </div>
        ))}
    </div>
  );
}

export default ProductsPage;
