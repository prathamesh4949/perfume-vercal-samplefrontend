import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://change-your-avatar-prathamesh4949-f.vercel.app/api/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="homepage">
      <h1>Explore Our Perfumes</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
