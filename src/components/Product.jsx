// import React, { useEffect, useState } from "react";
// import ProductDetails from "./ProductDetails";

// function Product({ onItemClick }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchData("https://dummyjson.com/products");
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/products");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const jsonData = await response.json();
//       setProducts(jsonData.products);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>
//         <u>Product List:</u>
//       </h1>
//       <div className="grid-container">
//         {products.map((product) => (
//           <div className="grid-item" key={product.id}>
//             <div className="grid">
//               <div className="">
//                 <img
//                   className="img-product"
//                   src={product.thumbnail}
//                   alt={product.title}
//                 />
//                 <h2>{product.title}</h2>
//                 <button
//                   className="open-button"
//                   onClick={() => onItemClick(product)}
//                 >
//                   <ProductDetails/>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;
import React, { useEffect, useState } from "react";
// import "./Product.css";
//  import Addcart from "./Addcart";

function Product({ onItemClick }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData("https://dummyjson.com/products");
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setProducts(jsonData.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <h1>
        <u>Product List:</u>
      </h1>
      <div className="grid-container">
        {products.map((product) => (
          <div className="grid-item" key={product.id}>
            <div className="grid">
              <div className="">
                <img
                  className="img-product"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h2>{product.title}</h2>
                <button
                  className="open-button"
                  onClick={() => onItemClick(product)}
                >
                  View Details
                
                </button>
                <button className="add_cart" type="submit"><Addcart/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;