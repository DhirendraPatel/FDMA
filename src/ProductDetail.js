import React from 'react';
import "./ProductDetail.css"; 

const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="product-detail-popup" style={{width: "60%"}}>
      <div className="product-detail-content" style={{display: "flex"}}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <div className="product-detail-image" style={{marginLeft: "5%", marginTop: "5%"}}>
          <img alt="" src={`data:image/jpeg;base64,${product.image}`} style={{borderRadius: "2rem"}}/>
        </div>
        <div className="product-detail-info" style={{marginLeft: "45%"}}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p style={{fontWeight: "bold", color: "black"}}>Price: {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
