// import React, { useState, useEffect, useContext } from "react";
// import Home from "./Home";
// import "./Products.css";
// import { ContextValue } from "../context";

// export default function ShoppingCart() {
//   const [cart, setCart] = useState([]);
//   const [products, setProducts] = useState([]);
//   const { value, setValue } = useContext(ContextValue);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data?.products))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const addToCart = (products) => {
//     setCart([...cart, products]);
//     localStorage.setItem("cart", JSON.stringify([...cart, products]));
//     setValue([...cart,products])
// };
// const removeFromCart = (product) => {
//   const updatedCart = cart.filter((item) => item.id !== product.id);
//   setCart(updatedCart);
//   localStorage.setItem("cart", JSON.stringify(updatedCart));
//   setValue(updatedCart);
// };

//   return (
//     <div>
//       <Home />
//       <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>
//       {/* <ul>
//         {cart.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul> */}
     
//       <h2 style={{ textAlign: "center" }}>Available Products:</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
          
//             {/* Id: {product.id}.<br />
//             Title: {product.title}
//             <br />
//             Brand: {product.brand}
//             <br />
//             Category: {product.category}
//             <br />
//             Description:{product.description}
//             <br />
//             Price: ${product.price}
//             <br /> */}
//             {/* Image: <br /> */}
//             <img src={product?.thumbnail} />{" "}
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//             {/* <button onClick={() => removeFromCart(product)}>Delete</button> */}
//             <br />
//             DiscountPercentag:{product.discountPercentage}
//             <br />
//             Rating:{product.rating}
//             <br />
//             Stock:{product.stock}
//             <br />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState, useEffect, useContext } from "react";
import Home from "./Home";
import "./Products.css";
import { ContextValue } from "./context";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const { value, setValue } = useContext(ContextValue);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data?.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getProductCountInCart = (productId) => {
    return cart.filter((item) => item.id === productId).length;
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setValue(updatedCart);
  };

  const removeFromCart = (productId) => {
    const indexToRemove = cart.findIndex((item) => item.id === productId);
    if (indexToRemove !== -1) {
      const updatedCart = [...cart.slice(0, indexToRemove), ...cart.slice(indexToRemove + 1)];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setValue(updatedCart);
    }
  };

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  return (
    <div>
      <Home />
      <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>

      <h2 style={{ textAlign: "center" }}>Available Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product?.thumbnail} alt={`Product ${product.id}`} />{" "}
            <button onClick={() => addToCart(product)}>
              Add to Cart ({getProductCountInCart(product.id)})
            </button>
            {isInCart(product.id) && (
              <button onClick={() => removeFromCart(product.id)}>
                Remove
              </button>
            )}
            <br />
            Discount Percentage: {product.discountPercentage}
            <br />
            Rating: {product.rating}
            <br />
            Stock: {product.stock}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
