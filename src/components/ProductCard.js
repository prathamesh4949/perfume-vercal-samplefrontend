import React from 'react';
import { Link } from 'react-router-dom';
// Note: Remove the ProductCard.css import since we're using the grid layout CSS
// import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <div key={i} className="star-container">
          <svg className="star filled" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      );
    }
    
    // Half star
    if (hasHalfStar) {
      const halfPercentage = (rating - fullStars) * 100;
      stars.push(
        <div key={fullStars} className="star-container">
          <svg className="star empty" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <svg 
            className="star filled" 
            viewBox="0 0 24 24"
            style={{ 
              clipPath: `inset(0 ${100 - halfPercentage}% 0 0)`,
              position: 'absolute',
              top: 0,
              left: 0
            }}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <div key={fullStars + (hasHalfStar ? 1 : 0) + i} className="star-container">
          <svg className="star empty" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      );
    }
    
    return stars;
  };

  return (
    <div className="product-card">
      <img
        src={product.images?.[0] || '/placeholder.jpg'}
        alt={product.name}
        className="product-img"
        onError={(e) => {
          e.target.src = '/placeholder.jpg';
        }}
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="desc">{product.description}</p>
        <span className="price">{product.price}</span>
        <div className="review-stars">
          {renderStars(product.averageRating || 0)}
          <span className="review-count">({product.reviews?.length || 0})</span>
        </div>
      </div>
      <div className="card-footer">
        <Link to={`/product/${product._id}`} className="btn-view">
          <span className="eye-icon">👁</span>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
