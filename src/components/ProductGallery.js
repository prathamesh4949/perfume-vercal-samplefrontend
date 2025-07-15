import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-img-container">
        <img
          src={product.image || '/api/placeholder/280/220'}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />
      </div>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        
        {product.brand && (
          <div className="product-brand">{product.brand}</div>
        )}
        
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}
        
        <div className="product-price">
          {product.price || 'Price not available'}
        </div>
        
        <button className="btn-view">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
