import React, { useState } from 'react'
 import Product from './product';  
import ProductDetails from './ProductDetails';



export default function Productinfo() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
      setSelectedProduct(product);
    };
  
    const handleCloseDetails = () => {
      setSelectedProduct(null);
    };
  return (
    <div className="App">
    {selectedProduct ? (
      <ProductDetails product={selectedProduct} onClose={handleCloseDetails} />
    ) : (
      <Product onItemClick={handleProductClick} />
    )}
  </div>
  )
}
