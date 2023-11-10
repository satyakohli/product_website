import React from "react";
// import "./Product.css";
function ProductDetails({ product, onClose }) {
  return (
    <div className="container1">
      <div className="column">
        <img className="img-product-details"src={product.thumbnail} alt={product.title} />
      </div>
      <div className="column">
        <h2 className="text-center"><u>{product.title}</u></h2>
        <p>{product.description}</p>
        <h2>Price: ${product.price}</h2>
        <h3>Rating: {product.rating}</h3>
        <h4>Brand: {product.brand}</h4>
        <h4>
          Discount:
          <strike className="red"> {product.discountPercentage}</strike>
        </h4>

        <button className="close-button" onClick={onClose}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;