// src/components/Products.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://change-your-avatar-prathamesh4949-f.vercel.app/api/products', {
          timeout: 5000, // 5 second timeout
        });
        setProducts(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="product-list" style={{ padding: '40px' }}>
        <h2 style={{ textAlign: 'center' }}>Our Exclusive Perfumes</h2>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          Loading products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list" style={{ padding: '40px' }}>
        <h2 style={{ textAlign: 'center' }}>Our Exclusive Perfumes</h2>
        <div style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="product-list" style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center' }}>Our Exclusive Perfumes</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
            No products available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
